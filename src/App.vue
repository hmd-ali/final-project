<script setup lang="ts">
  import Header from '@/components/Shared/Header/Header.vue'
  import Footer from '@/components/Shared/Footer/Footer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>
  .app {
    @apply relative w-full
  }
</style>