<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useCartStore } from '@/stores/cart';

    const cartStore = useCartStore()
    const { items, isToggled } = storeToRefs(cartStore)
</script>

<template>
    <div class="fixed w-full min-h-screen top-0 left-0 z-40 py-12 px-4 bg-white text-primary" v-if="isToggled">
        <div class="relative w-full flex flex-col items-center" v-if="items.length > 0">
            <div class="relative w-full flex flex-col">
                <div v-for="(item, index) in items" :key="index" class="relative flex items-center w-full mb-8 last:mb-0">
                    <div class="relative mr-2">
                        <img :src="item.image" alt="" class="w-20 h-20 object-cover">
                    </div>
                    <div class="relative w-full flex items-center">
                        <p class="text-xs text-primary">
                            {{ item.name }}
                        </p>
                        <p>
                            ${{ item.price }}
                        </p>
                        <button class="relative flex flex-col items-center justify-center p-2 text-accent text-2xl"
                            @click="cartStore.removeItem(item.id)"
                        >
                            x
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full flex flex-col h-full justify-center items-center" v-else>
            <p class="text-black text-xl text-center text-opacity-60">
                Your cart is empty
            </p>
            <button class="relative flex items-center justify-center px-4 py-2 rounded bg-black text-accent"
                @click="cartStore.closeCartModal()"
            >
                continue shopping
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>