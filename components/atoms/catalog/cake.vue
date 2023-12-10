<template>
  <div class="cake" @click="$router.push(`/cake/${index + 1}`)">
    <img :src="image">
    <div class="cake-details">
        <div>{{ name }}</div>
        <div>{{ price }}դր․</div>
    </div>      
  </div>
</template>

<script setup lang="ts">
defineProps({
    index: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.cake {
    cursor: pointer;
    &-details {
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        div {
            font-size: 24px;
        }
    }
    position: relative;
    img {
        transition: .3s;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    &:hover {
        img {
            opacity: 0.4;
        }
        .cake-details {
            opacity: 1;
        }
    }
}

@media (max-width: 1216px) {
    .cake {
        width: 100%;
        height: 250px;
    }
}

</style>