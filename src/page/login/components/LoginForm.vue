<template>
  <div>
    <div class="FormContainer">
      <form>
        <section class="input_container">
          <input type="text" placeholder="账号" v-model="userAccount">
        </section>
        <section class="input_container">
          <input type="password" placeholder="密码" v-model="passWord">
        </section>
        <section class="input_container">
          <input type="text" placeholder="验证码" v-model="codeNumber">
          <div class="code-img">
            <img src="" alt="验证码">
            <div class="change-code-img">
              <p>看不清</p>
              <p class="change-btn">换一张</p>
            </div>
          </div>
        </section>
      </form>
    </div>
    <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="login_tips">注册过的用户可凭账号密码登录</p>
    <button class="login-btn">登录</button>
  </div>

</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      userAccount: null,
      passWord: null,
      codeNumber: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .FormContainer{
    width: 100%;
    height: 6.3rem;
    background: white;
    margin-top: 0.6rem;
    .input_container{
      width: 100%;
      height: 2.1rem;
      border-bottom: 1px solid #f1f1f1;
      padding: 0.6rem 0.8rem;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      input{
        float: left;
        border: 0;
        font-size: 0.7rem;
      }
      .code-img{
        position: absolute;
        width: 6rem;
        height: 100%;
        right: 1rem;
        top: 0;
        bottom: 0;
        overflow: hidden
        img{
          width: 4rem;
          height: 100%;
          display: block;
          float: left;
        }
        .change-code-img{
          float: right;
          width: 2rem;
          height: 100%;
          font-size: 0.6rem;
          line-height: 1rem;
          .change-btn{
            color: $BackgroundColor;
          }
        }
      }
    }
  }
  .login_tips{
    color: red;
    text-align: left;
    font-size: 0.6rem;
    line-height: 1.2rem;
    box-sizing: border-box;
    padding-left: 0.5rem;
  }
  .login-btn{
    margin: 0 .5rem 1rem;
    font-size: 0.7rem;
    color: #fff;
    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
    width: 15rem;    
  }
</style>
