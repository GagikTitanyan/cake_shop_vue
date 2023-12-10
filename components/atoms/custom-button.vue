<template>
    <button :class="variant" class="custom-button">
        <slot />
    </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.custom-button {
  border-radius: 45px;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  &:hover {
    opacity: .7;
  }
}
.pink-button {
  background: #FFB4E1;
}

.pink-bold-button {
  background: #FF6FC5;
}

.pink-bold-button-borders {
  background: transparent !important;
  border: 1px solid #FF6FC5;
}


.pink-bold-button-borders-white {
  background: #FFFFFF;
  border-left: 1px solid #FF6FC5;
}
</style>
