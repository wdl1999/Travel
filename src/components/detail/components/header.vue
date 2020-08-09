<template>
    <div>
        <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
            <div class="iconfont header-abs-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-icon">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop ||
      document.body.scrollTop || window.pageYOffset
      //   console.log(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  //   // 每次页面展示时会执行 但是去掉keep-alive后不会执行
  //   activated () {
  //     window.addEventListener('scroll', this.handleScroll)
  //   },
  //   // 页面被隐藏时会被执行 但是去掉keep-alive后不会执行
  //   deactivated () {
  //     window.removeEventListener('scroll', this.handleScroll)
  //   },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    height: .8rem
    line-height: .8rem
    width: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-icon
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index:2
    position: fixed
    left: 0
    right: 0
    top: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size:.4rem
    .header-fixed-icon
      position: absolute
      top: 0
      left: 0
      text-align: center
      width: .64rem
      font-size: .4rem
      color: #fff
</style>
