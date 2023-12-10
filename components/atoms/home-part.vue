<template>
  <div class="home-part-container">
    <img src="/images/home.png">
    <div class="details">
        <img src="/images/sweet-house.png">
        <div class="sub-title">
          Lorem ipsum dolor sit amet consectetur. Lectus at diam consectetur iaculis.
        </div>
    </div>
    <div v-if="!isSmall" class="bottom-text sub-title">
        <div>
            Lorem ipsum dolor sit amet consectetur. Lectus at diam consectetur iaculis. Porta augue libero sociis porttitor diam. Sit suscipit vel in dignissim id. Vestibulum eget non tortor eget.Lorem ipsum dolor sit amet consectetur. Lectus at diam consectetur iaculis.
        </div>
        <div style="padding-left: 40px;">
            Porta augue libero sociis porttitor diam. Sit suscipit vel in dignissim id. Vestibulum eget non tortor eget.
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
.home-part-container {
    position: relative;
}

.sub-title {
    color: white;
    font-size: 24px;
    font-family: helvetica-light;
}

.details, .bottom-text {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}

.details {
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    img {
        width: 100%;
    }
}

.bottom-text {
    bottom: 10px;
    width: 80%;
}
</style>
