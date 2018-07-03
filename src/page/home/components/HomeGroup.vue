<template>
  <div class="group_city">
    <div
      class="group_city_Alp"
      v-for="(value, key, index) in sortgroupcity"
      :key="key"
      >
      <div class="group_city_title">
        <span>{{key}}</span>
        <i v-show="index == 0">(按字母排序)</i>
      </div>
      <ul class="group_city_ul">
        <router-link
          tag="li"
          v-for="item in value"
          :key="item.id"
          :to="'/city/' + item.id"
        >
          {{item.name}}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import {groupcity} from '../../../service/getData'
export default {
  name: 'HomeGroup',
  data () {
    return {
      groupcity: [] // 所有城市列表
    }
  },
  mounted () {
    // 获取所有的城市
    groupcity().then(res => {
      this.groupcity = res
    })
  },
  computed: {
    sortgroupcity () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .group_city{
    margin-top: 0.5rem;
    font-size: 0.6rem;
    .group_city_Alp{
      border-top: 1px solid #e6e6e6;
      background: white;
      margin-bottom: 0.5rem;
      .group_city_title{
        @include wh(100%, 1.6rem);
        border-bottom: 1px solid #e6e6e6;
        line-height: 1.6rem;
        text-align: left;
        box-sizing: border-box;
        padding-left: 0.5rem;
        i{
          margin-left: 0.5rem;
          color: #999;
        }
      }
      .group_city_ul{
        overflow: hidden;
        li{
          @include wh(25%, 2rem);
          float: left;
          text-align: center;
          line-height: 2rem;
          border-bottom: 1px solid #e6e6e6;
          box-sizing: border-box;
          border-right: 1px solid #e6e6e6;
          @include ellipsis();
        }
        li:nth-of-type(4n){
          border-right: none;
        }
      }
    }
  }
</style>
