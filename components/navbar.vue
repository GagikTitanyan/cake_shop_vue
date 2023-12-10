<template>
  <div class="navbar">
    <NuxtLink to="/">
      <img src="/images/logo.png" style="width: 120px; height: 70px;">
    </NuxtLink>
    <div v-if="!isSmall" class="navigation">
      <div class="nav-items">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/categories">Categories</NuxtLink>
        <NuxtLink to="/payment">Payment</NuxtLink>
      </div>
      <div class="icons">
        <img src="/images/bag.png" @click="$emit('openTrolley')">
        <img src="/images/favourite.png">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBreakpoints } from '@vueuse/core'
import { BreakPoint } from '~/models/break-points'

const breakpoints = useBreakpoints(BreakPoint)

const isSmall = computed(() => breakpoints.smaller('md').value)
</script>

<style lang="scss" scoped>
.navbar {
    z-index: 20;
    height: 120px;
    background: #FFFFFF80;
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
}

.nav-items {
  display: flex;
  gap: 30px;
  a {
    text-decoration: none;
    font-size: 22px;
    transition: .3s;
    color: #920057;
    &:hover {
      opacity: 0.8;
      color:rgb(202, 62, 146);
    }
  }
}


.icons {
  display: flex;
  gap: 15px;
  img {
    cursor: pointer;
    transition: .2s;
    &:hover {
      opacity: .5;
    }
  }
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  padding-right: 45px;
  gap: 10%;
}
</style>
