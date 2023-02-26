<template>
    <div class="container mx-auto my-0 border flex flex-row items-stretch justify-center">
        <Aside class="w-1/3 bg-neutral-100" :info="Info" />
        <Content class="w-2/3" :info="Info"/>
    </div>
</template>

<script setup>
import Aside from './resume_aside'
import Content from './resume_content'
import Info from '../../personalInfo'
</script>

<style scoped>
.container {
    width: 210mm;
    height: 297mm;
}
</style>