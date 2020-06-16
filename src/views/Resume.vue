<template>
  <div id="resume">
    <div id="rightContainer">
      <div id="leftContainer">
        <ResumeAside id="aside"></ResumeAside>
        <ResumeContent id="content"></ResumeContent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeAside from "@/components/resume/ResumeAside.vue";
import ResumeContent from "@/components/resume/ResumeContent.vue";

@Component({
  components: { ResumeAside, ResumeContent }
})
export default class Resume extends Vue {}
</script>

<style lang="stylus" scoped>
@import '../css/index.stylus'

resume-split-neg-percent = 100% - resume-split-percent

#resume
    margin 0 auto
    width 210mm
    height 276mm
    outline 1px solid black

#rightContainer
    position relative
    width 100%
    height 100%
    background-color white
    overflow hidden

#leftContainer
    position relative
    right resume-split-neg-percent
    width 100%
    height 100%
    background-color #f0f0f0

#aside
    float left
    position relative
    left resume-split-neg-percent
    width resume-split-percent

#content
    float left
    position relative
    left resume-split-neg-percent
    width resume-split-neg-percent
</style>
