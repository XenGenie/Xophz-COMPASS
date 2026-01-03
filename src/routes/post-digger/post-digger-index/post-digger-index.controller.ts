import { mapStores } from "pinia";
import { usePostDiggerStore } from "../post-digger.store";

function data() {
  return {
    showDialog: false,
    selected: [],
    search: "",
    headers: [
      { title: "ID", key: "ID", sortable: true },
      { title: "Post Title", key: "post_title", sortable: true },
      { title: "Date", key: "post_date", sortable: true },
      { title: "Dialog", key: "comment_status", sortable: true },
      { title: "Comments", key: "comment_count", sortable: true },
      { title: "Actions", key: "actions", sortable: false },
    ] as any[],
  };
}

function mounted() {}

function created() {
  this.loadPosts();
}

function getComputed() {
  return {
    ...mapStores(usePostDiggerStore),
    posts(): any[] {
      // Handle Map/Object to Array conversion if posts is an object
      const postsData = this.postDiggerStore.posts as any;
      if (Array.isArray(postsData)) return postsData;
      if (typeof postsData === "object" && postsData !== null) return Object.values(postsData);
      return [];
    },
    loadingPosts() {
      return this.postDiggerStore.loading;
    },
    selectedPost() {
      if (this.selected.length > 0) {
        // Assuming selected contains IDs because item-value="ID"
        const id = this.selected[0];
        return this.posts.find((p) => p.ID === id);
      }
      return null;
    },
  };
}

function getMethods() {
  return {
    loadPosts() {
      this.postDiggerStore.loadPosts();
    },
    formatDate(dateString) {
      if (!dateString) return "";
      return new Date(dateString).toLocaleString();
    },
    onSelect(items) {
      this.selected = items;
    },
    openEditor() {
      this.showDialog = true;
    },
  };
}

export default {
  data,
  computed: {
    ...getComputed(),
    ...mapStores(usePostDiggerStore),
  },
  methods: getMethods(),
  created,
};
