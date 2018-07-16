<template>
  <div class="container">
    <profile-header
      :GoBack="true"
      :HeadTitle="ProfileTitle"
    ></profile-header>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import ProfileHeader from '@/common/Header'
import FootGuide from '@/common/FootGuide'
export default {
  name: 'Profile',
  components: {
    ProfileHeader,
    FootGuide
  },
  data () {
    return {
      ProfileTitle: '我的'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
