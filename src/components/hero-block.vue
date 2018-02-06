<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="colomn is-5">
            <h1 class="title">
              Page title: Book your holiday home
            </h1>
            <h2 class="subtitle">
              www.belvilla.com/search
            </h2>
            <div class="">
              <a class="button is-info is-outlined rounded">Analyze now</a>
            </div>
          </div>
          <div class="column is-offset-1">
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
