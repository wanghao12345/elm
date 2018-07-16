<template>
  <div class="container">
    <order-header
      :GoBack="true"
      :HeadTitle="OrderTitle"
    ></order-header>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import OrderHeader from '@/common/Header'
import FootGuide from '@/common/FootGuide'
export default {
  name: 'Order',
  components: {
    OrderHeader,
    FootGuide
  },
  data () {
    return {
      OrderTitle: '订单列表'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
