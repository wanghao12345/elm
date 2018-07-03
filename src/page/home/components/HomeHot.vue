<template>
  <div class="hot_city">
    <div class="hot_city_title">热门城市</div>
    <ul class="hot_city_list">
      <router-link
        v-for="item in hotcity"
        tag="li"
        :to="'/city/' + item.id"
        :key="item.id"
      >{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
import {hotcity} from '../../../service/getData'
export default {
  name: 'HomeHot',
  data () {
    return {
      hotcity: [] // 热门城市列表
    }
  },
  mounted () {
    // 获取热门城市
    hotcity().then(res => {
      this.hotcity = res
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .hot_city{
    @include wh(100%, 5.6rem);
    background: white;
    border-top: 1px solid #e6e6e6;
    margin-top: 0.5rem;
    font-size: 0.6rem;
    .hot_city_title{
      @include wh(100%, 1.6rem);
      border-bottom: 1px solid #e6e6e6;
      line-height: 1.6rem;
      text-align: left;
      box-sizing: border-box;
      padding-left: 0.5rem;
    }
    .hot_city_list{
      @include wh(100%, 4rem);
      overflow: hidden;
      li{
        @include wh(25%, 2rem);
        float: left;
        text-align: center;
        line-height: 2rem;
        border-bottom: 1px solid #e6e6e6;
        box-sizing: border-box;
        border-right: 1px solid #e6e6e6;
        color: $BackgroundColor;
      }
      li:nth-of-type(4n){
        border-right: none;
      }
    }
  }
</style>
