<template>
  <div class="home-page">
    <home-part />
    <sweets />
    <new-cakes />
  </div>
</template>

<script setup>
import homePart from '~/components/atoms/home-part.vue'
import sweets from '~/components/molecules/sweets.vue'
import newCakes from '~/components/molecules/new-cakes.vue'
import { useCake } from '~/composables/cakeStore'

const { $api } = useNuxtApp()
const { getCakes } = useCake()


onMounted(async () => {
  const { data } = await $api.get('/cakes')
  getCakes(data)
})

</script>

<style lang="scss" scoped>
.home-page {
  background: url(/images/home-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
}
</style>
