<script setup>
import { ref, defineAsyncComponent } from 'vue';
import TechnicalsSkills from './TechnicalsSkills.vue';
const SoftSkills = defineAsyncComponent(() => import('./SoftSkills.vue'));

const classTech = ref('menu__item active');
const classSoft = ref('menu__item');
const isActive = ref(true);

const showTechnicalSkills = () => {
    isActive.value = true;
    classTech.value = 'menu__item active';
    classSoft.value = 'menu__item';
}
const showSoftSkills = () => {
    isActive.value = false;
    classSoft.value = 'menu__item active';
    classTech.value = 'menu__item';
}
</script>

<template>
    <section class="skills__container">
        <nav class="skills__navbar">
            <ul class="navbar__menu">
                <li :class="classTech" @click.prevent="showTechnicalSkills">
                    Hab. Técnicas
                    <div class="item__status"></div>
                </li>
                <li :class="classSoft" @click.prevent="showSoftSkills">
                    Hab. Blandas
                    <div class="item__status"></div>
                </li>
            </ul>
        </nav>
        <TechnicalsSkills v-if="isActive"></TechnicalsSkills>
        <SoftSkills v-else></SoftSkills>
    </section>
</template>

<style scoped>
.skills__navbar{
    height: 3rem;
    display: flex;
    justify-content: center;
}
.navbar__menu {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
}
.menu__item {
    list-style: none;
    font-weight: 500;
    color: rgba(235, 235, 235, 0.48);
    font-size: 1.6rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    z-index: 0;
}
.active {
    color: var(--color-subtitle);
}
.item__status {
    width: 2rem;
    height: 4px;
    background-color: transparent;
    border-radius: 4px;
}
.menu__item.active .item__status {
    background-color: var(--color-green);
}
</style>