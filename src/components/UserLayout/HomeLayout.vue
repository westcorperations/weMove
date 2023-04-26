<template>
    <div class="bg-gray-100">
<!-- Navbar component -->
<NavBarComponent />
<!-- Views -->
<router-view />
<!-- FooterComponent -->
<FooterComponent />
    </div>
</template>

<script setup>

import NavBarComponent from '@/components/UserLayout/includes/NavBarComponent.vue'
import FooterComponent from '@/components/UserLayout/includes/FooterComponent.vue'

</script>

<style lang="scss" scoped>

</style>