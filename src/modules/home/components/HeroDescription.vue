<script setup>

</script>

<template>
    <span class="hero__description">
      Y soy
      <VueWriter :array="['Desarrollador Frontend', 'Diseñador UX/UI']"/>
    </span>
</template>

<style scoped>
.hero__description {
  display: flex;
  gap: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 2.4rem;
}
</style>