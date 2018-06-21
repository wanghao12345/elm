// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/style/reset.css'
import './assets/style/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/elementModify.css'

// 使用element
Vue.use(ElementUI, {size: 'small', zIndex: 3000})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
