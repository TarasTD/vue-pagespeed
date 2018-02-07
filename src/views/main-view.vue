<template>
  <div>
    <div>
      <BvHeader></BvHeader>
      <HeroBlock :title="title" :url="url" :loading="loading"></HeroBlock>
      <ContentContainer :title="title" :loading="loading"></ContentContainer>
    </div>
  </div>
</template>

<script>
import api from '../api'
import BvHeader from '@/components/bv-header'
import HeroBlock from '@/components/hero-block'
import ContentContainer from '@/components/content-container'

export default {
  name: 'mainView',
  components: {
    BvHeader,
    HeroBlock,
    ContentContainer
  },
  data () {
    return {
      msg: 'message',
      loading: true,
      stats: '',
      title: '',
      speed: 0
    }
  },
  props: [
    'url'
  ],
  beforeMount () {
    this.getData()
  },

  watch: {
    url: function (newQuestion, oldQuestion) {
      this.getData()
    }
  },

  methods: {
    getData: function () {
      this.loading = true;
      api.fetchTest(this.url).then(
      (response) => {
        this.loading = false
        this.title = response.data.title
        this.stats = response.data.pageStats
        this.speed = response.data.ruleGroups.SPEED.score
      }
    )
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-top: 50px;
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
  }

  .speedScore {
    color: red;
    font-size: 22px;
    font-weight: 600;
  }
  .loadingLabel {
    display: block;
  }
</style>
