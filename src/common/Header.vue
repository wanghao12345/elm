<template>
  <div class="container">
    <div class="header-container">
      <i
        class="iconfont back-btn header-left"
        v-show="GoBack"
        @click="handleClickBack"
      >&#xe624;</i>
      <i
        class="iconfont soso header-left"
        v-show="SoSoIcon"
      >
        &#xe61e;
      </i>
      <router-link
        class="home-logo header-left"
        v-show="HomeLogo"
        to="/"
        tag="i"
      >ele.me</router-link>
      <div class="header-title">{{HeadTitle}}</div>
      <router-link to="/" tag="div" class="header-title">
        {{HeadAddress}}
      </router-link>
      <router-link
        tag="i"
        to="/login"
        class="header-right login-register-btn"
        v-show="LoginIcon"
      >登录|注册</router-link>
      <router-link
        class="header-right login-register-btn"
        v-show="SwitchCity"
        tag="i"
        to="/"
      >切换城市</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      loginStatus: false
    }
  },
  props: {
    HeadTitle: String,
    HeadAddress: String,
    LoginIcon: Boolean,
    HomeLogo: Boolean,
    SwitchCity: Boolean,
    GoBack: Boolean,
    SoSoIcon: Boolean
  },
  methods: {
    /**
     * 返回上一页
     */
    handleClickBack () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .container{
    @include wh(100%, 2rem)
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .header-container{
      width: 100%;
      height: $HeaderHeight;
      line-height: $HeaderHeight;
      background: $BackgroundColor;
      color: white;
      position: relative;
      @include wh(100%, 100%)
      .header-left{
        float: left;
        width: 2rem;
        position: absolute;
        left: 0;
        z-index: 1;
      }
      .soso{
        font-size: 1rem;
      }
      .home-logo{
        margin-left: 0.5rem;
      }
      .header-title{
        font-size: 0.7rem;
        width: 8rem;
        height: 100%;
        position: absolute;
        left: 50%;
        margin-left: -4rem;
        @include ellipsis();
      }
      .header-right{
        position: absolute;
        right: 0.5rem;
        font-size: 0.65rem;
        z-index: 1;
      }
    }
  }
</style>
