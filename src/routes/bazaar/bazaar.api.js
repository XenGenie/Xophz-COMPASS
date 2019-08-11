import api from '@/plugins/api'

export default props => ({
  exportMonthlySalesReport (filters) {
    return api.download('export_monthly_sales_report', filters)
  },
  getCategories () {
    return api.get('get_categories')
  },
  getOrders (filters) {
    return api.post('get_orders', filters)
  },
  getReports (filters) {
    return api.get('get_reports', filters)
  },
  getMonthlySales (filters) {
    return api.post('get_monthly_sales', filters)
  },
  getTotalSales (filters) {
    return api.post('get_total_sales', filters)
  },
  getTotalUsers (filters) {
    return api.post('get_total_users', filters)
  },
  getTotalOrders (filters) {
    return api.post('get_total_orders', filters)
  },
  getTotalViews (filters) {
    return api.post('get_total_views', filters)
  },
  getSalesSparkline (filters) {
    return api.post('get_sales_sparkline', filters)
  },
  getProducts (filters) {
    return api.post('get_products', filters)
  },
  getProductsStats (filters) {
    return api.post('get_products_stats', filters)
  }
})
