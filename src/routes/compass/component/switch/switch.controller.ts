export default {
  name: 'on-switch',
  props: {
    plugin: Object,
    label: String
  },
  data,
  computed: getComputed(),
  watch: getWatched()
}

function data () {
  return {
  }
}

function getComputed () {
  return {
    isOn: {
      get () {
        return this.plugin.isActivated
      },
      set (value) {
        if (value) {
          this.$store.dispatch('compass/ACTIVATE_PLUGIN', this.plugin)
        } else {
          this.$store.dispatch('compass/DEACTIVATE_PLUGIN', this.plugin)
        }
      }
    }
  }
}

function getWatched () {
  return {
  }
}
