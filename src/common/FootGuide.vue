<template>
  <div class="container">
    <ul class="tab">
      <router-link to="msite" tag="li">
        <i class="iconfont" :class="index==1?'active':''">&#xe722;</i>
        <span>外卖</span>
      </router-link>
      <router-link to="search" tag="li">
        <i class="iconfont" :class="index==2?'active':''">&#xe7a1;</i>
        <span>搜索</span>
      </router-link>
      <router-link to="order" tag="li">
        <i class="iconfont" :class="index==3?'active':''">&#xe61a;</i>
        <span>订单</span>
      </router-link>
      <router-link to="profile" tag="li">
        <i class="iconfont" :class="index==4?'active':''">&#xe62a;</i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FootGuide',
  data () {
    return {
      index: 1 // 默认选中外卖
    }
  },
  mounted () {
    let path = this.$route.path
    if (path.indexOf('msite') === 1) {
      this.index = 1
    } else if (path.indexOf('search') === 1) {
      this.index = 2
    } else if (path.indexOf('order') === 1) {
      this.index = 3
    } else if (path.indexOf('profile') === 1) {
      this.index = 4
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .container{
    @include wh(100%, 2rem);
    background: white;
    border-top: 1px solid #e6e6e6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    ul{
      @include wh(100%, 100%);
      li{
        @include wh(25%, 100%);
        float: left;
        i{
          @include wh(100%, 50%);
          display: block;
          line-height: 1.5rem;
          font-size: 0.8rem;
          font-weight: bold;
        }
        i.active{
          color: $BackgroundColor;
        }
        span{
          @include wh(100%, 50%);
          display: block;
          font-size: 0.5rem;
          line-height: 1.2rem;
        }
      }
      li:nth-of-type(1){
        i{
          font-size: 1.2rem;
        }
      }
    }
  }
</style>
