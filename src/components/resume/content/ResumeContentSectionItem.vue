<template>
  <div>
    <div class="resume-content-section-item">
      <img
        class="resume-content-section-item-corporation-img"
        v-if="corporationImgUrl !== undefined && corporationImgUrl !== null"
        :src="corporationImgUrl"
      />
      <div class="resume-content-section-item-header">
        <div class="resume-content-section-item-header-row">
          <div class="resume-content-section-item-duration">
            {{ duration }}
          </div>
          <div class="resume-content-section-item-corporation">
            {{ corporation }}
          </div>
        </div>
        <div class="resume-content-section-item-role">{{ role }}</div>
      </div>

      <div class="resume-content-section-item-description" v-if="descriptions">
        <div v-for="(description, index) in descriptions" :key="index">
          <p
            class="resume-content-section-item-description-module"
            v-if="typeof description === 'string'"
            v-html="description"
          ></p>
          <div
            class="resume-content-section-item-description-module"
            v-else-if="typeof description === 'object'"
          >
            <p
              class="resume-content-section-item-description-content"
              v-if="description.content"
              v-html="description.content"
            ></p>
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

img-width = resume-content-section-item-height * 2

.resume-content-section-item
    margin-top 10px

.resume-content-section-item-header-row
    display flex
    flex-direction row
    justify-content space between

.resume-content-section-item-duration
    font-size resume-content-section-item-font-size
    height resume-content-section-item-height
    line-height resume-content-section-item-height
    flex 1
    font-weight bold
    text-align left
    color lighten(theme-color, 10%)

.resume-content-section-item-corporation-img
    float right
    width img-width
    height img-width
    margin 0 10px
    border-radius (img-width / 2)
    border 1px solid lighten(theme-color, 80%)

.resume-content-section-item-corporation
    font-size resume-content-section-item-font-size
    height resume-content-section-item-height
    line-height resume-content-section-item-height
    flex 1
    font-weight bold
    text-align right
    color lighten(theme-color, 20%)

.resume-content-section-item-role
    font-size resume-content-section-item-role-font-size
    height resume-content-section-item-role-height
    line-height resume-content-section-item-role-height
    font-weight 500
    text-align left
    color lighten(theme-color, 30%)

.resume-content-section-item-description
    margin-top 6px
    font-size 13px
    text-align start
    counter-reset digit

.resume-content-section-item-description-module
  margin-block-start 1em

.resume-content-section-item-description-content
    margin-block-start 0
    margin-block-end 0

.resume-content-section-item-description-detail
    display list-item
    margin-left 20px

.resume-content-section-item-description-detail-enumrate
    display list-item
    margin-left 10px
    list-style none
    &:before
        counter-increment digit
        content: counter(digit)'.\00A0'
</style>
