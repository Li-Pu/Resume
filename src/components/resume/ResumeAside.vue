<template>
  <div>
    <div id="resume-aside">
      <div id="photo-box">
        <img src="../../personalInfo/avatar.jpg" alt="照片" id="photo" />
      </div>
      <div id="resume-name">{{ infos.name }}</div>
      <ResumeAsideSection title="个人信息">
        <div id="personal-info">
          <div
            class="table-row"
            v-for="info in infos.personalInfos"
            :key="info.key"
          >
            <div class="table-cell info-key">{{ info.key }}</div>
            <div class="table-cell info-colon"></div>
            <div class="table-cell info-value">
              {{ info.value }}
            </div>
          </div>
        </div>
      </ResumeAsideSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeAsideSection from "./aside/ResumeAsideSection.vue";
import infos from "../../personalInfo/infos";

@Component({
  components: {
    ResumeAsideSection
  }
})
export default class ResumeAside extends Vue {
  infos: any = infos;
}
</script>

<style lang="stylus" scoped>
@import '../../css/index.stylus'

#resume-aside
    padding-top 30px

#photo
    width 120px
    height 120px
    border-radius 50% 50%
    border 1px solid theme-color

#personal-info
    display table
    margin-top 10px

#resume-name
    font-size 30px
    text-align center
    font-weight 700
    margin-top 30px
    margin-bottom 5px

.table-row
    font-size 13px
    line-height 26px
    display table-row
    white-space nowrap

.table-cell
    display table-cell

.info-key
    font-weight bold
    text-align center
    text-align justify
    text-justify distribute-all-lines
    text-align-last justify

.info-colon::before
    content "："
    font-weight bold

.info-value
    text-align left
</style>
