<template>
  <div class="">
    <div class="read-more"
      :class="{full: isExpanded}"
        :style="[isExpanded ? {maxHeight: maxHeightAfter} : {maxHeight: maxHeightInitial}]">
      <slot></slot>
    </div>
    <button class="expand-button margin-top-2"
      @click="isExpanded = !isExpanded">
      {{ isExpanded ? 'read less': 'read more' }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'bv-read-less',
  props: {
    maxHeightInitial: {
      default: '100px'
    },
    maxHeightAfter: {
      default: '2000px'
    }
  },
  data () {
    return {
      isExpanded: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .expand-button {
    border: none;
    background: inherit;
    cursor: pointer;
    text-transform: uppercase;
    color: #454a53;
    font-weight: 600;
    font-size: 14px;
    padding: 0;
  }
  .read-more {
    transition: max-height 1.5s cubic-bezier(0, 1, 0, 1);
    overflow: hidden;
    &.full {
          transition: max-height 1s ease-in-out;
    }
  }
</style>
