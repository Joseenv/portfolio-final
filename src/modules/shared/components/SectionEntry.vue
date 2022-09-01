<template>
    <section class="section__item">
        <h1 class="section__title">
            <slot name="title"></slot>
        </h1>
        <slot name="content"></slot>
    </section>
</template>

<style scoped>
.section__item {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 3.2rem auto 4.8rem auto;
    gap: 3.2rem;
    width: 100%;
    padding: 0 1.6rem;
    overflow-x: auto;
}
.section__item::-webkit-scrollbar {
    display: none;
}
.section__title {
    color: var(--color-heading);
    font-weight: 700;
    font-size: 2rem;
}
</style>