<script setup>
    import { defineAsyncComponent } from 'vue';
    
    const SectionEntry = defineAsyncComponent(() => import('../../shared/components/SectionEntry.vue'));
    const WorksItem = defineAsyncComponent(() => import('./WorksItem.vue'));
</script>

<template>
     <section class="contact__container">
        <SectionEntry>
            <template #content>
                <WorksItem/>
            </template>
        </SectionEntry>
    </section>
</template>

<style scoped>
    .contact__container{
        width: 100%;
        padding: 6rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>    