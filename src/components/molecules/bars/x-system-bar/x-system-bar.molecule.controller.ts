import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useCompassStore } from "@/routes/compass/store";
import userAvatarBtn from "@/components/user-avatar-btn/user-avatar-btn.vue";
import navigationMixin from "@/mixins/navigation.mixin";

export default defineComponent({
  name: "XSystemBarMolecule",
  components: { userAvatarBtn },
  mixins: [navigationMixin as any],
  computed: {
    ...mapStores(useCompassStore),
    blogInfo() {
      return this.compassStore.blogInfo;
    },
    isWpMenuOpen: {
      get() {
        return this.compassStore.isWpMenuOpen;
      },
      set(isOpen) {
        this.compassStore.setWpMenu(isOpen);
      },
    },
    wpSwitchLabel() {
      return this.isWpMenuOpen ? "On" : "Off";
    },
    bottomSheet: {
      get() {
        return this.compassStore.bottomSheet;
      },
      set(isActive) {
        this.compassStore.setBottomSheet(isActive);
      },
    },
  },
  methods: {
    goHome() {
      window.location.href = "/";
    },
    showBottomSheet() {
      this.bottomSheet = !this.bottomSheet;
    },
    wpmenu() {
      this.isWpMenuOpen = !this.isWpMenuOpen;
    },
  },
});
