<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont input-icon">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city" class="header-right" tag="div">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe6aa;</span>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'Vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    display: flex
    height: $headerHeight
    background-color: $bgColor
    .header-left
       float: left
       width: .64rem
       margin: auto 0
       .back-icon
         text-align: center
         font-size:.4rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      text-indent: .2rem
      background-color #fff
      margin-top: .12rem
      margin-left: .2rem
      color: #ccc
    .header-right
      float: right
      min-width: 1.24 rem
      margin: auto 0
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
</style>
