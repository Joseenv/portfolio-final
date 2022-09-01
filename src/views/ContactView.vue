<script setup>
import { defineAsyncComponent } from 'vue';

const ContactSectionContainer = defineAsyncComponent(() => import('../modules/contact/components/ContactSectionContainer.vue'));
</script>

<template>
  <ContactSectionContainer/>
</template>