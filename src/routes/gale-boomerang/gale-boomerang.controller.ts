import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import navigationMixin from "@/mixins/navigation.mixin";

export default defineComponent({
  name: "GaleBoomerang",
  mixins: [navigationMixin],
  data() {
    return {
      page_title: "Visits",
      page_description: "Based on a three months data",
    };
  },
  computed: {
    ...mapStores(useCompassStore),
    plugin() {
      return this.compassStore.activePlugin;
    },
  },
  methods: {
    toggleAppNavDrawer() {
      this.compassStore.setIsAppNavDrawerOpen(!this.compassStore.isAppNavDrawerOpen);
    },
  },
});
