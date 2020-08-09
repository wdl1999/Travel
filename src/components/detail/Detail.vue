<template>
    <div>
        <detail-banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
        <detail-header></detail-header>
        <detail-list :categoryList="categoryList"></detail-list>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default({
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      gallaryImgs: [],
      categoryList: [],
      bannerImg: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json').then(this.getDatailInfoSucc)
    },
    getDatailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.categoryList = data.categoryList
        this.bannerImg = data.bannerImg
        console.log(this.sightName)
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
})
</script>

<style lang="stylus" scoped>

</style>
