<script setup>
defineProps({
    itemLink: {
        type: Object,
        required: true,
    }
});
</script>

<template>
    <router-link 
        class="menu__item"
        :to="itemLink.route"
        v-slot="{isActive }"
    >
        <img :src="isActive ? itemLink.iconActive : itemLink.iconDefault" 
             :alt="itemLink.name" 
             class="link__img"
        >
        <span v-if="isActive" 
            class="link__name"
        > 
            {{ itemLink.name }} 
        </span>
    </router-link>  
</template>

<style scoped>
.menu__item {
    padding: .6rem 1.2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    text-decoration: none;
}
.link__img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
}
.link__name {
    color: #fff;
}
.router-link-active {
    background-color: #424242;
    border-radius: 8px;
}
span {
    font-size: 1.4rem;
    font-weight: 500;
} 
</style>