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
    margin: 3.2rem auto 5.6rem auto;
    padding: 0 1.6rem;
    gap: 3.2rem;
}
.section__title {
    color: var(--color-heading);
    font-weight: 700;
    font-size: 2rem;
    /* background-color: red; */
}
</style>