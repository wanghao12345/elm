<template>
  <div>
    <home-header
      :LoginIcon="true"
      :HomeLogo="true"
    >
    </home-header>
    <home-location></home-location>
    <home-hot></home-hot>
    <home-group></home-group>
  </div>
</template>
<script>
import HomeHeader from '@/common/Header'
import HomeLocation from './components/HomeLocation'
import HomeHot from './components/HomeHot'
import HomeGroup from './components/HomeGroup'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeLocation,
    HomeHot,
    HomeGroup
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
