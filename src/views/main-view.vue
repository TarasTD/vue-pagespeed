<template>
  <div>
    <div v-if="!loading">
      <BvHeader></BvHeader>
      <HeroBlock></HeroBlock>
      <ContentContainer></ContentContainer>
    </div>

    <div v-else class="loading">
      <div class="fa-3x">
        <i class="fas fa-circle-notch fa-spin"></i>
      </div>
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
      loading: false,
      stats: '',
      url: 'belvilla.com'
    }
  },
  mounted () {
    this.getData().then(
      (i) => {
        this.loading = false
        this.title = i.data.title
        this.stats = i.data.pageStats
        this.speed = i.data.ruleGroups.SPEED.score
      }
    )
  },

  methods: {
    getData: function () {
      return api.fetchTest(this.url)
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
