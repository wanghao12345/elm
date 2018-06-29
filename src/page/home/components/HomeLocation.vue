<template>
  <div class="container">
    <div class="item city_tip">
      <span>当前定位城市</span>
      <span>定位不准确，请在城市列表中选择</span>
    </div>
    <div class="item guess_city"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeLocation',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  .container{
    background: white;
    @include wh(100%,4rem);
    .item{
      @include wh(100%,2rem);
      border-bottom: 1px solid #e6e6e6;
    }
    .city_tip{
    }
  }
</style>
