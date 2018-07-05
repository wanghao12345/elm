<template>
  <div class="container">
    <div class="item city_tip">
      <span class="city_tip_title">当前定位城市</span>
      <span class="city_tip_content">定位不准确，请在城市列表中选择</span>
    </div>
    <div class="item guess_city">
      <i class="iconfont guess_city_page">&#xe61d;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLocation',
  data () {
    return {
      guessCity: '', // 当前城市
      guessCityid: '' // 当前城市id
    }
  },
  mounted () {
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
      line-height: 2rem;
    }
    .city_tip{
      font-size: 0.6rem;
      overflow: hidden;
      .city_tip_title{
        float: left;
        margin-left: 0.5rem;
      }
      .city_tip_content{
        float: right;
        margin-right: 0.5rem;
        color: #9f9f9f;
      }
    }
    .guess_city{
      overflow: hidden;
      .guess_city_page{
        float: right;
        margin-right: 0.5rem;
        color: #868686;
        font-size: 0.7rem;
        font-weight: bold;
      }
    }
  }
</style>
