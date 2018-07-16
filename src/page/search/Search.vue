<template>
  <div class="container">
    <search-header
      :GoBack="true"
      :HeadTitle="SearchTitle"
    ></search-header>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import SearchHeader from '@/common/Header'
import FootGuide from '@/common/FootGuide'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    FootGuide
  },
  data () {
    return {
      SearchTitle: '搜索'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
