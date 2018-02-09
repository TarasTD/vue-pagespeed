<template>
  <div>
    <div v-if="simpleLoader" class="simpleLoader">
      <div class="fa-3x">
        <i class="fas fa-circle-notch fa-spin"></i>
      </div>
    </div>
    <div class="loading-placeholder margin-top-5" v-else>
      <div class="timeline-wrapper">
          <div class="timeline-item">
            <div class="animated-background">
              <div class="background-masker header-top"></div>
              <div class="background-masker header-right"></div>
              <div class="background-masker header-bottom"></div>
              <div class="background-masker subheader-right"></div>
              <div class="background-masker subheader-bottom"></div>
              <div class="background-masker content-top"></div>
              <div class="background-masker content-first-end"></div>
              <div class="background-masker content-second-line"></div>
              <div class="background-masker content-second-end"></div>
              <div class="background-masker content-third-line"></div>
              <div class="background-masker content-third-end"></div>
              <div class="background-masker content-forth-line"></div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bv-loader',
  props: ['simpleLoader']
}
</script>
<style lang="scss" scoped>
  .simpleLoader {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .loading-placeholder {
    height: 350px;
    @keyframes placeHolderShimmer{
      0%{
        background-position: -468px 0
      }
      100%{
        background-position: 468px 0
      }
    }

.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #FFF;
  background: linear-gradient(to right, #fff 8%, #f9f9f9 18%, #fff 33%);
  background-size: 800px 104px;
  height: 100px;
  position: relative;
}

  .timeline-item {
    background: #f9f9f9;
    padding: 20px;
    margin: 0 auto;
    max-width: 100%;
    min-height: 150px;
  }

  .background-masker {
    background:#f9f9f9;
    position: absolute;
  }
  /* Every thing below this is just positioning */
  .background-masker.header-top,
  .background-masker.header-bottom,
  .background-masker.subheader-bottom {
    top: 0;
    left: 0px;
    right: 0;
    height: 10px;
  }

  .background-masker.header-left,
  .background-masker.subheader-left,
  .background-masker.header-right,
  .background-masker.subheader-right {
    top: 10px;
    left: 40px;
    height: 8px;
    width: 10px;
  }

  .background-masker.header-bottom {
    top: 18px;
    height: 6px;
  }

  .background-masker.subheader-left,
  .background-masker.subheader-right {
    top: 24px;
    height: 6px;
  }

  .background-masker.header-right,
  .background-masker.subheader-right {
    width: auto;
    left: 300px;
    right: 0;
  }

  .background-masker.subheader-right {
    left: 230px;
  }

  .background-masker.subheader-bottom {
    top: 30px;
    height: 10px;
  }

  .background-masker.content-top,
  .background-masker.content-second-line,
  .background-masker.content-third-line,
  .background-masker.content-forth-line,
  .background-masker.content-fifth-line,
  .background-masker.content-sixth-line,
  .background-masker.content-seventh-line,
  .background-masker.content-second-end,
  .background-masker.content-third-end,
  .background-masker.content-first-end {
    top: 40px;
    left: 0;
    right: 0;
    height: 6px;
  }

  .background-masker.content-top {
    height:20px;
  }

  .background-masker.content-first-end,
  .background-masker.content-second-end,
  .background-masker.content-third-end{
    width: auto;
    left: 380px;
    right: 0;
    top: 60px;
    height: 8px;
  }

  .background-masker.content-second-line  {
    top: 68px;
  }

  .background-masker.content-second-end {
    left: 420px;
    top: 74px;
  }

  .background-masker.content-third-line {
    top: 82px;
  }

  .background-masker.content-forth-line {
    top: 96px;
  }

  .background-masker.content-fifth-line {
    top: 110px;
  }

  .background-masker.content-sixth-line {
    top: 124px;
  }
  .background-masker.content-seventh-line {
    top: 137px;
  }
  .background-masker.content-third-end {
    left: 300px;
    top: 88px;
  }
  }
</style>
