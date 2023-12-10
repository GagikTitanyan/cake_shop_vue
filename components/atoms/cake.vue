<template>
  <div class="cake">
    <img :src="image">
    <div>{{ name }}</div>
    <div>{{ price }}</div>
    <custom-button variant="pink-button" @click="$emit('addOrder')">
        Add to Card
    </custom-button>
  </div>
</template>

<script setup>
import customButton from '~/components/atoms/custom-button.vue'
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    }
})
</script>

<style lang="scss" scoped>
.cake {
    background: #EDEDED;
    border-radius: 45px;
    display: flex;
    padding: 30px 20px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    img {
        width: 70%;
        margin: auto;
    }
}
</style>
