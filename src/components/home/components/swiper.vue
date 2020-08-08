<template>
  <div class="wrapper" v-if="showSwiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class='swiper-img' :src="item.imgUrl" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        loop: true
      }
    }
  },
  props: {
    swiperList: Array
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff !important
  .wrapper
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
