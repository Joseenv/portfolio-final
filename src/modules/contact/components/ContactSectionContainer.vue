<script setup>
    import { defineAsyncComponent } from 'vue';
    
    const SectionEntry = defineAsyncComponent(() => import('../../shared/components/SectionEntry.vue'));
    const ContactItem = defineAsyncComponent(() => import('./ContactItem.vue'));
</script>

<template>
     <section class="contact__container">
        <SectionEntry>
            <template #content>
                <ContactItem/>
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