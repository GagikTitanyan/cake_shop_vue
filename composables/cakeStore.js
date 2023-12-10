import { createGlobalState } from "@vueuse/core";
import { ref } from 'vue'

export const useCake = createGlobalState(() => {
    const cakes = ref([])
    const orders = ref([])

    const getCakes = (responseCakes) => {
      cakes.value = responseCakes
    }

    const addOrder = (order) => {
      orders.value.push(order)
    }

    const removeOrder = (index) => {
      orders.value.splice(index, 1)
      console.log(index, orders.value)
    }

    return {
        cakes,
        orders,
        getCakes,
        addOrder,
        removeOrder
    }
})