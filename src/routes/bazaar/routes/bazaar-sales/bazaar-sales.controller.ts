import { mapStores } from 'pinia'
import { useBazaarStore } from '../../store'
import navDrawer from '@/components/routes-navigation-drawer/routes-navigation-drawer.vue'
import FilterDialog from '../filter/filter.vue'

export default {
  name: 'bazaar-sales',
  data,
  computed: getComputed(),
  methods: getMethods(),
  components: {
    FilterDialog,
    navDrawer
  },
  mounted: onMounted
}

function data () {
  return {
    date: [],
    modal: false,
    isMenuVisible: true
  }
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore)
  }
}

function getMethods () {
  return {
    showSearchDialog () {
      this.bazaarStore.showProductsFilter()
    }
  }
}

function getWatched () {
  return {

  }
}

function onBeforeCreate () {

}

function onCreated () {
}

function onBeforeMount () {

}

function onMounted () {
  this.billboard = {
    h1: this.$refs.billboardH1.innerHTML,
    block: this.$refs.billboardBlock.innerHTML
  }
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
