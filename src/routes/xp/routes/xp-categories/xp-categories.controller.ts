import { mapStores } from 'pinia'
import { useXpStore } from '../../store'

export default {
  name: 'xp-job-categories',
  // DATA
  data,
  props: [],
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
  transitions: {},
  partials: {}
}

function data () {
  return {
    showAddNewForm: true,
    valid: false,
    firstname: '',
    lastname: '',
    mini: false,
    description: '',
    parentCategory: {
      text: 'none',
      value: false
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    slug: '',
    slugRules: [],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }
}

function getComputed () {
  return {
    ...mapStores(useXpStore),
    categories: {
      get () {
        return this.xpStore.categories
      }
    },
    listParentCategories: {
      get () {
        return [
          {
            text: 'None',
            value: false
          }
        ]
      }
    }
  }
}

function getMethods () {
  return {
    addNewCategory
  }
  function addNewCategory () {
    const vm = this
    vm.xpStore.addNewCategory({
      name: vm.name,
      slug: vm.slug,
      description: vm.description,
      parent: vm.parentCategory.value
    })
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
