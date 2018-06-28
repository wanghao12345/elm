<template>
  <div class="container">
    <div class="item top"></div>
    <div class="item bottom"></div>
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
  }
</style>
