<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of imgUrl" :key="item">
                    <img class='gallary-img' :src="item" >
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Gallay',
  props: {
    imgUrl: {
      type: Array,
      default () {
        return ['//img1.qunarzz.com/sight/p0/201301/16/f7562f72c216533d93835fbb.jpg_600x330_1f7555e1.jpg', '//img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_600x330_31a6b8d8.jpg']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 监视器 swiper元素或者父级元素发生dom结构的变化时，会自动自我刷新 可以解决swiper宽度计算的问题
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    z-index: 99
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
