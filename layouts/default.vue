<template>
    <div>
        <navbar @open-trolley="openTrolley"/>
        <Trolley v-if="trolley" @close-trolley="trolley = false" :trolley="true" />
        <slot />
        <cake-footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import navbar from '~/components/navbar.vue'
import cakeFooter from '~/components/footer.vue'
import Trolley from '~/components/molecules/trolley.vue';
import { useRoute } from 'vue-router'

const trolley = ref(false)
const route = useRoute()

const openTrolley = () => {
    if (route.path !== '/payment') {
        trolley.value = !trolley.value
    }
}

</script>

<style lang="scss" scoped>
.nav {
    position: relative;
}
</style>
