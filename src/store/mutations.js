import {
  CHOOSE_ADDRESS,
  RECORD_ADDRESS,
  SAVE_GEOHASH

} from './mutation-types'

export default {
  /**
   * 选择城市
   */
  [CHOOSE_ADDRESS] (state, city, cityId) {
    state.choosedAddress = city
    state.choosedAddressCityId = cityId
  },
  /**
   * 记录当前经纬度
   */
  [RECORD_ADDRESS] (state, {
    latitude,
    longitude
  }) {
    state.latitude = latitude
    state.langitude = longitude
  },
  /**
   * 保存geohash
   */
  [SAVE_GEOHASH] (state, geohash) {
    state.geohash = geohash
  }
}
