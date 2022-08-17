<script setup>
import MainFooter from '../modules/shared/components/MainFooter.vue';
import MainHeader from '../modules/shared/components/MainHeader.vue';
</script>

<template>
  <MainHeader/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <MainFooter />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>