<template>
  <div class="header-container">
    <router-link
      to="/"
      tag="i"
    >
      <i class="iconfont back-btn">&#xe624;</i>
    </router-link>
    <div class="header-title">账号登录</div>
    <i class="login-register-btn">登录|注册</i>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.sass';
  .header-container{
    width: 100%;
    height: $HeaderHeight;
    line-height: $HeaderHeight;
    background: $BackgroundColor;
    color: white;
    position: relative;
    .back-btn{
      float: left;
      width: 2rem;
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
