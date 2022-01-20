<script setup lang="ts">

    import Product from '@/components/Product.vue'
    import { useProductsStore } from '@/stores/products'
    import { storeToRefs } from 'pinia'

    const productsStore = useProductsStore()
    const { products } = storeToRefs(productsStore)
</script>

<template>
    <div class="realtive w-full pt-40">
        <div class="realtive w-full flex flex-col items-center text-3xl uppercase translate-x-4 font-bold">
            <span>our shoes</span>
            <span class="-translate-x-5 text-accent">find your</span>
            <span class="translate-x-5">style</span>
        </div>
        <div class="relative w-full grid grid-cols-1 px-10 gap-y-4 mt-8 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <Product 
                v-for="product in products"
                :id="product.id.toString()"
                :name="product.name"
                :price="product.price"
                :colors="product.colors"
                :sizes="product.sizes"
                :details="product.detail"
                :imgUrl="product.imgurl"
                :category="product.category"
            />
        </div>
    </div>
</template>