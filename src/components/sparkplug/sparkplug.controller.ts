export default {
  name: 'sparkplug',
  // DATA
  data,
  props: {
    color: {
      type: String
    },
    icon: {
      type: String
    },
    labels: {
      type: Array
    },
    items: {
      type: Array
    },
    value: {
      type: Array
    },
    header: {

    },
    subheader: {
      type: String
    },
    plug: {
      type: String
    },
    plugIcon: {
      type: String
    },
    plugSpark: {
    }
  },
  computed: getComputed(),
  methods: getMethods(),
  watch: getWatched(),
  // LIFECYCLE
  beforeCreate: onBeforeCreate,
  created: onCreated,
  beforeMount: onBeforeMount,
  mounted: onMounted,
  beforeUpdate: onBeforeUpdate,
  updated: onUpdated,
  activated: onActivated,
  deactivated: onDeactivated,
  beforeDestroy: onBeforeDestory,
  destroyed: onDestroyed,
  // ASSETS
  components: {},
  mixins: [],
  transitions: {},
  partials: {}
}

function data () {
  return {
    autoDraw: false
  }
}

function getComputed () {
  return {
    labelLength: {
      get () {
        return this.labels.length
      }
    }
  }
}

function getMethods () {
  return {

    formatCurrency (value) {
      if (value === undefined || value === null) return ''
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    }
  }
}



function getWatched () {
  return {
    labelLength (labelLength) {
      this.autoDraw = true
      if (labelLength > 6) {
        this.labels.splice(-1, 1)
        this.items.splice(-1, 1)
      }
    }
  }
}

function onBeforeCreate () {

}


function onMounted () {
}

function onBeforeUpdate () {

}

function onUpdated () {

}

function onActivated () {

}

function onDeactivated () {

}

function onBeforeDestory () {

}

function onDestroyed () {

}
