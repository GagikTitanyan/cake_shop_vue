<template>
    <div class="catalog-cakes">
        <Cake v-for="(cake, index) of cakes" :key="index" :index="index" :name="cake.name" :image="cake.image" :price="cake.price" />
    </div>
</template>

<script setup>
import Cake from '~/components/atoms/catalog/cake.vue'

defineProps({
    cakes: {
        type: Array,
        required: true
    }
})

</script>

<style lang="scss" scoped>
.catalog-cakes {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-auto-rows: 200px 200px 200px 200px;
}

@media (max-width: 1216px) {
    .catalog-cakes {
        display: flex;
        flex-wrap: wrap;
    }
}

</style>