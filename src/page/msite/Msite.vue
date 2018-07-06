<template>
  <div>
    <msite-header
      :LoginIcon="true"
      :SoSoIcon="true"
      :HeadAddress="MsiteTitle"
    ></msite-header>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import MsiteHeader from '@/common/Header'
import FootGuide from '@/common/FootGuide'
import {msiteAddress} from '../../service/getData'
export default {
  name: 'Msite',
  components: {
    MsiteHeader,
    FootGuide
  },
  data () {
    return {
      geohash: '', // city页面传递过来的地址geohash
      MsiteTitle: '请选择地址...' // msite页面头部标题
    }
  },
  computed: {
    ...mapState({
      geohashState: 'geohash'
    })
  },
  async beforeMount () {
    if (this.$route.query.geohash) {
      this.geohash = this.$route.query.geohash
    } else {
      this.geohash = this.geohashState
    }
    // 获取位置信息
    let res = await msiteAddress(this.geohash)
    this.MsiteTitle = res.name
    // 保存geohash
    this.SAVE_GEOHASH(this.geohash)
    // 记录当前经度纬度
    this.RECORD_ADDRESS(res)
  },
  methods: {
    ...mapMutations([
      'RECORD_ADDRESS', 'SAVE_GEOHASH'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
