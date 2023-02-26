<template>
    <div class="pt-8 pb-5 pl-8 pr-8">
        <div class="flex flex-col items-start justify-start">
            <div v-if="info.educationInfos" class="w-full relative mt-5 pt-12">
                <div class="title w-52 h-12 leading-12 absolute top-0 -left-10 pl-5 text-white bg-primary text-left
                                    before:content-[''] before:absolute before:w-0 before:h-0 before:left-0 before:-bottom-2 before:border-t-[8px] before:border-l-[8px] before:border-t-primary_darken before:border-l-transparent
                                    after:content-[''] after:absolute after:w-0 after:h-0 after:-right-4 after:border-t-[1.5rem] after:border-b-[1.5rem] after:border-l-[1rem] after:border-t-transparent after:border-b-transparent after:border-l-primary
                                    ">
                    <span class="leading-[48px] text-xl">教育背景</span>
                </div>
                <div class="w-full flex flex-col mt-4">
                    <div class="w-full" v-for="eInfo of info.educationInfos">
                        <div class="flex flex-row items-center justify-between text-primary">
                            <div class="flex flex-col items-start flex-shrink-0">
                                <div class="text-lg text-left">{{ `${eInfo.start}~${eInfo.end}` }}</div>
                                <div class="text-base text-left">{{ `${eInfo.subject}(${eInfo.degree})` }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="flex flex-col">
                                    <div class="text-lg text-right whitespace-nowrap">{{ eInfo.schoolName }}</div>
                                </div>
                                <div>
                                    <img class="ml-2 w-12 h-12 rounded-full border border-primary_lighten"
                                        :src="eInfo.schoolImgUrl" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="info.workExperienceInfos" class="w-full relative mt-5 pt-12">
                <div class="title w-52 h-12 leading-12 absolute top-0 -left-10 pl-5 text-white bg-primary text-left
                                    before:content-[''] before:absolute before:w-0 before:h-0 before:left-0 before:-bottom-2 before:border-t-[8px] before:border-l-[8px] before:border-t-primary_darken before:border-l-transparent
                                    after:content-[''] after:absolute after:w-0 after:h-0 after:-right-4 after:border-t-[1.5rem] after:border-b-[1.5rem] after:border-l-[1rem] after:border-t-transparent after:border-b-transparent after:border-l-primary
                                    ">
                    <span class="leading-[48px] text-xl">工作经历</span>
                </div>
                <div class="w-full flex flex-col mt-2">
                    <div class="w-full mt-4" v-for="wInfo of info.workExperienceInfos">
                        <div class="flex flex-row items-center justify-between text-primary">
                            <div class="flex flex-col items-start flex-shrink-0">
                                <div class="text-lg text-left">{{ `${wInfo.start}~${wInfo.end}` }}</div>
                                <div class="text-base text-left">{{ wInfo.position }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="flex flex-col">
                                    <div class="text-lg text-right whitespace-nowrap">{{ wInfo.companyName }}</div>
                                </div>
                                <div>
                                    <img class="ml-2 w-12 h-12 rounded-full border border-primary_lighten"
                                        :src="wInfo.companyImgUrl" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col mt-4">
                            <div class="" v-for="(desc, index) of wInfo.descriptions" :key="index">
                                <p class="text-left">{{ desc.content }}</p>
                                <div v-if="desc.details" class="list-item text-left mt-2 ml-5" v-for="detail of desc.details" :key="detail">
                                    {{ detail }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="info.projectInfos" class="w-full relative mt-5 pt-12">
                <div class="title w-52 h-12 leading-12 absolute top-0 -left-10 pl-5 text-white bg-primary text-left
                                    before:content-[''] before:absolute before:w-0 before:h-0 before:left-0 before:-bottom-2 before:border-t-[8px] before:border-l-[8px] before:border-t-primary_darken before:border-l-transparent
                                    after:content-[''] after:absolute after:w-0 after:h-0 after:-right-4 after:border-t-[1.5rem] after:border-b-[1.5rem] after:border-l-[1rem] after:border-t-transparent after:border-b-transparent after:border-l-primary
                                    ">
                    <span class="leading-[48px] text-xl">项目经验</span>
                </div>
                <div class="w-full flex flex-col mt-4">
                    <div class="w-full" v-for="pInfo of info.projectInfos">
                        <div class="flex flex-row items-center justify-between text-primary">
                            <div class="flex flex-col items-start flex-shrink-0">
                                <div class="text-lg">{{ `${pInfo.start}~${pInfo.end}` }}</div>
                                <div class="text-base">{{ pInfo.position }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="flex flex-col">
                                    <div class="text-lg text-right whitespace-nowrap">{{ pInfo.companyName }}</div>
                                    <div class="text-base">{{ pInfo.projectName }}</div>
                                </div>
                                <div>
                                    <img class="ml-2 w-12 h-12 rounded-full border border-primary_lighten"
                                        :src="pInfo.projectImgUrl" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col mt-4">
                            <div class="" v-for="(desc, index) of pInfo.projectDescriptions" :key="index">
                                <p class="text-left mt-2">{{ desc.content }}</p>
                                <div v-if="desc.details" class="list-item text-left mt-2 ml-5" v-for="detail of desc.details" :key="detail">
                                    {{ detail }}
                                </div>
                            </div>
                            <div class="" v-for="(desc, index) of pInfo.taskDescriptions" :key="index">
                                <p v-if="typeof desc === 'string'" class="text-left mt-2" v-html="desc"></p>
                                <template v-else>
                                    <p class="text-left mt-2">{{ desc.content }}</p>
                                    <div v-if="desc.details" class="list-item text-left mt-2 ml-5" v-for="detail of desc.details" :key="detail">
                                        {{ detail }}
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type PersonalInfo } from "./types"


defineProps<{
    info: PersonalInfo
}>()
</script>