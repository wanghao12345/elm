import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  choosedAddress: null, // 选择的城市
  choosedAddressCityId: null // 选择城市的ID
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
