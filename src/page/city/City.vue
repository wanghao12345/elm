<template>
  <div class="container">
    <city-header
      :HeadTitle="cityname"
      :SwitchCity="true"
    ></city-header>
    <form class="city_form" v-on:submit.prevent>
      <div>
        <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputValue'>
      </div>
      <div>
        <input type="submit" name="submit" class="city_submit input_style" value="提交" @click="postpois">
      </div>
    </form>
    <header v-if="historytitle" class="pois_search_history">搜索历史</header>
    <ul class="getpois_ul">
      <li
        v-for="(item, index) in placelist"
        :key="index"
        @click="nextpage(index, item.geohash)"
      >
        <h4 class="pois_name ellipsis">{{item.name}}</h4>
        <p class="pois_address ellipsis">{{item.address}}</p>
      </li>
    </ul>
    <footer
      v-if="historytitle&&placelist.length"
      class="clear_all_history"
      @click="clearAll"
    >清空所有</footer>
    <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import CityHeader from '@/common/Header'
import {currentcity, searchplace} from '../../service/getData'
import {mapState} from 'vuex'
import {getStore, setStore, removeStore} from '../../config/mUtils'
export default {
  name: 'City',
  components: {
    CityHeader
  },
  data () {
    return {
      cityname: '', // 当前城市名字
      cityid: '', // 当前城市id
      inputValue: '', // 搜索关键词
      placelist: [], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      placeNone: false, // 搜索是否有结果
      historytitle: true // 默认显示搜索历史头部，点击搜索后隐藏
    }
  },
  computed: {
    ...mapState({
      choosedAddress: 'choosedAddress'
    })
  },
  mounted () {
    this.cityid = this.$route.params.cityid
    currentcity(this.cityid).then(res => {
      this.cityname = res.name
    })
    this.initData()
  },
  methods: {
    /**
     * 初始化历史记录
     */
    initData () {
      if (getStore('placeHistory')) {
        this.placelist = JSON.parse(getStore('placeHistory'))
      } else {
        this.placelist = []
      }
    },
    /**
     * 搜索地址
     */
    postpois () {
      if (this.inputValue) {
        searchplace(this.cityid, this.inputValue).then(res => {
          this.placelist = res
          if (res.length === 0) {
            this.placeNone = true
          }
          this.historytitle = false
        })
      }
    },
    /**
     * 点击搜索结果
     */
    nextpage (index, geohash) {
      let history = getStore('placeHistory')
      let choosePlace = this.placelist[index]
      if (history) {
        let checkrepeat = false
        this.placeHistory = JSON.parse(history)
        this.placeHistory.forEach(item => {
          if (item.geohash === geohash) {
            checkrepeat = true
          }
        })
        if (!checkrepeat) {
          this.placeHistory.push(choosePlace)
        }
      } else {
        this.placeHistory.push(choosePlace)
      }
      setStore('placeHistory', this.placeHistory)
      this.$router.push({path: '/msite', query: {geohash}})
    },
    clearAll () {
      removeStore('placeHistory')
      this.initData()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .city_form{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: 0.4rem;
    div{
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .input_style{
        border-radius: 0.1rem;
        margin-bottom: 0.4rem;
        width: 100%;
        height: 1.4rem;
      }
      .city_input{
        border: 1px solid #e4e4e4;
        padding: 0 0.3rem;
        font-size: 0.65rem;
        color: #333;
      }
      .city_submit{
        background-color: #3190e8;
        font-size: 0.65rem;
        color: #fff;
        border: 0;
      }
    }
  }
  .pois_search_history{
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 0.5rem;
    font: 0.475rem/0.8rem "Microsoft YaHei";
    text-align: left;
  }
  .getpois_ul{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    li{
      margin: 0 auto;
      padding-top: 0.65rem;
      border-bottom: 1px solid #e4e4e4;
      text-align: left;
      .ellipsis{
        @include ellipsis();
      }
      .pois_name{
        margin: 0 auto 0.35rem;
        width: 90%;
        font-size: 0.65rem;
        color: #333;
      }
      .pois_address{
        width: 90%;
        margin: 0 auto 0.55rem;
        font-size: 0.45rem;
        color: #999;
      }
    }
  }
  .clear_all_history{
    font-size: 0.7rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    background-color: #fff;
  }
  .search_none_place{
    margin: 0 auto;
    @include font(0.65rem, 1.75rem);
    color: #333;
    background-color: #fff;
    text-indent: 0.5rem;
  }
</style>
