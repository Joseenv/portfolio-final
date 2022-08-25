<script setup>
import NavbarLink from './NavbarLink.vue';
import { useNavbar } from '../composables/navbar.js';
// import { ref, onMounted } from 'vue';
const { items } = useNavbar();

// const footer = ref(null)
// const scroll = ref(null)
// const pixels = ref(null)
// const displayFooter = () => {
//     scroll.value = window.scrollY;
//     pixels.value = window.screenY;
//     console.log('Scroll Y' + scroll.value);
//     console.log('Screen Y' + pixels.value);
    // if (scroll.value > 0) {
    //     footer.value.style.display = 'none'
    //     console.log('ocultando footer');
    // } else {
    //     footer.value.style.display = 'block'
    //     console.log('mostrando footer');
    // }
// }

// onMounted(() => {
//   window.addEventListener('scroll', displayFooter)
// })
</script>

<template>
    <footer class="footer" ref="footer">
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
    background-color: var(--color-background);
    bottom: 0;
    height: 6rem;
    left: 0;
    padding: 0 1.6rem;
    position: fixed;
    width: 100%;
    width: 100%;
    border-top: 1.5px solid var(--color-border);
    display: block;
}
.navbar {
    height: 100%;
    width: 100%;
}
.navbar__menu {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
.menu__item {
    list-style: none;
}
</style>
