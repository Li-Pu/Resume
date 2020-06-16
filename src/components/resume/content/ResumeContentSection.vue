<template>
  <div>
    <div class="resume-content-section">
      <div class="resume-content-section-title">{{ title }}</div>
      <div class="resume-content-section-module">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResumeContent extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="stylus" scoped>
@import '../../../css/index.stylus'

title-height = 50px
half-title-height = title-height / 2

.resume-content-section
    position relative
    margin-top 38px
    padding-top title-height

.resume-content-section-title
    position absolute
    width 200px
    height title-height
    line-height title-height
    padding-left 20px
    top 0px
    left -(resume-content-padding-left + 8px)
    color white
    text-align start
    background-color theme-color

.resume-content-section-title:before
.resume-content-section-title:after
    content ""
    position absolute

.resume-content-section-title:before
    height 0
    width  0
    border-top 8px solid darken(theme-color, 30%)
    border-left 8px solid transparent
    bottom -8px
    left 0

.resume-content-section-title:after
    height 0
    width 0
    border-top half-title-height solid transparent
    border-bottom half-title-height solid transparent
    border-left 15px solid theme-color
    right -15px

.resume-content-section-module
    margin-top 15px
</style>
