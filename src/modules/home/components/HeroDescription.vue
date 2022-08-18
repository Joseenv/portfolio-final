<script setup>

</script>

<template>
    <p class="hero__description">
      Y soy
      <VueWriter :array="['Desarrollador Frontend', 'Diseñador UX/UI']"/>
    </p>
</template>

<style scoped>
.hero__description {
  display: flex;
  gap: 4px;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2.4rem;
}
</style>