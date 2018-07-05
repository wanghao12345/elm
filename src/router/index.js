import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/Login'
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Msite from '@/page/msite/Msite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/city/:cityid',
      name: 'City',
      component: City
    }, {
      path: '/msite',
      name: 'Msite',
      component: Msite
    }]
})
