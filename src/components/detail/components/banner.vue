<template>
<div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
          <div class="banner-title">{{this.sightName}}</div>
          <div class="banner-number">
              <span class="iconfont banner-icon">&#xe635;</span>
              {{this.bannerImg.length}}
          </div>
      </div>
    </div>
    <fade-animation>
        <gallary :imgUrl="gallaryImgs" v-show="showGallary" @click.native="handleGallaryClick"></gallary>
    </fade-animation>
</div>
</template>

<script>
import Gallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default({
  name: 'DetailBanner',
  props: {
    sightName: String,
    gallaryImgs: Array,
    bannerImg: String
  },
  components: {
    Gallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleGallaryClick () {
      this.showGallary = !this.showGallary
    },
    handleBannerClick () {
      this.showGallary = !this.showGallary
    }
  }
})
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    left: 0
    right: 0
    bottom: 0
    display: flex
    height: .6rem
    color: #ffffff
    background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-title
      padding:0 .2rem
      flex: 1
      font-size: .32rem
    .banner-number
      margin-top: .14rem
      height: .32rem
      line-height: .32rem
      padding: 0 .4rem
      font-size: .24rem
      background: rgba(0,0,0, .8)
      border-radius: .2rem
      .banner-icon
        font-size:.24rem
</style>
