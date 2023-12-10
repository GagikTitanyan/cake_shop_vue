<template>
    <div class="cake-bg">
        <div class="details">
            <img :src="cake.bigImage">
            <cake-details :about="cake.abouts" :inputs="cakeData.inputs" :name="cake.name" :price="cake.price" :rate="cake.rate" @add-order="addOrder(cake)" />
        </div>
        <div class="purple-title" style="margin-top: 70px;">
            Description
        </div>
        <div class="descriptions">
            <div v-for="(detail, index) of cake.descriptions" :key="index">{{ detail.text }}</div>
        </div>
    </div>
</template>

<script setup>
import cakeData from '~/data/cake.json'
import cakeDetails from '~/components/atoms/cake-details.vue'
import { useRoute } from 'vue-router'
import { useCake } from '~/composables/cakeStore'

const { addOrder } = useCake()

const route = useRoute()
const cake = ref({})

const { $api } = useNuxtApp()

onMounted(async () => {
    const { data } = await $api.post('/cake', { id: route.params.id })
    cake.value = data
})

</script>

<style lang="scss" scoped>
.details {
    display: flex;
    gap: 5%;
    img {
        min-width: 500px;
        max-width: 400px;
    }
}
.cake-bg {
    min-height: 1500px;
    background: url(/images/cake-bg.png);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    padding: 10% 7% 0;
}

.descriptions {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 60px;
    div {
        font-size: 24px;
    }
}

@media (max-width: 1216px) {
    .details {
        padding-top: 45vh;
        flex-direction: column;
        align-items: center;
        img {
            min-width: 400px;
            max-width: 400px;
        }
    }
    .descriptions {
        padding-bottom: 45vh;
    }
}
</style>
