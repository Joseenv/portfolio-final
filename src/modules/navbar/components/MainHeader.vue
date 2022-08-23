<script setup>
// import DarkModeToggle from './DarkModeToggle.vue';
</script>

<template>
    <header class="header">
        <nav class="navbar">
            <h1 class="navbar__logo">Jose <span>N.</span></h1>
            <!-- <DarkModeToggle/> -->
        </nav>
    </header>
</template>
<style scoped>
.header {
    width: 100%;
    height: 6rem;
    background-color: var(--color-background);
    position: fixed;
    left: 0;
    top: 0;
    /* border-bottom: 1.5px solid var(--color-border); */
}
.navbar {
    max-width: 1440px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1.6rem;
    justify-content: space-between;
} 
.navbar__logo {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-heading);
}
span {
    color: var(--color-green);
    font-weight: 700;
}
</style>