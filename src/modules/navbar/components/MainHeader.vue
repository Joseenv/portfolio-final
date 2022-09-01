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
    background-color: var(--color-background);
    height: 6rem;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    opacity: 0.998;
    outline: 1px solid var(--color-border);
    z-index: 1;
}
.navbar {
    max-width: 1440px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1.6rem;
    justify-content: space-between;
    margin: 0 auto;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
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