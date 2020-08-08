<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont header-icon">&#xe624;</div>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  height: $headerHeight
  line-height: $headerHeight
  color: #fff
  background-color $bgColor
  font-size: .4rem
  text-align: center
  .header-icon
    position: absolute
    left: 0
    top: 0
    width: .64rem
    font-size: .4rem
    color: #fff
</style>
