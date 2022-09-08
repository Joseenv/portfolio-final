<script setup>
import { useTestimonials } from '../composables/testimonials';

const { testimonials } = useTestimonials();
</script>
    
<template>
  <section class="testimonials__container">
        <article 
            class="testimony__container" 
            v-for="(testimony, index) in testimonials"
            :key="index" 
        >
            <img :src="testimony.photo" :alt="'Imagen de ' + testimony.name" class="testimomy__img">
            <p class="testimony__content">{{ testimony.content }}</p>
            <div class="testimony__user">
                <h3 class="user__name">{{ testimony.name }}</h3>
                <span class="user__company">{{ testimony.company }}</span>    
            </div>
        </article>
    </section>
</template>

<style scoped>
.testimonials__container {
    display: flex;
    gap: 3.2rem;
    margin: 0 auto;
}
.testimony__container{
    padding: 2.4rem;
    background-color: var(--color-background-soft);
    border-radius: .8rem;
    width: 28rem;
    height: 34rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    box-shadow: 0 4px 24px rgba(19, 23, 61, 0.08);
}
.testimomy__img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
}
.testimony__content {
    font-size: 1.4rem;
    line-height: 18px;
    text-align: justify;
}
.testimony__user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;
}
.user__name {
    color: var(--color-green);
    font-size: 1.6rem;
    font-weight: 500;
}
.user__company {
    color: var(--color-heading);
    font-size: 1.4rem;
    font-weight: 400;
}
</style>