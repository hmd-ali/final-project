<script setup lang="ts">
    import MobileNav from './MobileNav.vue';
    import { ref, watchEffect } from 'vue'
    import { useCartStore } from '@/stores/cart';
    import { storeToRefs } from 'pinia'

    const cartStore = useCartStore()
    const { isToggled } = storeToRefs(cartStore)

    const handleClick = () => {
        isToggled.value ? cartStore.closeCartModal() : cartStore.openCartModal()
    }

    const isNavToggled = ref(false)
    watchEffect(() => {
        isNavToggled.value ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
    })
</script>

<template>
    <div class="header" :class="!isNavToggled ? 'bg-white border-primary' : 'bg-primary border-white'">
        <div class="header-logo"  :class="isNavToggled ? 'text-white' : 'text-primary'">
            <span>
                snkrs.
            </span>
        </div>
        <nav class="navigation">
            <router-link :to="({name: 'home'})" class="navigation-link">
                home
            </router-link>
            <router-link :to="({name: 'products'})" class="navigation-link">
                our shoes
            </router-link>
            <router-link :to="({name: 'about'})" class="navigation-link">
                sustainability
            </router-link>
            <router-link :to="({name: 'contact'})" class="navigation-link">
                contact
            </router-link>
        </nav>
        <button @click="isNavToggled = !isNavToggled" class="navigation-toggle">
            <Icon icon="bars" class="navigation-toggle-btn" :class="isNavToggled ? 'text-white' : 'text-primary'" />
        </button>
        <button class="absolute top-1/2 right-2 -translate-y-1/2" @click="handleClick">
            <Icon icon="shopping-cart" />
        </button>
    </div>
    <MobileNav v-model="isNavToggled" />
</template>

<style scoped>
    .header {
        @apply fixed top-0 left-0 w-full flex items-center justify-between px-3 py-2 z-50 border-b transition-all duration-200 pr-10;;
        @apply xl:px-20
    }
    .header-logo {
        @apply order-2 xl:order-1
    }
    .header-logo span {
        @apply font-Fredericko text-xl uppercase
    }
    .navigation {
        @apply relative hidden;
        @apply xl:flex xl:items-center xl:order-2
    }
    .navigation-toggle {
        @apply order-1;
        @apply xl:hidden
    }
    .navigation-toggle-btn {
        @apply text-xl
    }
    .navigation-link {
        @apply text-sm font-light font-NeueMachina text-primary uppercase mx-4 first:ml-0 last:mr-0
    }
    a.router-link-exact-active {
        @apply text-accent
    }
</style>