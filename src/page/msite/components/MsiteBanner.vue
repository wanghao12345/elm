<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="(item, index) in foodTypes"
        :key="index"
      >
        <ul class="foodList">
          <router-link
            tag="li"
            v-for="foodItem in item"
            :key="foodItem.id"
            :to="{path: '/food', query: {geohash:geohashState, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}"
          >
            <img :src="imgBaseUrl + foodItem.image_url" alt="商品">
            <i>{{foodItem.title}}</i>
          </router-link>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot=pagination></div>
    </swiper>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {msiteFoodTypes} from '../../../service/getData'
export default {
  name: 'MsiteBanner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      imgBaseUrl: 'https://fuss10.elemecdn.com', // 图片域名地址
      foodTypes: [] // 食品分类
    }
  },
  computed: {
    ...mapState({
      geohashState: 'geohash'
    }),
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    msiteFoodTypes(this.geohashState).then(res => {
      let resLength = res.length
      let resArr = [...res]
      let foodArr = []
      for (let i = 0, j = 0; i < resLength; i += 8, j++) {
        foodArr[j] = resArr.splice(0, 8)
      }
      this.foodTypes = foodArr
    })
  },
  methods: {
    // 解码url地址，求去restaurant_category_id值
    getCategoryId (url) {
      let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name', ''))
      if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~style/variable.scss';
  .container{
    @include wh(100%, 8rem);
    background: white;
    border-bottom: 1px solid #e6e6e6;
    .foodList{
      @include wh(100%, 100%);
      overflow: hidden;
      li{
        @include wh(25%, 4rem);
        float: left;
        padding: 0.6rem 0rem;
        box-sizing: border-box;
        img{
          @include wh(1.8rem, 1.8rem);
        }
        i{
          @include wh(100%, 1rem);
          display: block;
          text-align: center;
          font-size: 0.55rem;
          color: #666;
        }
      }
    }
  }
</style>
