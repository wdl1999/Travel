<template>
  <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img :src="item.imgUrl" class="item-img">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    text-indent: .2rem
    line-height: .8rem
    height: .8rem
    margin-top: .2rem
    background-color #eee
  .item
    display: flex
    height: 1.9rem
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      padding: .1rem
      .item-title
        line-height: .54rem
        height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        height .4rem
      .item-button
        margin-top: .16rem
        padding: 0 .1rem
        border-radius: .06rem
        background-color: #ff9300
        color: #fff
        line-height: .44rem
</style>
