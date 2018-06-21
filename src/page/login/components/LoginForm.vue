<template>
  <div>
    <div class="FormContainer">
      <form>
        <section class="input_container">
          <input type="text" placeholder="账号" v-model="userAccount">
        </section>
        <section class="input_container">
          <input :type="passwordType" placeholder="密码" v-model="passWord">
          <div class="password-see">
            <i class="iconfont" v-show='switchPassword' @click="openPasswordShow">&#xe675;</i>
            <i class="iconfont" v-show='!switchPassword' @click="closePasswordShow">&#xe677;</i>
          </div>
        </section>
        <section class="input_container">
          <input type="text" placeholder="验证码" v-model="codeNumber">
          <div class="code-img">
            <img class="img" :src="captchaCodeImg" alt="验证码">
            <div class="change-code-img" @click="getCaptchaCode">
              <p>看不清</p>
              <p class="change-btn">换一张</p>
            </div>
          </div>
        </section>
      </form>
    </div>
    <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="login_tips">注册过的用户可凭账号密码登录</p>
    <button class="login-btn" @click="handleLoginRequest">登录</button>
  </div>
</template>

<script>
import {getcaptchas, accountLogin} from '../../../service/getData'
export default {
  name: 'LoginForm',
  data () {
    return {
      userInfo: null, // 用户信息
      userAccount: null, // 用户名账号
      passWord: null, // 密码
      codeNumber: null, // 验证码
      captchaCodeImg: null, // 验证码图片
      passwordType: 'password', // 密码的隐藏与显示
      switchPassword: true // 密码显示与隐藏的开关
    }
  },
  created () {
    this.getCaptchaCode()
  },
  methods: {
    /**
     * 获取验证码
     */
    async getCaptchaCode () {
      let res = await getcaptchas()
      this.captchaCodeImg = res.code
    },
    /**
     * 开启密码的显示
     */
    openPasswordShow () {
      this.passwordType = 'text'
      this.switchPassword = false
    },
    /**
     * 关闭密码的显示
     */
    closePasswordShow () {
      this.passwordType = 'password'
      this.switchPassword = true
    },
    /**
     * 登录请求
     */
    async handleLoginRequest () {
      if (!this.userAccount) {
        this.$alert('账号不能为空', '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        })
      } else if (!this.passWord) {
        this.$alert('密码不能为空', '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        })
      } else if (!this.codeNumber) {
        this.$alert('验证码不能为空', '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        })
      } else {
        this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber)
        if (!this.userInfo.user_id) {
          this.$alert(this.userInfo.message, '提示', {
            confirmButtonText: '确定',
            callback: action => {}
          })
        } else {

        }
      }
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
        overflow: hidden;
        .img{
          width: 4rem;
          height: 1.5rem;
          display: block;
          float: left;
          margin-top: 0.25rem;
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
      .password-see{
        position: absolute;
        right: 1rem;
        top: 0rem;
        line-height: 2rem;
        .iconfont{
          font-size: 1.2rem;
          color: #3190e8;
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
