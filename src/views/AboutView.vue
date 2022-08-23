<script setup>
import { defineAsyncComponent } from 'vue';

const AboutSection = defineAsyncComponent(() => import('../modules/about/components/AboutSection.vue'));
</script>


<template>
  <AboutSection/>
</template>

