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
        class="menu__link"
        :to="itemLink.route"
        v-slot="{isActive }"
    >
        <img 
            :src="isActive ? itemLink.iconActive : itemLink.iconDefault" 
            :alt="itemLink.name" 
            class="link__img"
        >
        <span class="link__status"></span>
    </router-link>  
</template>

<style scoped>
.menu__link {
    display: flex;
    gap: .4rem;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
}
.link__img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
}
.link__status {
    background-color: transparent;
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.router-link-active .link__status {
    background-color: var(--color-green);
}
</style>