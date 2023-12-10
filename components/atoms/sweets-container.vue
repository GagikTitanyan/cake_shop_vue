<template>
    <div class="sweets-container">
        <img :src="image" style="width: 98%">
        <div class="name" :class="direction === 'left' ? 'left-name' : 'right-name'">
            {{ name }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: false,
        default: 'left'
    }
})
</script>

<style lang="scss" scoped>
.sweets-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    cursor: pointer;
    transition: .2s;
    &:hover {
        opacity: .8;
    }
}
.name {
    position: absolute;
    top: 5px;
    color: #920057;
    font-size: 48px;
    font-family: helvetica-light;
    font-weight: 600;
}
.left-name {
    left: 20px;
}
.right-name {
    right: 50px;
}
</style>
