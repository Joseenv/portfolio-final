<script setup>
import { useSkills } from '../composables/skills'

const { softSkills } = useSkills()
</script>

<template>
    <section class="soft__container">
        <span 
            class="soft__item"
            v-for="skills in softSkills"
            :key="skills.id"
        >
            {{ skills }}
        </span>
    </section>
</template>

<style scoped>
.soft__container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-top: 3.2rem;
    gap: 1.6rem;
    justify-content: center;
    width: 100%;
}
.soft__item {
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
}
</style>