import { mapStores } from "pinia";
import { useBazaarStore } from "../../../store";

export default {
  name: "orders-index",
  data,
  computed: getComputed(),
  methods: getMethods(),
  created: onCreated,
};

function data() {
  return {
    headers: [
      {
        title: "Order",
        key: "order",
      },
      {
        title: "Date",
        key: "date",
      },
      {
        title: "Status",
        key: "status",
      },
      {
        title: "Billing",
        key: "billing",
      },
      {
        title: "Total",
        key: "total",
      },
    ] as any[],
  };
}

function getComputed() {
  return {
    ...mapStores(useBazaarStore),
    orders(): any[] {
      return this.bazaarStore.orders as any[];
    },
    page: {
      get() {
        return this.bazaarStore.paging.page;
      },
      set(page) {
        this.bazaarStore.goToPage(page);
      },
    },
    limit() {
      return this.bazaarStore.paging.limit;
    },
    total() {
      // Added total for Pagination if needed
      return this.bazaarStore.paging.total;
    },
  };
}

function getMethods() {
  return {};
}

function onCreated() {}
