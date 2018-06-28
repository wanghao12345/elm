<template>
  <div>
    <home-header
      :LoginIcon="true"
      :HomeLogo="true"
    >
    </home-header>
    <home-location></home-location>
  </div>
</template>
<script>
import HomeHeader from '@/common/Header'
import HomeLocation from './components/HomeLocation'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeLocation
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
