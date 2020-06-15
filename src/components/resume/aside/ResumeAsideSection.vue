<template>
  <div>
    <div id="section">
      <div id="title">{{ title }}</div>
      <div id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: String
  }
})
export default class ResumeAsideSection extends Vue {}
</script>

<style lang="stylus" scoped>
@import '../../../css/index.stylus'
#section
    margin-top 30px
    padding 0 30px 0 25px

#title
    line-height 20px
    padding 8px 0
    color theme-color
    font-size: 18px
    border-bottom 1px solid #002060
    font-weight 700
    white-space nowrap
    text-align start
</style>
