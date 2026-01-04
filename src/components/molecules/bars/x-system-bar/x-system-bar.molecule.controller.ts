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
    blogInfo(): any {
      return (this as any).compassStore.blogInfo;
    },
    isWpMenuOpen: {
      get(): boolean {
        return (this as any).compassStore.isWpMenuOpen;
      },
      set(isOpen: boolean) {
        (this as any).compassStore.setWpMenu(isOpen);
      },
    },
    wpSwitchLabel(): string {
      return (this as any).isWpMenuOpen ? "On" : "Off";
    },
    bottomSheet: {
      get(): boolean {
        return (this as any).compassStore.bottomSheet;
      },
      set(isActive: boolean) {
        (this as any).compassStore.setBottomSheet(isActive);
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
