<template>
  <div>
    <div class="resume-content-section-item">
      <div class="resume-content-section-item-duration">
        {{ duration }}
      </div>
      <div class="resume-content-section-item-corporation">
        <img
          class="resume-content-section-item-corporation-img"
          v-if="corporationImgUrl !== undefined && corporationImgUrl !== null"
          v-bind:src="corporationImgUrl"
        />
        {{ corporation }}
      </div>
      <div class="resume-content-section-item-role">{{ role }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResumeContentSectionItem extends Vue {
  @Prop() private duration!: string;
  @Prop() private corporation!: string;
  @Prop() private corporationImgUrl!: string;
  @Prop() private role!: string;
}
</script>

<style lang="stylus">
@import '../../../css/index.stylus'
img-width = resume-content-section-item-font-size + 2px
.resume-content-section-item-duration
    font-size resume-content-section-item-font-size
    height resume-content-section-item-height
    line-height resume-content-section-item-height
    float left
    font-weight bold
    text-align left
    color lighten(theme-color, 10%)
.resume-content-section-item-corporation-img
    display inline-block
    width img-width
    height img-width
    border-radius (img-width / 2)
.resume-content-section-item-corporation
    font-size resume-content-section-item-font-size
    height resume-content-section-item-height
    line-height resume-content-section-item-height
    float right
    font-weight bold
    text-align right
    color lighten(theme-color, 20%)
.resume-content-section-item-role
    font-size resume-content-section-item-font-size
    height resume-content-section-item-height
    line-height resume-content-section-item-height
    clear both
    font-weight 500
    text-align left
    color lighten(theme-color, 30%)
</style>
