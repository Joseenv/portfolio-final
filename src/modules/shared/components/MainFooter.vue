<script setup>
import NavbarLink from './NavbarLink.vue';
import { ref } from 'vue';

const items = ref([
    {
        name: 'Inicio',
        route: { name: 'home' },
        iconDefault: "./icons/home.png",
        iconActive: "./icons/home-active.png"
    },
    {
        name: 'Sobre mí',
        route: { name: 'about' },
        iconDefault: "./icons/about.png",
        iconActive: "./icons/about-active.png",
    },
    {
        name: 'Trabajos',
        route: { name: 'works' },
        iconDefault: "./icons/works.png",
        iconActive: "./icons/works-active.png",
    },
    {
        name: 'Contacto',
        route: { name: 'contact' },
        iconDefault: "./icons/contact.png",
        iconActive: "./icons/contact-active.png",
    },
])
    


</script>

<template>
    <nav class="navbar">
        <ul class="navbar__menu">
            <li class="menu__item"
                v-for="(item, index) in items" :key="index"
            >
                <NavbarLink :itemLink="item"/>  
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    align-items: center;
    background-color: var(--color-background-soft);
    border-radius: 16px;
    bottom: 1.6rem;
    display: flex;
    height: 5.6rem;
    justify-content: center;
    left: calc((100vw - 32rem)/2);
    margin: 0 auto;
    position: fixed;
    width: 32rem;
}
.navbar__menu {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.4rem 2.8rem;
    width: 100%;
}
.menu__item {
    list-style: none;
}
</style>
