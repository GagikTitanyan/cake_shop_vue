<template>
  <div class="sweets-elements">
    <SweetsContainer v-for="(sweet, index) of sweetsData" :key="index" :name="sweet.name" :image="sweet.image" :direction="sweet.direction" :class="!index && 'first-element'" @click="$router.push('/categories')" />
  </div>
</template>

<script setup>
import SweetsContainer from '~/components/atoms/sweets-container.vue'
import sweetsData from '~/data/sweets.json' 
</script>

<style lang="scss" scoped>
.sweets-elements {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 50% 50%;
  padding: 0 7%;
  overflow: hidden;
}

.first-element {
  margin-top: 60px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .sweets-elements {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .first-element {
    margin: 0;
  }
}
</style>
