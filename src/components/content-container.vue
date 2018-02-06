<template>
  <div class="main-tabs">
    <div class="container">
      <b-tabs position="is-left" class="block" >
        <b-tab-item label="home">
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
