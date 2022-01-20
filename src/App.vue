<script setup lang="ts">
  import Header from '@/components/Shared/Header/Header.vue'
  import Footer from '@/components/Shared/Footer/Footer.vue'
  import Cart from './components/Cart.vue';

  import { storeToRefs } from 'pinia';
  import { useProductsStore } from '@/stores/products'
  import { onMounted } from 'vue'

  const productsStore = useProductsStore()
  const { products } = storeToRefs(productsStore)

  onMounted(() => {
    productsStore.fetchAllProducts()
  })

  const click = () => {
    productsStore.fetchAllProducts()
  }

</script>

<template>
  <div class="app">
    <Header />
    <!-- <div class="p-40  ">
      <button @click="click" >
        click
      </button>
    </div> -->
    <router-view />
    <Cart />
    <Footer />
  </div>
</template>

<style scoped>
  .app {
    @apply relative w-full
  }
</style>