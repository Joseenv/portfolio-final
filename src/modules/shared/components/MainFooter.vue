<script setup>
import NavbarLink from './NavbarLink.vue';
import { useNavbar } from '../../../composables/navbar.js';

const { items } = useNavbar();
</script>

<template>
    <footer class="footer">
        <nav class="navbar">
            <ul class="navbar__menu">
                <li class="menu__item"
                    v-for="(item, index) in items" 
                    :key="index"
                >
                    <NavbarLink :itemLink="item"/>  
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
.footer {
    position: fixed;
    width: 100%;
    height: 6rem;
    width: 100%;
    bottom: 1.6rem;
    left: 0;
    padding: 0 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.navbar {
    background-color: var(--color-background-soft);
    border-radius: 16px;
    height: 100%;
    width: 100%;
}
.navbar__menu {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.4rem 2.8rem;
    width: 100%;
    height: 100%;
}
.menu__item {
    list-style: none;
}
</style>
