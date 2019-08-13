import axios from 'axios'
import NProgress from 'nprogress'

const { pathname } = window.location

const ajaxurl = pathname
  .replace('admin.php', 'admin-ajax.php')

const xhr = axios.create({
  baseURL: ajaxurl
})

xhr.interceptors.response.use(
  response => response,
  catchAllResponseFailures
)
xhr.interceptors.request.use(
  modifyAllRequestConfigs,
  error => error
)
// before a request is made start the nprogress
xhr.interceptors.request.use((config) => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
xhr.interceptors.response.use((response) => {
  NProgress.done()
  return response
})

export default {
  get (action, payload) {
    return xhr({
      url: ajaxurl,
      method: 'get',
      params: {
        action,
        ...payload
      }
    })
  },
  post (action, payload) {
    return xhr({
      url: ajaxurl,
      method: 'post',
      params: {
        action,
        ...payload
      }
    })
  },
  put (action, payload) {
    return xhr({
      url: ajaxurl,
      method: 'put',
      params: {
        action,
        ...payload
      }
    })
  },
  delete (action, payload) {
    return xhr({
      url: ajaxurl,
      method: 'delete',
      params: {
        action,
        ...payload
      }
    })
  },
  download (action, payload) {
    return xhr({
      url: ajaxurl,
      params: {
        action,
        ...payload
      },
      responseType: 'blob'
    }).then((response) => {
      const url = window.URL.createObjectURL(
        new Blob([response.data])
      )
      const link = document.createElement('a')
      const filename = response.headers['content-name']
      link.href = url
      link.setAttribute('download', filename)
      document.body.appendChild(link)
      link.click()
    })
  }
}

function modifyAllRequestConfigs (config) {
  const newCfg = { ...config }
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken !== null) {
    newCfg.headers.Authorization = `Bearer ${accessToken}`
  }

  return newCfg
}
function catchAllResponseFailures (error) {
  const originalRequest = error.config
  const errorStatusIsUnauthorized = error.response.status === 401
  const requestHasNotBeenTriedAgain = !originalRequest.triedAgain
  const response = { ...error.response }

  if (errorStatusIsUnauthorized && requestHasNotBeenTriedAgain) {
    originalRequest.triedAgain = true
    return window.axios
      .post('/login/refresh', null)
      .then(getTokenSuccess)
      .catch(getTokenError)
  }

  if (response && response.statusText) {
    response.message = response.statusText
  }

  const errorHasMessageProperty = response &&
      response.data &&
      response.data.message
  if (errorHasMessageProperty && response.data.message !== '') {
    response.message += `: ${response.data.message}`
  }

  const errorIsValidationError = response.status === 422 &&
      response.data.validation_errors
  if (errorIsValidationError) {
    response.message = 'Validation Error: Check above and try again.'
  }

  return Promise.reject(response)

  function getTokenSuccess (token) {
    originalRequest.headers.Authorization = `Bearer ${token.data.accessToken}`
    localStorage.setItem(
      'accessToken',
      token.data.accessToken
    )
    return window.axios(originalRequest)
  }
  function getTokenError (token) {
    const errorIsOauthInvalid = token.response.status === 419

    if (errorIsOauthInvalid) {
      // store.dispatch("user/LOGOUT_FRONTEND").then(logoutSuccess);
    }
    // function logoutSuccess() {
    //     // router.go();
    // }
  }
}
