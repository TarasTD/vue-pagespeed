<template>
  <div class="donut-container">
    <DonutProgress :value="speed" :color="color"></DonutProgress>
    <div class="side-values">
        <div class="side-top">
          <div class="side-top-label" :style="{color: color}">
            {{fcp}}
          </div>
          <div class="side-top-value">
            First Content Paint
          </div>
        </div>
        <div class="side-divider"></div>
        <div class="side-bottom">
          <div class="side-bottom-label">
            {{dcl}}
          </div>
          <div class="side-bottom-value">
            DOM Content Loaded
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import DonutProgress from '@/components/donut-progress.vue'

export default {
  name: 'BvDonut',
  data () {
    return {
      colorDefault: 'red'
    }
  },
  props: [
    'speed',
    'fcp',
    'dcl'
  ],
  components: {
    DonutProgress
  },
  computed: {
    color () {
      return this.getColor(this.speed)
    }
  },
  methods: {
    getColor (score) {
      if (score < 60) {
        return 'red'
      } else if (score >= 60 && score < 90) {
        return '#ffa500'
      } else if (score >= 90) {
        return 'green'
      } else {
        return 'red'
      }
    }
  }

}
</script>
<style lang="scss" scoped>
  .donut-container {
    display: flex;
  }
  .side-values {
    display: inline-flex;
    width: 200px;
    align-items: flex-start;
    flex-direction: column;

    .side-top {
      margin-left: 10px;
      .side-top-label {
        color: red;
        font-weight: 600;
        font-size: 20px;
      }
      .side-top-value {
        color: grey;
        font-size: 13px;
        font-weight: 400;
      }
    }
    .side-divider {
      width: 100%;
      border: 1px solid lightgray;
    }
    .side-bottom {
      margin-left: 10px;

      .side-bottom-label {
        color: grey;
        font-weight: 600;
        font-size: 20px;
      }
      .side-bottom-value {
        color: grey;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
</style>
