// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App/App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Fastclick from 'fastclick'
import ElementUI from 'element-ui'
import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
//Vue.use(Vuex)
//Vue.bus= new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
