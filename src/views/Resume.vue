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
import ResumeAside from "@/components/ResumeAside.vue";
import ResumeContent from "@/components/ResumeContent.vue";

@Component({
  components: { ResumeAside, ResumeContent }
})
export default class Resume extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="stylus" scoped>
#resume
    margin 0 auto
    width 210mm
    height 276mm
    background-color red

#rightContainer
    position relative
    width 100%
    height 100%
    background-color white
    overflow hidden

#leftContainer
    position relative
    right 70%
    width 100%
    height 100%
    background-color #f0f0f0

#aside
    float left
    position relative
    left 70%
    width 30%

#content
    float left
    position relative
    left 70%
    width 70%
</style>
