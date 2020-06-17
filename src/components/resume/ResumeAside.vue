<template>
  <div>
    <div id="resume-aside">
      <div id="photo-box">
        <img src="../../personalInfo/avatar.jpg" alt="照片" id="photo" />
      </div>
      <div id="resume-name">{{ infos.name }}</div>
      <ResumeAsideSection title="基本信息">
        <div id="personal-info">
          <div
            class="table-row"
            v-for="info in infos.basicInfos"
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
      <ResumeAsideSection title="联系方式">
        <div id="personal-info">
          <div
            class="table-row"
            v-for="info in infos.contactInfos"
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
      <ResumeAsideSection title="求职信息">
        <div id="personal-info">
          <div class="table-row" v-for="info in infos.jobInfos" :key="info.key">
            <div class="table-cell info-key">{{ info.key }}</div>
            <div class="table-cell info-colon"></div>
            <div class="table-cell info-value">
              {{ info.value }}
            </div>
          </div>
        </div>
      </ResumeAsideSection>
      <ResumeAsideSection title="技能特长">
        <ul class="skill-items">
          <li
            class="skill-item"
            v-for="skill in infos.jobSkillInfos"
            v-bind:key="skill.key"
          >
            <ResumeAsideProgress :label="skill.key" :progress="skill.value" />
          </li>
        </ul>
      </ResumeAsideSection>
      <ResumeAsideSection title="自我评价">
        <p id="self-evaluation-content">{{ infos.selfEvaluation }}</p>
      </ResumeAsideSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ResumeAsideSection from "./aside/ResumeAsideSection.vue";
import ResumeAsideProgress from "./aside/ResumeAsideProgress.vue";
import infos from "../../personalInfo/infos";

@Component({
  components: {
    ResumeAsideSection,
    ResumeAsideProgress
  }
})
export default class ResumeAside extends Vue {
  private infos = infos;
}
</script>

<style lang="stylus" scoped>
@import '../../css/index.stylus'

#resume-aside
    padding-top 30px
    padding-bottom 20px

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
    text-align justify
    text-align-last justify

.info-colon::before
    content "："
    font-weight bold

.info-value
    text-align left

#self-evaluation-content
    font-size 13px
    line-height 26px
    text-align left

.skill-items
    margin-top 10px
    padding-left 0

.skill-item
    list-style none
    margin 3px 0 3px 0
</style>
