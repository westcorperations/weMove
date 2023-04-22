<template>
    <div>
<HeaderComponent />
<router-view />
<FooterComponent />
    </div>
</template>

<script setup>

import HeaderComponent from '@/components/UserLayout/includes/HeaderComponent.vue'
import FooterComponent from '@/components/UserLayout/includes/FooterComponent.vue'

</script>

<style lang="scss" scoped>

</style>