<script setup>
import { defineAsyncComponent } from 'vue';

const SectionItem = defineAsyncComponent(() => import('../../shared/components/SectionItem.vue'));
const AboutItem = defineAsyncComponent(() => import('./AboutItem.vue'));
</script>


<template>
    <section class="about__container">
        <SectionItem>
            <template #title>Sobre mí</template>
            <template #content>
                <AboutItem/>
            </template>
        </SectionItem>
        
    </section>
</template>

<style scoped>
.about__container{
    width: 100%;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
