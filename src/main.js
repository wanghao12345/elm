// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layer from 'vue-layer'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/iconfont.css'

// 使用layer提示框插件
Vue.prototype.$layer = layer(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
