<template>
  <div class="main-tabs">
    <div class="container">
      <b-tabs position="is-left"
              class="block"
              v-model="activeTab"
              v-on:change="naviateTo">
        <b-tab-item v-for="(page, index) in pages"
                    v-bind:key="index"
                    :label="page">
          <TabContent :statisticsData="statisticsData"
                      :loading="loading"
                      :simpleLoader="false"
                      >
          </TabContent>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import TabContent from '@/components/tab-content.vue'

export default {
  name: 'BvContainer',
  components: {
    TabContent
  },
  data () {
    return {
      activeTab: 0,
      activeTabName: 'home',
      pages: [
        'home',
        'search',
        'product details'
      ]
    }
  },
  props: [
    'loading',
    'statisticsData'
  ],
  mounted () {
    this.mapRoute(this.$route.name)
  },
  methods: {
    mapRoute: function (routename) {
      this.activeTabName = routename
      switch (routename) {
        case 'property':
          this.activeTab = 2
          break
        case 'search':
          this.activeTab = 1
          break
        case 'home':
          this.activeTab = 0
          break
        default:
          return 'home'
      }
    },
    mapRouteByIndex: function (index) {
      switch (index) {
        case 1:
          return 'search'
        case 2:
          return 'property'
        case 0:
          return 'home'
        default:
          return 'home'
      }
    },
    naviateTo: function (index) {
      this.$router.push({ path: this.mapRouteByIndex(index) })
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabs {
    background-color: #FFF;
  }
  .main-tabs {
    top: -40px;
    position: relative;
    li {
      margin-left: 1rem;
    }
  }
</style>
