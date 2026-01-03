import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  }
})
