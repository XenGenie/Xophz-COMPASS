import Vue from 'vue'
import Vuex from 'vuex'

import compass from './routes/compass/store'
import bazaar from './routes/bazaar/store'
import posts from './routes/post-digger/post-digger.store'
import xp from './routes/xp/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    compass,
    posts,
    bazaar,
    xp
  }
})
