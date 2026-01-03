import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";

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
});
