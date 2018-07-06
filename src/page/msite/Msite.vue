<template>
  <div>
    <msite-header
      :LoginIcon="true"
      :SoSoIcon="true"
      :HeadAddress="MsiteTitle"
    ></msite-header>
  </div>
</template>

<script>
import MsiteHeader from '@/common/Header'
export default {
  name: 'Msite',
  components: {
    MsiteHeader
  },
  data () {
    return {
      MsiteTitle: '请选择地址...' // msite页面头部标题
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
