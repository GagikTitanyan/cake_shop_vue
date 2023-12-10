<template>
    <div class="trolley-item">
        <div class="trolley-item-info">
            <img :src="image" style="width: 70px;">
            <div>
                <div class="title-pink-text">{{ name }} <span v-if="count">x{{ count }}</span></div>
                <div class="title-pink-text" style="font-weight: 600">{{ price }}դր.</div>
            </div>
        </div>
        <div class="trolley-item-actions">
            <Delete @click="removeOrder(index)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Delete from '~/public/svgs/delete.vue'
import { useCake } from '~/composables/cakeStore'

defineProps({
    index: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    count: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: true
    }
})

const { removeOrder } = useCake()
</script>

<style lang="scss" scoped>
.trolley-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    overflow: hidden;
    &-info {
        display: flex;
        align-items: center;
    }
    &-actions {
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
            cursor: pointer;
            transition: .2s;
            &:hover {
                opacity: .5;
            }
        }
    }
}
</style>
