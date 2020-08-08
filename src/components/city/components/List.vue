<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                    <div class="button" @click="handleClick(item.name)">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom" v-for="item2 of item" :key="item2.id"
                @click="handleClick(item2.name)">{{item2.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs['wrapper'], {
      click: true
    })
  },
  methods: {
    handleClick (city) {
      this.changeCity(city)
      this.$router.push('./')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.list
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .title
    height: .54rem
    line-height: .54rem
    background-color: #eee
    color: #666
    font-size: .26rem
    padding-left: .2rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .2rem
    .button-wrapper
      width: 33%
      float: left
      .button
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #ccc
        border-radius: .06rem
        text-align:center
  .item-list
    .item
      text-indent: .2rem
      height: .72rem
      line-height: .72rem
    .border-bottom
    &:before
      border-color: #ccc
</style>
