<template>
    <div class="categories">
        <Navbar />
        <Details :cakes="data" />
        <div v-if="cakes.length > 32" class="see-more-text" style="margin-top: 30px;" @click="all = !all">
            {{ seeMoreText }}
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCake } from '~/composables/cakeStore'
import Details from '~/components/molecules/catalog/details.vue'
import Navbar from '~/components/molecules/catalog/navbar.vue'

const { $api } = useNuxtApp()
const { getCakes, cakes } = useCake()

onMounted(async () => {
  const { data } = await $api.get('/cakes')
  getCakes(data)
})

const all = ref(false)

const seeMoreText = computed(() => {
    return all.value ? 'Hide' : 'See More'
})

const data = computed(() => {
    return cakes.value.slice(0, 32)
})

</script>

<style lang="scss" scoped>
.categories {
    background: url(/images/cake-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 10%;
    padding-bottom: 10%;
}

</style>
