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
          :src="corporationImgUrl"
        />
        {{ corporation }}
      </div>
      <div class="resume-content-section-item-role">{{ role }}</div>
      <div class="resume-content-section-item-description" v-if="descriptions">
        <div v-for="description in descriptions" :key="description">
          <p v-if="typeof description === 'string'" v-html="description"></p>
          <div v-else-if="typeof description === 'object'">
            <p v-if="description.content" v-html="description.content"></p>
            <div
              v-for="detail in description.details"
              :key="detail"
              :class="
                description.enumrate
                  ? 'resume-content-section-item-description-detail-enumrate'
                  : 'resume-content-section-item-description-detail'
              "
              v-html="detail"
            ></div>
          </div>
        </div>
      </div>
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
  @Prop() private descriptions!: [];
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

.resume-content-section-item-description
    margin-top 6px
    font-size 13px
    text-align start
    counter-reset digit

.resume-content-section-item-description-detail
    display list-item
    margin-left 20px

.resume-content-section-item-description-detail-enumrate
    display list-item
    list-style none
    &:before
        counter-increment digit
        content: counter(digit)'. '
</style>
