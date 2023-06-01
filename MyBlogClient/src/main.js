import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../static/css/reset.css'

import ElementUI from 'element-ui' // 引人ui库
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
