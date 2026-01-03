import { mapStores } from 'pinia'
import { useBazaarStore } from '../../../store'

export default {
  computed: getComputed()
}

function getComputed () {
  return {
    ...mapStores(useBazaarStore),
    products: {
      get () {
        return this.bazaarStore.products
      },
      set (value) {
        // no-op or commit?
      }
    }
  }
}
