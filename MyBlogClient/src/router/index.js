import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Html from '../pages/HTML/Html.vue'
import Css from '../pages/CSS/Css.vue'
import JavaScript from '../pages/JavaScript/JavaScript.vue'
import VueFramework from '../pages/VueFramework/VueFramework.vue'
import internet from '../pages/Internet/Internet.vue'
import Help from '../pages/Help/Help.vue'
import Search from '../pages/Search/Search.vue'
import AfterLogin from '../pages/AfterLogin/AfterLogin.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/profile',
      component: Profile
    }, {
      path: '/afterlogin',
      component: AfterLogin
    }, {
      path: '/html',
      component: Html
    }, {
      path: '/css',
      component: Css
    }, {
      path: '/js',
      component: JavaScript
    }, {
      path: '/vue',
      component: VueFramework
    }, {
      path: '/internet',
      component: internet
    }, {
      path: '/help',
      component: Help
    }, {
      path: '/search',
      component: Search
    }

  ]
})
