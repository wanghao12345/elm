<template>
  <div>
    <login-header
      :HeadTitle="HeadTitle"
    >
    </login-header>
    <login-form></login-form>
  </div>
</template>
<script>
import LoginHeader from '@/common/Header'
import LoginForm from './components/LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginForm
  },
  data () {
    return {
      HeadTitle: '密码登录'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
