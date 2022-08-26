<script setup>
import { defineAsyncComponent } from 'vue';

const SectionEntry = defineAsyncComponent(() => import('../../shared/components/SectionEntry.vue'));
const AboutItem = defineAsyncComponent(() => import('./AboutItem.vue'));
const TimelineItem = defineAsyncComponent(() => import('./TimelineItem.vue'));
const SkillsItem = defineAsyncComponent(() => import('./SkillsItem.vue'));
</script>


<template>
    <section class="about__container">
        <SectionEntry>
            <!-- <template #title></template> -->
            <template #content>
                <AboutItem/>
            </template>
        </SectionEntry>
        <SectionEntry>
            <template #title>Mi camino</template>
            <template #content>
                <TimelineItem/>
            </template>
        </SectionEntry>
        <SectionEntry>
            <template #title>Mis habilidades</template>
            <template #content>
                <SkillsItem/>
            </template>
        </SectionEntry>
    </section>
</template>

<style scoped>
.about__container{
    width: 100%;
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
