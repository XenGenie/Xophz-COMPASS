import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import * as _ from "lodash";

export default defineComponent({
  name: "Xophz Compass",
  data() {
    return {
      _,
    };
  },
  created() {
    this.loadCompass();
  },
  computed: {
    ...mapStores(useCompassStore),
  },
  methods: {
    loadCompass() {
      this.compassStore.getCurrentUser();
      this.compassStore.loadPlugins();
    },
  },
});
