<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item" href="https://bulma.io">
          <img src="../assets/logo.svg" alt="Belvilla" width="100" height="20">
        </div>
        <div class="navbar-item header-label">
          Belvilla pagespeed insight
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BvHeader'
}
</script>
<style lang="scss" scoped>
  .navbar {
    position: fixed;
    width: 100%;
    top: 0;
    background: rgba(256,256,256,0.8);
    z-index: 100;
    border-bottom: 1px solid lightgray;
    .header-label {
      top: 5px;
    }
  }
</style>
