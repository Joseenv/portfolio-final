<template>
    <article class="about__container">
        <img src="@/assets/img/about-img.webp" alt="" class="about__img">
        <p class="about__description">
            ¡Encantado! Soy Jose Navarro, un apasionado con el mundo de la creatividad, el Desarrollo Frontend y el Diseño UX/UI. Me gustan las experiencias retadoras y estar en constante aprendizaje.
        </p>
    </article>
</template>

<style scoped>
.about__container {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    padding: 0;
}
.about__img {
    width: 10.8rem;
    height: 10.8rem;
    border-radius: 50%;
}
.about__description {
    color: var(--color-text);
    font-size: 1.4rem;
    text-align: justify;
    line-height: 18px;
}
</style>