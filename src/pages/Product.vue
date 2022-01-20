<script setup lang="ts">
    import { useRouter, useRoute } from 'vue-router'
    import { useProductsStore } from '@/stores/products';
    import { useCartStore } from '@/stores/cart';
    import { storeToRefs } from 'pinia';
    import { computed, onMounted, ref, Ref } from 'vue'

    const { products } = storeToRefs(useProductsStore())
    const cartStore = useCartStore()

    const route = useRoute()
    const router = useRouter()

    const product = computed(() => {
        return products.value.find(item => item.id == route.params.id)
    })

    const selectedColor: Ref<string> = ref('')
    const selectedSize: Ref<string> = ref('')

    onMounted(() => {
         color.value && (selectedColor.value = color.value)
         size.value && (selectedSize.value = size.value)
        console.log('mounted')
    })

    const data = computed(() => product.value)
    const color = computed(() => data.value?.colors.split(' ')[0])
    const size = computed(() => data.value?.sizes.split(' ')[0])

    const addToCart = (id: string, name: string, price: number, image: string): void => {
        cartStore.addItem({id: id,name: name, price: price, image: image})
    }
    

</script>

<template>
    <div class="relative w-full pt-10">
        <div v-if="product" class="relative w-full">
            <div class="relative w-full flex flex-col lg:flex-row">
                <div class="relative w-full">
                    <img :src="product.imgurl" alt="">
                </div>
                <div class="relative w-full py-8 px-5 bg-primary text-white divide-y-2 divide-accent divide">
                    <h2 class="text-xl">
                        {{ product.name }}
                    </h2>
                    <p class="mt-8 text-accent py-2">About the product:</p>
                    <ul class="relative w-full list-disc px-4 mt-2 py-4">
                        <li v-for="(desc, index) in product.detail.split('. ')" :key="index">
                            {{ desc }}
                        </li>
                    </ul>
                    <div class="relative w-full mt-8">
                        <label for="size">Size: </label>
                        <select name="size" id="size" class="relative mt-2 px-4 py-2 bg-primary rounded text-accent font-bold" v-model="selectedSize">
                            <option v-for="(size, index) in product.sizes.split(' ')" :key="index" :value="size">
                                {{ size }}
                            </option>
                        </select>
                    </div>
                    <div class="relative w-full mt-8">
                        <label for="color">Color:</label>
                        <select name="color" id="color" v-model="selectedColor" class="relative mt-2 px-4 py-2 bg-primary rounded text-accent font-bold">
                            <option v-for="(color, index) in product.colors.split(' ')" :value="color" :key="index">
                                <span>
                                    {{ color }}
                                </span>
                            </option>
                        </select>
                    </div>
                    <div class="relative w-full flex items-center justify-center mt-8 pt-8">
                        <button class="relative flex items-center px-4 py-2 rounded bg-white text-accent font-bold"
                            @click="product && (addToCart(product.id, product.name, product.price, product.imgurl))"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div v-else class="relative w-full flex flex-col items-center">
            <h2>
                Couldn't find the requested Page. 404
            </h2>
        </div>
    </div>
</template>