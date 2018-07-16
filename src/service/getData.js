import fetch from '../config/fetch'

/**
 * 获取图片验证码
 */
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

/**
 * 账号登录请求
 */
export const accountLogin = (username, password, captchaCode) => fetch('/v2/login', {username, password, captchaCode}, 'POST')

/**
 * 获取当前所在城市
 */
export const currentcity = number => fetch('/v1/cities/' + number)
/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
})

/**
 * 获取首页热门城市
 */
export const hotcity = () => fetch('/v1/cities', {
  type: 'hot'
})

/**
 * 获取首页所有城市
 */
export const groupcity = () => fetch('/v1/cities', {
  type: 'group'
})

/**
 * 获取搜索地址
 */
export const searchplace = (cityid, value) => fetch('/v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value
})

/**
 * 获取msite页面地址信息
 */
export const msiteAddress = geohash => fetch('/v2/pois/' + geohash)

/**
 * 获取msite页面食品分类列表
 */
export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
  geohash,
  group_type: '1',
  'flags[]': 'F'
})
