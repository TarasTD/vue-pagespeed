<template>
  <div class="metric-item">
    <div class="period-label">
      12.01.2018
    </div>
    <div class="columns">
      <div class="column is-5">
        <div class="device-label">
          Desktop
        </div>
        <BvDonut :color="'green'"></BvDonut>
        <ReadLess
          :maxHeightInitial="'0px'"
          :maxHeightAfter="'1760px'"
          class="is-hidden-tablet">
          <div class="columns">
            <div class="column">
              <div class="device-label">
                  numberResources: 53,<br>
                  numberHosts: 15,<br>
                  totalRequestBytes: 8304,<br>
                  numberStaticResources: 35,<br>
                  htmlResponseBytes: 80474,<br>
                  overTheWireResponseBytes: 970506,<br>
                  cssResponseBytes: 631809,<br>
                  imageResponseBytes: 538294,<br>
                  javascriptResponseBytes: 1047857,<br>
                  otherResponseBytes: 2994,<br>
                  numberJsResources: 15,<br>
                  numberCssResources: 2,<br>
                  numTotalRoundTrips: 33,<br>
                  numRenderBlockingRoundTrips: 5
              </div>
            </div>
          </div>
        </ReadLess>
      </div>
      <div class="column is-5 is-offset-2">
        <div class="device-label">
          Mobile
        </div>
        <BvDonut :color="'red'"></BvDonut>
        <ReadLess
        :maxHeightInitial="'0px'"
        :maxHeightAfter="'1760px'"
        class="is-hidden-tablet">
        <div class="columns">
          <div class="column">
            <div class="device-label">
                numberResources: 53,<br>
                numberHosts: 15,<br>
                totalRequestBytes: 8304,<br>
                numberStaticResources: 35,<br>
                htmlResponseBytes: 80474,<br>
                overTheWireResponseBytes: 970506,<br>
                cssResponseBytes: 631809,<br>
                imageResponseBytes: 538294,<br>
                javascriptResponseBytes: 1047857,<br>
                otherResponseBytes: 2994,<br>
                numberJsResources: 15,<br>
                numberCssResources: 2,<br>
                numTotalRoundTrips: 33,<br>
                numRenderBlockingRoundTrips: 5
            </div>
          </div>
        </div>
      </ReadLess>
      </div>
    </div>
    <ReadLess
      class="is-hidden-mobile"
      :maxHeightInitial="'0px'"
      :maxHeightAfter="'1760px'">
      <div class="columns">
        <div class="column is-5">
          <div class="device-label">
              numberResources: 53,<br>
              numberHosts: 15,<br>
              totalRequestBytes: 8304,<br>
              numberStaticResources: 35,<br>
              htmlResponseBytes: 80474,<br>
              overTheWireResponseBytes: 970506,<br>
              cssResponseBytes: 631809,<br>
              imageResponseBytes: 538294,<br>
              javascriptResponseBytes: 1047857,<br>
              otherResponseBytes: 2994,<br>
              numberJsResources: 15,<br>
              numberCssResources: 2,<br>
              numTotalRoundTrips: 33,<br>
              numRenderBlockingRoundTrips: 5
          </div>
        </div>
        <div class="column is-5 is-offset-2">
          <div class="device-label">
              numberResources: 53,<br>
              numberHosts: 15,<br>
              totalRequestBytes: 8304,<br>
              numberStaticResources: 35,<br>
              htmlResponseBytes: 80474,<br>
              overTheWireResponseBytes: 970506,<br>
              cssResponseBytes: 631809,<br>
              imageResponseBytes: 538294,<br>
              javascriptResponseBytes: 1047857,<br>
              otherResponseBytes: 2994,<br>
              numberJsResources: 15,<br>
              numberCssResources: 2,<br>
              numTotalRoundTrips: 33,<br>
              numRenderBlockingRoundTrips: 5
          </div>
        </div>
      </div>
    </ReadLess>
  </div>
</template>

<script>
import BvDonut from '@/components/bv-donut.vue'
import ReadLess from '@/components/read-less.vue'

export default {
  name: 'BvMetric',
  components: {
    BvDonut,
    ReadLess
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
    color: rgba(136, 135, 135, 0.801);
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
  .device-label {
    color: gray;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 13px;
  }
</style>
