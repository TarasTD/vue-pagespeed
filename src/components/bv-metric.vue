<template>
  <div class="metric-item">
    <div class="device-label">
      {{ type }}
    </div>
    <div class="snapshots is-hidden-mobile" v-if="pageData.snapshots">
      <div class="columns is-multiline">
        <div v-for="(snapshot, index) in pageData.snapshots"
             v-bind:key="index"
             class="column is-narrow">
          <img :src="getImageUrl(snapshot.data)"
               alt="site snapshot"
              class="snapshotImage">
        </div>
      </div>
    </div>
    <!--     :fcp = "pageData.loadingExperience.metrics.fcp.median || 2"
             :dcl = "pageData.loadingExperience.metrics.dcl.median || 1" -->
    <BvDonut :speed="speed"
             :fcp ="1"
             :dcl="2"
    ></BvDonut>
    <ReadLess
      :maxHeightInitial="'0px'"
      :maxHeightAfter="'1760px'"
      class="read-less">
      <div class="columns">
        <div class="column">
          <div class="device-label">
            <div class="pageStatItem"
                 v-for="(statValue, statKey) in pageData.pageStats" v-bind:key="statKey">
              <span class="statKey">{{statKey}}</span> -
              <span>{{statValue}}</span>
            </div>
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
  },
  props: [
    'speed',
    'snapshots',
    'date',
    'pageData',
    'type'
  ],
  computed: {
  },
  methods: {
    getImageUrl: function (data) {
      return 'data:image/jpeg;base64,' + data.replace(/_/g, '/').replace(/-/g, '+')
    }
  }
}
</script>
<style lang="scss">
  .snapshots {
    margin-bottom: 50px;
    .snapshotImage {
      width: 60px;
      height: 100px;
      border: 1px solid lightgrey;
    }
  }
  .metric-item {
    padding-top: 20px;
  }
  .device-label {
    color: gray;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 13px;
  }
  .read-less {
    margin-top: 20px;
  }
  .pageStatItem {
    text-transform: capitalize;
    line-height: 1.6;
    .statKey {
      font-weight: 600;
      color: cadetblue;
    }
  }
</style>
