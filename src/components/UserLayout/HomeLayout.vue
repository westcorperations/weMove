<template>
    <div class="bg-slate-200">
<!-- Navbar component -->
<NavBarComponent />
<!-- Views -->
<RouterView />
<!-- FooterComponent -->
<FooterComponent />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBarComponent from '@/components/UserLayout/includes/NavBarComponent.vue'
import FooterComponent from '@/components/UserLayout/includes/FooterComponent.vue'

</script>

<style lang="scss" scoped>

</style>