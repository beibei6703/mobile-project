// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import animated from 'animate.css' 
import axios from 'axios'
import utils from './util/utils.js'
import $ from 'jquery'

import store from "./store"
 
import {getCookie} from './util/getcookie.js'

import './assets/css/resets.css'
import './assets/commonjs/rem.js'
// import './assets/commonjs/swiper.animate1.0.3.min.js'

Vue.config.productionTip = false
Vue.use(animated)

Vue.prototype.$utils = utils
Vue.prototype.getCookie = getCookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
