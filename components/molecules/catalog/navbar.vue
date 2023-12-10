<template>
  <div class="catalog-filter">
    <CustomButton
        v-for="(item, index) of CatalogNav"
        :key="index" :variant="!item ? 'pink-button' : 'pink-bold-button-borders-white'"
        class="catalog-filter-button"
        :class="[index === 1 ? 'second-button' : '', index && 'filter-bttns']"
      >
      <img v-if="!item" src="/images/filter.png">
        {{ item }}
    </CustomButton> 
  </div>
</template>

<script setup>
import CustomButton from '~/components/atoms/custom-button.vue'
import CatalogNav from '~/data/catalog-nav.json'

</script>

<style lang="scss" scoped>
.second-button {
  right: 25px;
}

.catalog-filter {
    margin-top: 45vh;
    display: flex;
    border: 1px solid #FF6FC5;
    border-radius: 45px;
    background: #FFFFFF;
    button {
        position: relative;
        &:hover {
            opacity: 1 !important;
        }
    }
}

@media (max-width: 768px) {
  .filter-bttns {
    right: 25px;
  }
}

</style>
