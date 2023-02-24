<template>
    <div class="pt-8 pb-5 flex flex-col items-start justify-start">
        <div class="flex flex-col self-stretch items-center justify-center">
            <img class="w-32 h-32 rounded-full border" :src="info.avatar" alt="avatar" />
            <div class="mt-8 mb-1"><span class="text-3xl">{{ info.name }}</span></div>
        </div>
        <div v-if="info.basicInfos" class="w-full mt-8 pl-6 pr-8 flex flex-col items-start justify-start">
            <div class="w-full px-1 text-xl border-b border-b-primary text-left">
                <span class="text-primary leading-6 text-nowrap">基本信息</span>
            </div>
            <div class="table mt-3">
                <div class="table-row" v-for="bInfo of info.basicInfos" :key="bInfo
                    .key
                ">
                    <div class="table-cell justify-cell">{{ bInfo.key }}</div>
                    <div class="table-cell">:</div>
                    <div class="table-cell text-justify">{{ bInfo.value }}</div>
                </div>
            </div>
        </div>
        <div v-if="info.contactInfos" class="w-full mt-8 pl-6 pr-8 flex flex-col items-start justify-start">
            <div class="w-full px-1 text-xl border-b border-b-primary text-left">
                <span class="text-primary leading-6 text-nowrap">联系方式</span>
            </div>
            <div class="table mt-3">
                <div class="table-row" v-for="bInfo of info.contactInfos" :key="bInfo
                    .key
                ">
                    <div class="table-cell justify-cell">{{ bInfo.key }}</div>
                    <div class="table-cell">:</div>
                    <div class="table-cell text-justify">{{ bInfo.value }}</div>
                </div>
            </div>
        </div>
        <div v-if="info.jobInfos" class="w-full mt-8 pl-6 pr-8 flex flex-col items-start justify-start">
            <div class="w-full px-1 text-xl border-b border-b-primary text-left">
                <span class="text-primary leading-6 text-nowrap">求职信息</span>
            </div>
            <div class="table mt-3">
                <div class="table-row" v-for="bInfo of info.jobInfos" :key="bInfo
                    .key
                ">
                    <div class="table-cell justify-cell">{{ bInfo.key }}</div>
                    <div class="table-cell">:</div>
                    <div class="table-cell text-justify">{{ bInfo.value }}</div>
                </div>
            </div>
        </div>
        <div v-if="info.jobSkillInfos" class="w-full mt-8 pl-6 pr-8 flex flex-col items-start justify-start">
            <div class="w-full px-1 text-xl border-b border-b-primary text-left">
                <span class="text-primary leading-6 text-nowrap">技能特长</span>
            </div>
            <div class="table mt-3">
                <div class="table-row" v-for="bInfo of info.jobSkillInfos" :key="bInfo
                    .key
                ">
                    <div class="table-cell justify-cell">{{ bInfo.key }}</div>
                    <div class="table-cell">:</div>
                    <div class="table-cell text-justify">{{ bInfo.value }}</div>
                </div>
            </div>
        </div>
        <div v-if="info.selfEvaluation" class="w-full mt-8 pl-6 pr-8 flex flex-col items-start justify-start">
            <div class="w-full px-1 text-xl border-b border-b-primary text-left">
                <span class="text-primary leading-6 text-nowrap">技能特长</span>
            </div>
            <div class="mt-3">
                <div class="">
                    <div class="text-left">{{ info.selfEvaluation }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="aside">
import { type PersonalInfo } from "../types"


defineProps<{
    info: PersonalInfo
}>()

</script>

<style scoped>
.justify-cell {
    text-align: justify;
    text-align-last: justify;
}
</style>