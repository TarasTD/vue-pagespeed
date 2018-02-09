<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="colomn is-5">
            <h1 class="title">
              Page title: {{ title }}
            </h1>
            <h2 class="subtitle">
              {{ url }}
            </h2>
            <div class="">
              <a class="button is-info is-outlined rounded"
                  @click="analizeNowClicked">
                Analyze now
              </a>
            </div>
          </div>
          <div class="column is-offset-1 is-6">
              <BvGraph v-if="!loading"></BvGraph>
              <div v-else class="loading">
                <BvLoader :simpleLoader="true"></BvLoader>
              </div>
          </div>
        </div>
        <div class="recentMetric">
          <TabContent :statisticsData="currentData"
                      :simpleLoader="true"
                      :loading="loadingRecent">
          </TabContent>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BvGraph from '@/components/bv-graph.vue'
import TabContent from '@/components/tab-content.vue'
import BvLoader from '@/components/bv-loader.vue'

export default {
  name: 'HeroBlock',
  components: {
    BvGraph,
    TabContent,
    BvLoader
  },
  props: [
    'title',
    'url',
    'loading',
    'currentData',
    'loadingRecent'
  ],
  mounted () {
  },
  methods: {
    analizeNowClicked () {
      this.$emit('analizeNow')
    }
  }
}

</script>
<style lang="scss" scoped>
  @import "../styles/app.scss";
  .hero {
    background-color: #FFF;
  }
  .rounded {
    border-radius: 50px;
  }
  @media (min-width: $desktop) {
    .loading {
      height: 488px;
    }
  }
  @media (max-width: $tablet) {
    .loading {
      height: 288px;
    }
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
