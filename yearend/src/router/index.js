import Vue from 'vue'
import Router from 'vue-router'
import Loadpage from '@/page/loadpage'
// import Loadpage from '@/page/loadpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loadpage',
      component: Loadpage
    }
  ]
})
