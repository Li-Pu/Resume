<template>
  <div>
    <div id="resume-content">
      <ResumeContentSection title="教育背景" v-if="infos.educationInfos">
        <ResumeContentSectionItem
          v-for="(info, index) in infos.educationInfos"
          v-bind:key="index"
          v-bind:duration="getDuration(info)"
          v-bind:corporation="info.schoolName"
          v-bind:corporationImgUrl="info.schoolImgUrl"
          v-bind:role="info.subject + '(' + info.degree + ')'"
        />
      </ResumeContentSection>
      <ResumeContentSection title="工作经验" v-if="infos.workExperienceInfos">
        <ResumeContentSectionItem
          v-for="(info, index) in infos.workExperienceInfos"
          v-bind:key="index"
          v-bind:duration="getDuration(info)"
          v-bind:corporation="info.companyName"
          v-bind:corporationImgUrl="info.companyImgUrl"
          v-bind:role="info.position"
          v-bind:descriptions="info.descriptions"
        />
      </ResumeContentSection>
      <ResumeContentSection title="项目经验" v-if="infos.projectInfos">
        <ResumeContentSectionItem
          v-for="(info, index) in infos.projectInfos"
          v-bind:key="index"
          v-bind:duration="getDuration(info)"
          v-bind:corporation="info.projectName"
          v-bind:corporationImgUrl="info.projectImgUrl"
          v-bind:role="info.position"
          v-bind:descriptions="
            info.projectDescriptions.concat(info.taskDescriptions)
          "
        />
      </ResumeContentSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ResumeContentSection from "./content/ResumeContentSection.vue";
import ResumeContentSectionItem from "./content/ResumeContentSectionItem.vue";
import infos from "@/personalInfo/infos";

@Component({
  components: {
    ResumeContentSection,
    ResumeContentSectionItem
  }
})
export default class ResumeContent extends Vue {
  infos = infos;
  getDuration(info: { start: string; end: string }) {
    return info.start + " ~ " + info.end;
  }
}
</script>

<style lang="stylus" scoped>
@import '../../css/index.stylus'
#resume-content
  padding-top 30px
  padding-bottom 20px
  padding-left resume-content-padding-left
  padding-right resume-content-padding-right
</style>
