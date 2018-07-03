<template>
  <div class="header-container">
    <router-link
      to="-1"
      tag="i"
    >
      <i class="iconfont back-btn" v-show="!HomeLogo">&#xe624;</i>
    </router-link>
    <router-link
      to="/"
      tag="i"
    >
      <i class="home-logo" v-show="HomeLogo">ele.me</i>
    </router-link>
    <div class="header-title">{{HeadTitle}}</div>
    <i class="login-register-btn" v-show="LoginIcon">登录|注册</i>
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
    LoginIcon: Boolean,
    HomeLogo: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .header-container{
    width: 100%;
    height: $HeaderHeight;
    line-height: $HeaderHeight;
    background: $BackgroundColor;
    color: white;
    position: relative;
    @include wh(100%, 2rem)
    .back-btn{
      float: left;
      width: 2rem;
    }
    .home-logo{
      float: left;
      margin-left: 0.5rem;
    }
    .header-title{
      font-size: 0.7rem;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .login-register-btn{
      position: absolute;
      right: 0.5rem;
      font-size: 0.65rem;
    }
  }
</style>
