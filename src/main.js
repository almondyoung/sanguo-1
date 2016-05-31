import Vue from 'vue'
import App from './app.vue'
import Home from './components/home.vue'
import New from './components/new.vue'
import Select from './components/select.vue'

import VueRouter from 'vue-router'

/* eslint-disable no-new */
Vue.use(VueRouter)
const router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/new': {
    component: New
  },
  '/select': {
    component: Select
  }

})

router.redirect({
  '*': '/home'
})
router.start(App, '#app')
