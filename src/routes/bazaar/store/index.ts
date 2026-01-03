import { defineStore } from "pinia";
import Api from "../bazaar.api";

export const useBazaarStore = defineStore("bazaar", {
  state: () => ({
    abortXhr: false,
    error: {},
    paging: {
      page: 1,
      limit: 10,
      pages: 0,
      total: 0,
      filters: [],
    },
    categories: [],
    products: [],
    orders: [],
    reports: [],
    sales: [],
    salesSparkline: {
      labels: [],
      value: [],
    },
    totalSales: 0,
    totalSalesSparkline: {
      labels: [],
      value: [],
    },
    totalPosts: 0,
    totalOrders: 0,
    totalOrdersSparkline: {
      labels: [],
      value: [],
    },
    totalShipping: 0,
    totalUsers: 0,
    totalUsersSparkline: {
      labels: [],
      value: [],
    },
    totalViews: 0,
    totalViewsSparkline: {
      labels: [],
      value: [],
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
      est_sales: 0,
    },
  }),

  actions: {
    async getCategories() {
      try {
        const response = await Api().getCategories();
        this.categories = response.data.categories;
      } catch (response) {
        this.setError(response);
      }
    },

    setAbortXhr(abortXhr) {
      this.abortXhr = abortXhr;
      if (abortXhr) this.isLoading = false;
    },

    setStepper(step) {
      this.stepper = step;
    },

    async exportMonthlySalesReport(filters) {
      this.isLoading = true;
      try {
        const response = await Api().exportMonthlySalesReport(filters);
        this.stepper = 3;
        this.isLoading = false;
      } catch (response) {
        this.setError(response);
      }
    },

    async getTotalOrders(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getTotalOrders(payload);
        this.totalOrdersSparkline = response.data.sparkline;
        this.totalOrders = response.data.total_orders;
        this.totalShipping = response.data.total_shipping;
        // this.totalSalesLoading = false;
      } catch (response) {
        this.setError(response);
      }
    },

    async getTotalUsers(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getTotalUsers(payload);
        this.totalUsersSparkline = response.data.sparkline;
        this.totalUsers = response.data.total_users;
        // this.totalPosts  = response.data.total_posts;
        // this.totalSalesLoading = false;
      } catch (response) {
        this.setError(response);
      }
    },

    async getTotalSales(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getTotalSales(payload);
        this.totalSalesSparkline = response.data.sparkline;
        this.totalSales = response.data.total_sales;
        this.totalSalesLoading = false;
      } catch (response) {
        this.setError(response);
      }
    },

    async getSalesSparkline(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getSalesSparkline(payload);
        this.salesSparkline = response.data.sparkline;
        this.isLoading = false;
      } catch (response) {
        this.setError(response);
      }
    },

    async getReports(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getReports(payload);
        this.reports = response.data.reports;
        this.isLoading = false;
      } catch (response) {
        this.setError(response);
      }
    },

    async getMonthlySales(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getMonthlySales(payload);
        this.sales = response.data.sales;
        this.isLoading = false;
        if (!this.abortXhr) this.stepper = 2;
      } catch (response) {
        this.setError(response);
      }
    },

    async getOrders(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getOrders(payload);
        this.orders = response.data.data;
        this.paging.total = response.data.data.total;
      } catch (response) {
        this.setError(response);
      }
    },

    async getProducts(filters) {
      this.isLoading = true;
      try {
        const response = await Api().getProducts({
          page: this.paging.page,
          limit: this.paging.limit,
          filters: this.productsFilters,
          ...filters,
        });
        this.products = response.data.data; // Assuming structure based on mutations
        this.totalProducts = response.data.total_count;
        this.isLoading = false;
        this.isProductsFilterDialogOn = false;
      } catch (response) {
        this.setError(response);
      }
    },

    applyProductsFilters(payload) {
      this.productsFilters = payload;
      this.paging.page = 1;
      // this.getProducts() // Dispatch was commented out in original
    },

    goToPage(payload) {
      this.paging.page = payload;
      this.getProducts();
    },

    showProductsFilter() {
      this.isProductsFilterDialogOn = true;
    },

    hideProductsFilter() {
      this.isProductsFilterDialogOn = false;
    },

    async loadProductsStats() {
      try {
        const response = await Api().getProductsStats({
          filters: this.productsFilters,
        });
        this.productsStats = response.data;
      } catch (response) {
        this.setError(response);
      }
    },

    async getTotalViews(payload) {
      this.isLoading = true;
      try {
        const response = await Api().getTotalViews(payload);
        this.totalViewsSparkline = response.data.sparkline;
        this.totalViews = response.data.total_views;
        this.totalPosts = response.data.total_posts;
        // this.totalSalesLoading = false;
      } catch (response) {
        this.setError(response);
      }
    },

    setError(response) {
      if (response && response.data && response.data.error) {
        this.error = {
          statusText: response.statusText,
          ...response.data.error,
        };
      } else {
        this.error = response;
      }
      this.isLoading = false;
    },
  },
});
