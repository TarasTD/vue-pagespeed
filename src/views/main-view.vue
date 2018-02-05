<template>
  <div class="content" v-if="!loading">
    <h1 class="title">
      {{ title }}
    </h1>
    <div class="stats" v-for="(value, key) in stats">
      <strong>{{key}}</strong>
      <span>{{value}}</span>
    </div>
    <div>
      <strong class="speedScore">Speed</strong>
      <span class="speedScore">{{speed}}</span>
    </div>
  </div>
  <div v-else class="loading">
    <div class="loadingLabel">LOADING...</div><br>
    <div>
      <small><em>{{url}}</em></small>
    </div>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'mainView',
  data () {
    return {
      msg: 'message',
      loading: true,
      stats: '',
      url: 'belvilla.com'
    }
  },
  mounted () {
    this.getData().then(
      (i) => {
        this.loading = false
        this.title = i.data.title
        this.stats = i.data.pageStats
        this.speed = i.data.ruleGroups.SPEED.score
      }
    )
  },

  methods: {
    getData: function () {
      return api.fetchTest(this.url)
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-top: 50px;
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
  }

  .speedScore {
    color: red;
    font-size: 22px;
    font-weight: 600;
  }
  .loadingLabel {
    display: block;
  }
</style>
