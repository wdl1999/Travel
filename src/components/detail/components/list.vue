<template>
    <div class="item">
      <div class="item-title" v-for="(item,index) of categoryList" :key="index">
        {{item.title}}
        <div class="item-children" v-if="item.children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default({
  name: 'DetailList',
  props: {
    categoryList: Array
  }
})
</script>

<style lang="stylus" scoped>
.item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .2rem
</style>
