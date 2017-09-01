import Vue from 'vue'
import Router from 'vue-router'
import FiButton from '@/views/FiButton'

Vue.use(Router)

export default new Router({
  base: '',
  // mode: 'history',
  routes: [
    {
      path: '/fi-button',
      name: 'FiButton',
      component: FiButton
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
