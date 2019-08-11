export default {
  abortXhr: false,
  error: {},
  paging: {
    page: 1,
    limit: 10,
    pages: 0,
    total: 0,
    filters: []
  },
  categories: [],
  products: [],
  orders: [],
  reports: [],
  sales: [],
  salesSparkline: {
    labels: [],
    value: []
  },
  totalSales: 0,
  totalSalesSparkline: {
    labels: [],
    value: []
  },
  totalPosts: 0,
  totalOrders: 0,
  totalOrdersSparkline: {
    labels: [],
    value: []
  },
  totalShipping: 0,
  totalUsers: 0,
  totalUsersSparkline: {
    labels: [],
    value: []
  },
  totalViews: 0,
  totalViewsSparkline: {
    labels: [],
    value: []
  },
  totalSalesLoading: false,
  totalProducts: 0,
  isProductsFilterDialogOn: false,
  isLoading: false,
  productsFilters: [],
  stepper: 1,
  productsStats: {
    total_stock: 0,
    unique_stock: 0,
    unique_in_stock: 0,
    in_stock_value: 0,
    avg_discount: 0,
    est_discount: 0,
    total_sales: 0,
    est_sales: 0
  }
}
