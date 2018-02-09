<template>
  <div>
    <div>
      <BvHeader></BvHeader>
      <HeroBlock :title="title"
                 :url="url"
                 :loading="loading"
                 :loadingRecent="loadingRecent"
                 @analizeNow="fetchRecent"
                 :currentData="currentVersionData">
      </HeroBlock>
      <ContentContainer :loading="loading"
                        :title="title"
                        :statisticsData="statisticsData">
      </ContentContainer>
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
      loading: true,
      title: '',
      statisticsData: '',
      currentVersionData: false,
      loadingRecent: false
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
    getData: function (dinamic) {
      this.loading = true
      api.fetchTest(this.url, 'mobile').then(
        (response) => {
          this.loading = false
          this.title = response.data.title
          this.statisticsData =
          [{
            date: '21.01.2017',
            mobile: {
              data: response.data
            },
            desktop: {
              data: response.data
            }
          }, {
            date: '22.01.2017',
            mobile: {
              data: response.data
            },
            desktop: {
              data: response.data
            }
          }, {
            date: '23.01.2017',
            mobile: {
              data: response.data
            },
            desktop: {
              data: response.data
            }
          }]
        }
      )
    },
    fetchRecent: function () {
      this.loadingRecent = true
      api.fetchNow(this.url, 'mobile').then(
        (responseMobile) => {
          api.fetchNow(this.url, 'desktop').then(
            (responseDesktop) => {
              this.loadingRecent = false
              this.currentVersionData = [{
                currentVersionUrl: this.url,
                date: 'Just now',
                mobile: {
                  data: responseMobile.data
                },
                desktop: {
                  data: responseDesktop.data
                }
              }]
            }
          )
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
