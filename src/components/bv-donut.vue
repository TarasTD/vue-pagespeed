<template>
  <div class="donut-container">
    <div class="donut">
      <div class="label-score">
        <div class="score-values">
          <span class="result-values" :style="{color: color}">50/100</span>
          <span class="result-label">speed</span>
        </div>
      </div>
    </div>
    <div class="active-indicator">
      <div class="bar"></div>
      <div class="fill"></div>
    </div>
    <div class="side-values">
        <div class="side-top">
          <div class="side-top-label" :style="{color: color}">
            3.3s
          </div>
          <div class="side-top-value">
            First Content Paint
          </div>
        </div>
        <div class="side-divider"></div>
        <div class="side-bottom">
          <div class="side-bottom-label">
            1.23s
          </div>
          <div class="side-bottom-value">
            DOM Content Loaded
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BvDonut',
  data () {
    return {
      color: 'red'
    }
  }

}
</script>
<style lang="scss" scoped>
  .donut-container {
    display: flex;
  }
  .donut {
    width: 100px;
    height: 100px;
    border: 4px solid lightgray;
    border-radius: 50%;
    display: inline-flex;

    .active-indicator {

    }

    .label-score {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      .score-values {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .result-label {
        color: gray;
        font-weight: 500;
      }
    }
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
