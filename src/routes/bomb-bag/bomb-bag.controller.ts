import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import navigationMixin from "@/mixins/navigation.mixin";

export default defineComponent({
  name: "BombBag",
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
  created: onCreated,
  methods: {
    toggleAppNavDrawer() {
      this.compassStore.setIsAppNavDrawerOpen(!this.compassStore.isAppNavDrawerOpen);
    },
  },
});

function onCreated() {
  // this.compassStore.toggleNav(true)
}
