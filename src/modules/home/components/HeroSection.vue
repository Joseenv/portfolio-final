<script setup>
import HeroCtaButton from './HeroCtaButton.vue';
import HeroDescription from './HeroDescription.vue';
</script>

<template>
    <section class="home__container">
        <article class="home__hero">
            <img src="@/assets/img/hero-img.webp" alt="" class="hero__img">
            <h2 class="hero__title">Hola Mundo<br>Mi nombre es Jose</h2>
            <HeroDescription/>
            <HeroCtaButton/>
        </article>
    </section>
</template>

<style scoped>
.home__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.home__hero {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero__img {
    width: 24rem;
    height: 24rem;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4.8rem;
}
.hero__title {
    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.6rem;

    
}
</style>