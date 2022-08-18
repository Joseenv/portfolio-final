<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goToAboutSection = () => {
  router.push({ name: 'about' });
}

</script>

<template>
    <a @click="goToAboutSection" class="home__btn">Sobre mí</a>
</template>

<style scoped>
.home__btn {
    background: var(--gradient);
    background-size: 800% 400%;
    padding: 1.2rem 2.4rem;
    border-radius: .8rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-heading);
    transition: all .5s ease-in-out;
    animation: gradient 3s infinite cubic-bezier(.62, .28, .23, .99) both;
    text-decoration: none;
    cursor: pointer;
}
.home__btn:hover {
   animation: gradient 3s infinite;
   transform: scale(1.05);
}
.home__btn:active {
   animation: gradient 3s infinite;
   transform: scale(0.8);
}

@keyframes gradient {
   0% {
    background-position: 0% 50%;
   }
  
   50% {
    background-position: 100% 50%;
   }
  
   100% {
    background-position: 0% 50%;
   }
}

@media (min-width: 768px) {
    .home__btn {
      padding: 1.6rem 3.2rem;
      font-size: 1.6rem;
    }
}

</style>