import Vue from 'vue'
import Vuetify from 'vuetify'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#FF6600',
    secondary: '#3D84F5',
    accent: '#4B4C5B',
    error: '#F53D6B',
    warning: '#ff9966',
    info: '#3DD6F5',
    success: '#3BEB9E',
    devModeColor: '#4B4C5B'
  }
})
