<template>
  <div>
    <div id="resume-content">
      <ResumeContentSection title="教育背景" v-if="infos.educationInfos">
        <ResumeContentSectionItem
          v-for="(info, index) in infos.educationInfos"
          v-bind:key="index"
          v-bind:duration="info.start + '~' + info.end"
          v-bind:corporation="info.schoolName"
          v-bind:corporationImgUrl="info.schoolImgUrl"
          v-bind:role="info.subject + '(' + info.degree + ')'"
        />
      </ResumeContentSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
}
</script>

<style lang="stylus" scoped>
@import '../../css/index.stylus'
#resume-content
  padding-top 30px
  padding-left resume-content-padding-left
  padding-right resume-content-padding-right
</style>
