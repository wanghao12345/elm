import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/Login'
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Msite from '@/page/msite/Msite'
import Search from '@/page/search/Search'
import Order from '@/page/order/Order'
import Profile from '@/page/profile/Profile'

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
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }]
})
