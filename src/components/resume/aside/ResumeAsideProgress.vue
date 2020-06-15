<template>
  <div id="progress">
    <div id="progress-label">{{ label }}</div>
    <div id="progress-outer">
      <div
        id="progress-inner"
        v-bind:style="{ width: parseInt(progress * 100) + '%' }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    label: String,
    progress: Number
  }
})
export default class ResumeAsideProgress extends Vue {}
</script>

<style lang="stylus">
@import '../../../css/index.stylus'

#progress
    display flex
    width 100%
    align-items center

#progress-label
    flex 1
    min-width 90px
    font-weight bold
    text-align end

#progress-outer
    flex 4
    margin 0 5px
    height 6px
    border-radius 3px
    background-color lightness(theme-color, 80%)

#progress-inner
    height 6px
    border-radius 3px
    background-color theme-color
</style>
