<template>
    <div class="item__container">
        <slot name="icon"></slot>
        <div class="item__wrapper">
            <h2 class="wrapper__title">
                <slot name="title"></slot>
            </h2>
            <slot name="description"></slot>
        </div>
    </div>
</template>

<style scoped>
.item__container {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 1.6rem;
    width: 100%;
    padding: 2.4rem 1.6rem;
    background-color: var(--color-background-soft);
    border-radius: 8px;
    box-shadow: 0 4px 24px rgba(19, 23, 61, 0.08);
    
}
.item__container:last-child{
    margin-bottom: 0;
}
.item__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
}
.wrapper__title {
    color: var(--color-subtitle);
    font-weight: 500;
    font-size: 1.6rem;
}

</style>