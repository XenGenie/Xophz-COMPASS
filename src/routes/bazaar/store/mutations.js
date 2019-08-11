export default {
  ORDERS_LOADED: ordersLoaded,
  PRODUCTS_LOADED: productsLoaded,
  PRODUCTS_STATS_LOADED: productsStatsLoaded,
  REPORTS_LOADED: reportsLoaded,
  SALES_LOADED: salesLoaded,
  SALES_SPARKLINE_LOADED: salesSparklineLoaded,
  SET_ERROR: setError,
  SET_IS_LOADING: setIsLoading,
  SET_PAGE: setPage,
  SET_PRODUCTS_FILTER_DIALOG: setProductsFilterDialog,
  SET_PRODUCTS_FILTER: saveProductsFilterForm,
  TOTAL_ORDERS_LOADED: totalOrdersLoaded,
  TOTAL_SALES_LOADED: totalSalesLoaded,
  TOTAL_USERS_LOADED: totalUsersLoaded,
  TOTAL_VIEWS_LOADED: totalViewsLoaded,
  STEPPER_SET: stepperSet,
  MONTHLY_SALES_REPORT_EXPORTED: monthlySalesReportExported,
  ABORT_XHR_SET: abortXhrSet,
  CATEGORIES_LOADED: categoriesLoaded
}

function categoriesLoaded (state, payload) {
  state.categories = payload.data.categories
}

function abortXhrSet (state, abortXhr) {
  state.abortXhr = abortXhr
}

function stepperSet (state, step) {
  state.stepper = step
}

function monthlySalesReportExported (state, payload) {
  state.stepper = 3
  state.isLoading = false
}

function totalOrdersLoaded (state, payload) {
  state.totalOrdersSparkline = payload.data.sparkline
  state.totalOrders = payload.data.total_orders
  state.totalShipping = payload.data.total_shipping
  // state.totalSalesLoading = false;
}
function totalUsersLoaded (state, payload) {
  state.totalUsersSparkline = payload.data.sparkline
  state.totalUsers = payload.data.total_users
  // state.totalPosts  = payload.data.total_posts;
  // state.totalSalesLoading = false;
}
function totalViewsLoaded (state, payload) {
  state.totalViewsSparkline = payload.data.sparkline
  state.totalViews = payload.data.total_views
  state.totalPosts = payload.data.total_posts
  // state.totalSalesLoading = false;
}

function totalSalesLoaded (state, payload) {
  state.totalSalesSparkline = payload.data.sparkline
  state.totalSales = payload.data.total_sales
  state.totalSalesLoading = false
}

function salesSparklineLoaded (state, payload) {
  state.salesSparkline = payload.data.sparkline
  state.isLoading = false
}

function reportsLoaded (state, payload) {
  state.reports = payload.data.reports
  state.isLoading = false
}
function productsLoaded (state, payload) {
  state.products = payload.data
  state.totalProducts = payload.total_count
  state.isLoading = false
  state.isProductsFilterDialogOn = false
}

function salesLoaded (state, payload) {
  state.sales = payload.data.sales
  state.isLoading = false
  if (!state.abortXhr) state.stepper = 2
}

function ordersLoaded (state, payload) {
  state.orders = payload.data.data
  state.paging.total = payload.data.data.total
}

function productsStatsLoaded (state, payload) {
  state.productsStats = payload.data
}

function setProductsFilterDialog (state, isActive) {
  state.isProductsFilterDialogOn = isActive
}

function saveProductsFilterForm (state, payload) {
  state.paging.page = 1
  state.productsFilters = payload
}

function setIsLoading (state, isLoading) {
  state.isLoading = isLoading
  if (isLoading) {
    state.error = {}
    state.abortXhr = false
  }
}

function setPage (state, payload) {
  state.paging.page = payload
}

function setError (state, payload) {
  state.error = {
    statusText: payload.statusText,
    ...payload.data.error
  }
  state.isLoading = false
}
