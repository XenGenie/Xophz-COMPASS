import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import navigationMixin from "@/mixins/navigation.mixin";

export default defineComponent({
  name: "SilverArrow",
  mixins: [navigationMixin],
  data() {
    return {};
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
