import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import XCompassAppBar from "@/components/molecules/bars/x-compass-app-bar/x-compass-app-bar.vue";

export default defineComponent({
  name: "PegasusBoots",
  data() {
    return {};
  },
  computed: {
    ...mapStores(useCompassStore),
    plugin() {
      return this.compassStore.activePlugin;
    },
  },
  methods: {},
  components: {
    XCompassAppBar,
  },
});
