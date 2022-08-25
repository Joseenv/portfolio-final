<script setup>
import { defineAsyncComponent } from 'vue';

const AboutSectionContainer = defineAsyncComponent(() => import('../modules/about/components/AboutSectionContainer.vue'));
</script>


<template>
  <AboutSectionContainer/>
</template>

