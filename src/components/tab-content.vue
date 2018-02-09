<template>
  <div class="">
    <div class="content" v-if="!loading">
      <div class="pageUrl" v-if="statisticsData">
        {{ statisticsData[0].currentVersionUrl }}
      </div>
      <div class="columns data-row"
            v-for="(item, index) in statisticsData"
            v-bind:key="index">
        <div class="column is-narrow is-hidden-tablet">
          <div class="period-label">
            {{item.date}}
          </div>
        </div>
        <div class="column is-5">
          <BvMetric :type="'Mobile'"
                    :speed="item.mobile.data.ruleGroups.SPEED.score"
                    :pageData="item.mobile.data">
          </BvMetric>
        </div>
        <div class="column is-hidden-mobile">
          <div class="period-label">
            {{item.date}}
          </div>
        </div>
        <div class="column is-5">
            <BvMetric :type="'Desktop'"
                      :speed="item.desktop.data.ruleGroups.SPEED.score"
                      :pageData="item.desktop.data">
            </BvMetric>
          </div>
      </div>
    </div>
    <div v-else>
      <div class="loading">
        <BvLoader :simpleLoader="simpleLoader"></BvLoader>
      </div>
    </div>
  </div>
</template>
<script>
import BvMetric from '@/components/bv-metric.vue'
import BvLoader from '@/components/bv-loader.vue'

export default {
  name: 'BvContainer',
  components: {
    BvMetric,
    BvLoader
  },
  data () {
    return {
      activeTab: 0,
      activeTabName: 'home'
    }
  },
  props: [
    'loading',
    'statisticsData',
    'currentData',
    'simpleLoader'
  ]
}
</script>
<style lang="scss" scoped>
  .loading {
    width: 100%;
    height: 100%;
  }
  .data-row {
    border-bottom: 1px solid lightgray;
    &:last-child {
      border-bottom: none;
    }
  }
</style>

<style lang="scss">
  .period-label {
    font-size: 15px;
    color: rgba(136, 135, 135, 0.801);
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
  .is-active {
    font-weight: 500;
    text-transform: uppercase;
  }
  .pageUrl {
    text-align: center;
    display: flex;
    justify-content: center;
    color: lightslategrey;
    margin-bottom: 10px;
  }
</style>
