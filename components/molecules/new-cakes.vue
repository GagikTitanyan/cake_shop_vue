<template>
  <div class="new-cakes-container">
    <div class="title">
      New Cakes
    </div>
    <o-carousel 
    v-model="selected"
    icon-pack="fa"
    :indicator="false"
    :arrow="true"
    :itemsToShow="itemsToShow"
    :itemsToList="4"
    :repeat="true"
    :hasDrag="true"
    :hasGrayscale="false"
    :hasOpacity="false">
        <o-carousel-item v-for="(cake, index) of cakes" :key="index">
            <cake :image="cake.image" :name="cake.name" :price="cake.price" @add-order="addOrder(cake)" />
        </o-carousel-item>
    </o-carousel>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import cake from '~/components/atoms/cake.vue'
import { useCake } from '~/composables/cakeStore';
import { useBreakpoints } from '@vueuse/core'
import { BreakPoint } from '~/models/break-points'

const breakpoints = useBreakpoints(BreakPoint)

const selected = ref(0)

const isSmall = computed(() => breakpoints.smaller('md').value)

const { cakes, addOrder } = useCake() 

const itemsToShow = computed(() => {
  return !isSmall.value ? 4 : 2
})

</script>

<style lang="scss" scoped>
:deep(.o-car__items) {
 overflow: visible;
 .o-car__item {
  padding: 10px;
 }
}

.new-cakes-container {
  padding: 7%;
}

</style>
