import { mapStores } from 'pinia'
import { useCompassStore } from '@/routes/compass/store'

export default {
  data () {
    return {
      children: [],
      breadcrumbs: []
    }
  },
  computed: {
    ...mapStores(useCompassStore),
    breadtrail () {
      const vm = this
      if (!vm.breadcrumbs) return []
      return vm.breadcrumbs.map((breadcrumb, index) => {
        const activePlugin = (vm as any).compassStore.activePlugin
        const plugin = (vm as any).compassStore.plugin
        const pluginName = activePlugin ? activePlugin.Name : (plugin ? plugin.Name : 'COMPASS')
        const text = index === 0
          ? pluginName
          : (breadcrumb.name || breadcrumb.meta?.title || '...')
        const disabled = index === vm.breadcrumbs.length - 1
        const href = `#${breadcrumb.path}`
        return {
          title: text,
          disabled,
          href
        }
      })
    },
    isAppNavDrawerOpen: {
      get () {
        return this.compassStore.isAppNavDrawerOpen
      },
      set (isOpen) {
        this.compassStore.setIsAppNavDrawerOpen(isOpen)
      }
    }
  },
  methods: {
    resetChildrenBreadcrumbs () {
      this.children = []
      this.breadcrumbs = this.$route.matched
    }
  },
  watch: {
    $route: {
      handler () {
        this.resetChildrenBreadcrumbs()
      },
      immediate: true
    }
  }
}
