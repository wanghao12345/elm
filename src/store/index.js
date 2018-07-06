import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  latitude: '', // 当前位置的纬度
  longitude: '', // 当前位置经度
  geohash: '31.22299,121.36025', // 地址geohash值
  choosedAddress: null, // 选择的城市
  choosedAddressCityId: null // 选择城市的ID
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
