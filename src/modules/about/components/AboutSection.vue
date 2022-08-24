<script setup>
import { defineAsyncComponent } from 'vue';

const SectionItem = defineAsyncComponent(() => import('../../shared/components/SectionItem.vue'));
const AboutItem = defineAsyncComponent(() => import('./AboutItem.vue'));
const WayItem = defineAsyncComponent(() => import('./WayItem.vue'));
</script>


<template>
    <section class="about__container">
        <SectionItem>
            <template #title>Sobre mí</template>
            <template #content>
                <AboutItem/>
            </template>
        </SectionItem>
        <SectionItem>
            <template #title>Mi camino</template>
            <template #content>
                <wayItem/>
            </template>
        </SectionItem>
    </section>
</template>

<style scoped>
.about__container{
    width: 100%;
    padding: 6rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
