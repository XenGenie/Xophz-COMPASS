import { mapStores } from 'pinia'
import { useBazaarStore } from '../../../store'

export default {
  name: 'monthly-sales',
  data,
  props: ['sheet'],
  computed: getComputed(),
  methods: getMethods(),
  watch: getWatched(),
  created: onCreated,
  mounted: onMounted,
  components: {}
}

function data () {
  return {
    pickerDate: '',
    date: '',
    status: [
      'completed',
      'processing',
      'refunded',
      'on hold',
      'pending payment',
      'canceled',
      'failed'
    ],
    selectStatus: [
      'completed',
      'processing',
      'refunded'
    ],
    modal: false,
    menu: false,
    localTime: true,
    sku: '',
    skuScope: 'start',
    skuScopeOptions: [],
    scopeProps: [
      {
        value: 'start',
        text: 'Starting with... _'
      }, {
        value: 'end',
        text: '...Ending with _'
      }, {
        value: 'contain',
        text: 'Containing _'
      }, {
        value: 'exact',
        text: 'Is Exactly _'
      }, {
        value: 'not',
        text: 'Does NOT Contain _'
      }
    ],
    isMenuVisible: true
  }
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore),
    abortXhr: {
      get () {
        return this.bazaarStore.abortXhr
      },
      set (abortXhr) {
        this.bazaarStore.setAbortXhr(abortXhr)
      }
    },
    stepper: {
      get () {
        return this.bazaarStore.stepper
      },
      set (step) {
        this.bazaarStore.setStepper(step)
      }
    },
    error () {
      return this.bazaarStore.error
    },
    filters () {
      return this.bazaarStore.productsFilters
    },
    stats () {
      return this.bazaarStore.productsStats
    },
    sales () {
      return this.bazaarStore.sales
    },
    loading () {
      return this.bazaarStore.isLoading
    },
    filename: {
      get () {
        const vm = this
        const sku = vm.sku ? vm.sku : 'all'
        return `sales-${
          vm.date
        }-${
          sku
        }-${
          vm.selectStatus.join().replace(/,/g, '-')
        }.csv`
      }
    }
  }
}

function getMethods () {
  return {
    closeWindow () {
      window.close()
    },
    runReport,
    enterBtnPressed,
    dispatchMonthlySales,
    getLastMonth,
    getDaysInMonth,
    exportReport,
    getFilters,
    formatBetweenRange,
    removeStatus,
    clicked
  }

  function clicked () {
  }

  function getFilters () {
    const vm = this
    return {
      sku_scope: vm.skuScope,
      status: vm.selectStatus,
      sku: vm.sku,
      gmt: vm.gmt,
      date: vm.date,
      filename: vm.filename
    }
  }

  function removeStatus (item) {
    this.selectStatus.splice(this.selectStatus.indexOf(item), 1)
    this.selectStatus = [...this.selectStatus]
  }

  function exportReport () {
    const vm = this
    vm.bazaarStore.exportMonthlySalesReport(vm.getFilters())
  }

  function dispatchMonthlySales () {
    const vm = this
    vm.bazaarStore.getMonthlySales(vm.getFilters())
  }

  function enterBtnPressed () {
    this.dispatchMonthlySales()
  }
  function runReport () {
    this.dispatchMonthlySales()
  }

  function getLastMonth () {
    const date = new Date()
    date.setMonth(date.getMonth() - 1)

    let month = date.getMonth() + 1
    month = month < 10 ? `0${month}` : month

    const lastMonth = `${date.getFullYear()}-${month}`
    return lastMonth
  }

  function getDaysInMonth (date) {
    const ym = date.split('-')
    const y = ym[0]
    const m = ym[1]
    return new Date(y, m, 0).getDate()
  }

  function formatBetweenRange (yearMonth) {
    const startOfMonth = `${yearMonth}-01`
    const endOfMonth = `${yearMonth}-${this.getDaysInMonth(yearMonth)}`

    const startDate = new Date(startOfMonth)
    const endDate = new Date(endOfMonth)

    endDate.setDate(endDate.getDate() + 1)
    endDate.setMinutes(endDate.getMinutes() - 1)

    const utcStart = (startDate.getTime() + startDate.getTimezoneOffset() * 60 * 1000) / 1000
    const utcEnd = (endDate.getTime() + endDate.getTimezoneOffset() * 60 * 1000) / 1000

    return `${utcStart}...${utcEnd}`
  }
}

function getWatched () {
  return {
    pickerDate () {
    },
    sku (sku) {
      const vm = this
      vm.skuScopeOptions = vm.scopeProps.map(formatOptionText)
      function formatOptionText (option) {
        return {
          value: option.value,
          text: option.text.replace('_', sku)
        }
      }
    }
  }
}

function onBeforeCreate () {
}

function onCreated () {
  const vm = this
  vm.date = vm.getLastMonth()
  vm.skuScopeOptions = vm.scopeProps
}

function onBeforeMount () {
}

function onMounted () {
  const vm = this
  vm.loading = false
  if (vm.sheet) {
    vm.exportReport()
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
