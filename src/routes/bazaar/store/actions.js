import Api from '../bazaar.api'

export default {
  GET_PRODUCTS: getProducts,
  GOTO_PAGE: goToPage,
  LOAD_PRODUCTS_STATS: loadProductsStats,
  APPLY_PRODUCTS_FILTERS: applyProductsFilters,
  SHOW_PRODUCTS_FILTER: showProductsFilter,
  HIDE_PRODUCTS_FILTER: hideProductsFilter,
  GET_SALES_SPARKLINE: getSalesSparkline,
  GET_REPORTS: getReports,
  GET_ORDERS: getOrders,
  GET_MONTHLY_SALES: getMonthlySales,
  GET_TOTAL_SALES: getTotalSales,
  GET_TOTAL_VIEWS: getTotalViews,
  GET_TOTAL_USERS: getTotalUsers,
  GET_TOTAL_ORDERS: getTotalOrders,
  SET_STEPPER: setStepper,
  EXPORT_MONTHLY_SALES_REPORT: exportMonthlySalesReport,
  SET_ABORT_XHR: setAbortXhr,
  GET_CATEGORIES: getCategories
}

function getCategories ({ commit }) {
  Api()
    .getCategories()
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('CATEGORIES_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function setAbortXhr ({ commit }, abortXhr) {
  commit('ABORT_XHR_SET', abortXhr)
  if (abortXhr) commit('SET_IS_LOADING', false)
}

function setStepper ({ commit }, step) {
  commit('STEPPER_SET', step)
}

function exportMonthlySalesReport ({ commit }, filters) {
  commit('SET_IS_LOADING', true)
  Api()
    .exportMonthlySalesReport(filters)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('MONTHLY_SALES_REPORT_EXPORTED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getTotalOrders ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getTotalOrders(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('TOTAL_ORDERS_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}
function getTotalUsers ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getTotalUsers(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('TOTAL_USERS_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getTotalSales ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getTotalSales(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('TOTAL_SALES_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getSalesSparkline ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getSalesSparkline(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('SALES_SPARKLINE_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getReports ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getReports(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('REPORTS_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getMonthlySales ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getMonthlySales(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('SALES_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getOrders ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getOrders(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('ORDERS_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getProducts ({ commit, state }, filters) {
  commit('SET_IS_LOADING', true)

  Api()
    .getProducts({
      page: state.paging.page,
      limit: state.productsLimit,
      filters: state.productsFilters,
      ...filters
    })
    .then(populateState)
    .catch(handleErrors)

  function populateState (response) {
    commit('PRODUCTS_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function applyProductsFilters ({ commit }, payload) {
  commit('SET_PRODUCTS_FILTER', payload)
  // dispatch('GET_PRODUCTS');
}

function goToPage ({ dispatch, commit }, payload) {
  commit('SET_PAGE', payload)
  dispatch('GET_PRODUCTS')
}

function showProductsFilter ({ commit }) {
  commit('SET_PRODUCTS_FILTER_DIALOG', true)
}

function hideProductsFilter ({ commit }) {
  commit('SET_PRODUCTS_FILTER_DIALOG', false)
}

function loadProductsStats ({ commit, state }) {
  Api()
    .getProductsStats({
      filters: state.productsFilters
    })
    .then(populateState)
    .catch(handleErrors)

  function populateState (response) {
    commit('PRODUCTS_STATS_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}

function getTotalViews ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  Api()
    .getTotalViews(payload)
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('TOTAL_VIEWS_LOADED', response)
  }

  function handleErrors (response) {
    commit('SET_ERROR', response)
  }
}
