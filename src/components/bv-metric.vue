<template>
  <div class="metric-item">
    <div class="period-label">
      Today:
    </div>
    <div class="columns is-mobile">
      <div class="column">
        Desctop
        <BvDonut></BvDonut>
      </div>
      <div class="column">
        Mobile
        <BvDonut></BvDonut>
      </div>
    </div>
  </div>
</template>

<script>
import BvDonut from '@/components/bv-donut.vue'

export default {
  name: 'BvMetric',
  components: {
    BvDonut
  }
}
</script>
<style lang="scss">
  .metric-item {
    padding-top: 20px;
    padding-bottom: 50px;
    border-bottom: 1px solid lightgray;
  }
  .period-label {
    font-size: 15px;
    margin-bottom: 20px;
  }
</style>
