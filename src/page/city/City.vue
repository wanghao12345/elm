<template>
  <div class="container">
    <city-header
      :HeadTitle="ChooseCity"
      :SwitchCity="true"
    ></city-header>
    <div>{{currentCity}}</div>
  </div>
</template>

<script>
import CityHeader from '@/common/Header'
import {mapState} from 'vuex'
export default {
  name: 'City',
  components: {
    CityHeader
  },
  computed: {
    ...mapState({
      currentCity: 'choosedAddress'
    })
  },
  data () {
    return {
      ChooseCity: '上海'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
