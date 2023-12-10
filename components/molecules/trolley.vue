<template>
  <div ref="target" class="trolley">
    <div class="trolley-items">
      <div v-if="filteredData.length">
        <TrolleyItem v-for="(cake, index) of filteredData" :count="elementsCount[cake.name]" :key="index" :image="cake.image" :index="index" :name="cake.name" :price="cake.price" />
      </div>
      <div v-else>
        Bag was Empty..
      </div>
    </div>
    <div class="total">
      <div>Total</div>
      <div>{{ total }}դր․</div>
    </div>
    <CustomButton variant="pink-bold-button" @click="$emit('closeTrolley')">
      <NuxtLink to="/payment" class="pay-button">
        Pay
      </NuxtLink>
    </CustomButton>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import TrolleyItem from '~/components/atoms/trolley-item.vue';
import CustomButton from '~/components/atoms/custom-button.vue';
import { useCake } from '~/composables/cakeStore';

const { orders } = useCake()
const target = ref(null)
const emit = defineEmits(['closeTrolley'])

onClickOutside(target, event => emit('closeTrolley'))

const elementsCount = computed(() => {
  const counts = {}
  for (let i = 0; i < orders.value.length; i++) {
    if (counts[orders.value[i].name]) {
      counts[orders.value[i].name] = counts[orders.value[i].name] + 1
    } else {
      counts[orders.value[i].name] = 1
    }
  }
  return counts
})

const filteredData = computed(() => {
  const uniqueNamesArray = Array.from(new Set(orders.value.map(item => item.name)));

  return orders.value.filter(item => {
    if (uniqueNamesArray.includes(item.name)) {
        uniqueNamesArray.splice(uniqueNamesArray.indexOf(item.name), 1);
        return true;
    }
    return false;
});
})

const total = computed(() => {
  let Sum = 0
  for (let i = 0; i < orders.value.length; i++) {
    Sum += orders.value[i].price 
  }
  return Sum
})
</script>

<style lang="scss" scoped>
.total {
  border-top: 1px solid #920057;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
}

.pay-button {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trolley {
  position: fixed;
  top: 120px;
  right: 70px;
  padding: 20px;
  width: 400px;
  z-index: 10000;
  background: #FFE4F4;
  display: flex;
  flex-direction: column;
  gap: 15px;
  &-items {
    max-height: 200px;
    overflow-y: auto;
  }
}


</style>
