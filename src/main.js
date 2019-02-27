import Vue from 'vue'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'



Vue.use(Vuetify)
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('wheel', f)
      }
    }
    window.addEventListener('wheel', f)
  }
})


var scroll = new Vue({
  el: '#app',
  render: h => h(App)
})
