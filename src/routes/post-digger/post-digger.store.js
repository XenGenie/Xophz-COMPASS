export default {
  namespaced: true,
  state: getState(),
  actions: getActions(),
  mutations: getMutations()
}

function getActions () {
  return {
    LOAD_POSTS: loadPosts,
    LOAD_POST: loadPost
  }

  function loadPosts ({ commit }) {
    // eslint-disable-next-line
    Vue.compassApi()
      .postDigger()
      .getPosts()
      .then(populatePosts)
      .catch(handleErrors)

    function populatePosts (response) {
      commit('POSTS_LOADED', response.data)
    }

    function handleErrors (response) {
      commit('SET_ERRORS', response)
    }
  }

  function loadPost ({ commit }, postId) {
    // eslint-disable-next-line
    Vue.compassApi()
      .postDigger()
      .getPostById(postId)
      .then(populatePost)
      .catch(handleErrors)

    function populatePost (response) {
      commit('POST_LOADED', response.data)
    }

    function handleErrors (response) {
      commit('SET_ERRORS', response)
    }
  }
}

function getMutations () {
  return {
    POSTS_LOADED: postsLoaded,
    POST_LOADED: postLoaded,
    SET_ERRORS: setErrors
  }
  function postLoaded (state, payload) {
    state.editingPost = payload
    state.loading = false
  }
  function postsLoaded (state, payload) {
    state.posts = payload
    state.loading = false
  }
  function setErrors (state, payload) {
    state.error = payload.data.error
  }
}

function getState () {
  return {
    posts: {},
    editingPost: {},
    loading: true
  }
}
