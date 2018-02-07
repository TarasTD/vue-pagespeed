<template>
  <div class="main-tabs">
    <div class="container">
      <b-tabs position="is-left" class="block" v-model="activeTab" v-on:change="naviateTo">
        <b-tab-item label="home" >
          <div class="tab-content container">
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
            <BvMetric></BvMetric>
          </div>
        </b-tab-item>
        <b-tab-item label="search">
          <div class="tab-content container">
              <BvMetric></BvMetric>
              <BvMetric></BvMetric>
              <BvMetric></BvMetric>
          </div>
        </b-tab-item>
        <b-tab-item label="product detail">
          <div class="tab-content container">
              <BvMetric></BvMetric>
              <BvMetric></BvMetric>
              <BvMetric></BvMetric>
          </div>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import BvMetric from '@/components/bv-metric.vue'
export default {
  name: 'BvContainer',
  components: {
    BvMetric
  },
  data () {
    return {
        activeTab: 0,
        activeTabName: 'home'
    }
  },
  mounted () {
    this.mapRoute(this.$route.name)
  },
  methods: {
    mapRoute: function(routename){
      this.activeTabName = routename;
      switch (routename) {
        case 'property':
          this.activeTab = 2
          break;
        case 'search':
          this.activeTab = 1
          break;
        case 'home':
          this.activeTab = 0
          break;
        default:
          return 'home'
      }
    },
    mapRouteByIndex: function(index){
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
    naviateTo: function(index){
      this.$router.push({ path: this.mapRouteByIndex(index) })
    }
  }
}
</script>
<style lang="scss">
  .tabs {
    background-color: #FFF;
  }
  .main-tabs {
    top: -40px;
    position: relative;

    .tab-content {
    }
    li {
      margin-left: 1rem;
    }
    .is-active {
      font-weight: 500;
      text-transform: uppercase;
    }
  }
</style>
