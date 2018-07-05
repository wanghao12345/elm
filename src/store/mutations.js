import {CHOOSE_ADDRESS} from './mutation-types'

export default {
  /**
   * 选择城市
   */
  [CHOOSE_ADDRESS] (state, city, cityId) {
    state.choosedAddress = city
    state.choosedAddressCityId = cityId
  }
}
