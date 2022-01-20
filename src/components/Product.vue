<script setup lang="ts">

    import { computed } from 'vue'

    export interface Props {
        id: string
        name: string
        price: number
        sizes: string
        colors: string
        details: string
        imgUrl: string
        category: string
    }

    const props = defineProps<Props>()

    const sizes = computed(() => {
        return props.sizes.split(' ')
    })
    const colors = computed(() => {
        return props.colors.split(' ')
    })
    const details = computed(() => {
        return props.details.split('. ')
    })


</script>

<template>
    <div class="relative flex flex-col items-center rounded border-2 px-4 py-2">
        <div class="relative w-full max-w-xs">
            <img :src="props.imgUrl" :alt="props.name" class="w-full">
        </div>
        <div class="relative w-full">
            <h3 class="relative text-sm">
                {{ props.name }}
            </h3>
            <span class="text-accent text-xl block mt-4">
                ${{ props.price }}
            </span>
            <router-link class="relative px-4 py-2 rounded bg-accent text-white mt-8 block w-max" :to="({name: 'product', params:{id: props.id}})">
                More Details
            </router-link>
            <!-- <button class="relative flex items-center justify-center px-4 py-2 rounded bg-accent text-white mt-4">
                Add to cart
            </button> -->
        </div>
    </div>
</template>