<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useSustainStore } from '@/stores/sustain';

    const { data } = storeToRefs(useSustainStore())
</script>

<template>
    <div class="relative w-full flex flex-col items-center pt-20 lg:pt-40">
        <div class="w-full relative flex flex-col items-center uppercase lg:text-4xl xl:text-5xl 2xl:text-6xl mb-20 text-3xl text-primary px-10">
            <h2 class="lg:translate-x-5">sustainability</h2>
            <h2 class="lg:-translate-x-12">recycled plastic</h2>
            <h2 class="lg:translate-x-24">bottles into</h2>
            <h2 class="text-accent">revolutionary</h2>
            <h2 class="text-accent lg:translate-x-6">footwear</h2>
        </div>
        <div class="relative w-full grid grid-cols-1 place-items-center lg:grid-cols-2 2xl:grid-cols-3 items-center gap-10 pt-20 px-10 bg-primary">
            <div class="relative w-full max-w-sm flex flex-col py-10 px-5 my-10 border border-accent rounded h-full" v-for="(card, index) in data" :key="index">
                <p class="text-accent text-sm">
                    {{ card.id }}
                </p>
                <p class="text-white uppercase text-base mt-2">
                    {{ card.title }}
                </p>
                <p class="text-xs text-white mt-6">
                    {{ card.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>