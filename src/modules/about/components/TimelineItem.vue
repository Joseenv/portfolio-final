<script setup>
import { defineAsyncComponent } from 'vue';
import { useEntries } from '../composables/useEntries.js';
const TimelineEntry = defineAsyncComponent(() => import('../../shared/components/TimelineEntry.vue'));

const { entries } = useEntries();
</script>

<template>
    <TimelineEntry 
        v-for="(entry, index) in entries"
        :key="index"
    >
        <template #icon>
            <img :src="entry.icon" alt="Ícono" class="item__icon">
        </template>
        <template #title>
            {{ entry.title }}
        </template>
        <template #description>
            <ul class="wrapper__description">
                <li 
                    class="description__entry"
                    v-for="description in entry.descriptions"
                >
                    <span>- </span>{{ description }}
                </li>
            </ul>
        </template>
    </TimelineEntry>
</template>

<style scoped>
.item__icon {
    padding: 1rem;
    background-color: var(--color-blue);
    border-radius: 50%;
}
.wrapper__description {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: .8rem;
}
.description__entry {
    color: var(--color-text);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 21px;
}

span {
    color: var(--color-green);
    font-weight: 800;
    font-size: 1.6rem;
}
</style>
