<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="colomn is-5">
            <h1 class="title">
              Page title: {{ title }}
            </h1>
            <h2 class="subtitle">
              {{ url }}
            </h2>
            <div class="">
              <a class="button is-info is-outlined rounded">Analyze now</a>
            </div>
          </div>
          <div class="column is-offset-1 is-6">
              <BvGraph></BvGraph>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BvGraph from '@/components/bv-graph.vue'

export default {
  name: 'HeroBlock',
  components: {
    BvGraph
  },
  props: [
    'title',
    'url'
  ],
  mounted () {
  }
}

</script>
<style>
  .hero {
    background-color: #FFF;
  }
  .rounded {
    border-radius: 50px;
  }
</style>
