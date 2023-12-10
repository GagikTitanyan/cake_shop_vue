<template>
    <div class="cake-details">
        <div class="titles">
            <div class="name-container">
                <div class="purple-title">{{ name }}</div>
                <div class="icons">
                    <img src="/images/bag.png" class="icon">
                    <img src="/images/favourite.png" class="icon">
                </div>
            </div>
            <div class="rate-circles">
                <div v-for="(el, index) of new Array(5)" :key="index" :class="index + 1 <= rate ? 'active-circle' : 'disabled-circle'" />
            </div>
            <div class="purple-title">
                {{ price }}
            </div>
        </div>
        <div class="inputs">
            <div v-for="(name, index) of inputs" :key="index" class="checkbox-container">
                <input type="checkbox">
                <label class="label">{{ name }}</label>
            </div>
        </div>
        <ul class="details-ul">
            <li v-for="(text, index) of about" :key="index" class="detail">{{ text.text }}</li>
        </ul>
        <div class="buttons">
            <custom-button variant="pink-button" class="pay-btn" @click="$emit('addOrder')">Add to Card</custom-button>
            <custom-button variant="pink-bold-button" class="pay-btn" @click="$router.push('/payment')">Buy now</custom-button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    inputs: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    about: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.cake-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
}

.titles {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.pay-btn {
    font-size: 20px;
}

.name-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.checkbox-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.label {
    font-size: 24px;
}

.circle {
    height: 25px;
    width: 25px;
    border-radius: 50px;
}

.details-ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
        letter-spacing: 0.4px;
    }
}

.icons {
    display: flex;
    align-items: center;
    gap: 10px;
}
.active-circle {
    background: #FFB4E1;
}

.detail {
    list-style-type: disc;
    list-style-position: inside;
    font-size: 24px;
}
.inputs {
    display: flex;
    align-items: center;
    gap: 10px;
    div {
        input {
            background: transparent;
            border: 4px solid #920057;
        }
    }
}
.disabled-circle {
    background: #CBCBCB;
}
.rate-circles {
    display: flex;
    align-items: center;
    gap: 3px;
    div {
        height: 15px;
        width: 15px;
        border-radius: 30px;
    }
}

.buttons {
    display: flex;
    align-items: center;
    gap: 40px;
}

</style>