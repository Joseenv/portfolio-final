<script setup>
    import { defineAsyncComponent } from 'vue';
    
    const WorksSectionContainer = defineAsyncComponent(() => import('../modules/works/components/WorksSectionContainer.vue'));
</script>
    
<template>
    <WorksSectionContainer/>
</template>