<template>
    <div class="footer-container">
        <img src="/images/logo.png" class="logo">
        <div class="info">
            <div class="description-text">NDSM-Plein 1, 1033 WC Armenia</div>
            <div class="description-text">+374 99969696</div>
        </div>
        <div class="line" />
        <div class="gray-text">2023. All rights reserved</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {
    width: 120px;
}

.footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFD2ED;
    padding: 3% 7%;
    min-height: 250px;
    gap: 20px;
}

.info {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.line {
    background: #FF80CC;
    height: 1px;
    width: 100%;
}
</style>
