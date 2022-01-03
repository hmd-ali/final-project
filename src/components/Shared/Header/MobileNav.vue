<script setup lang="ts">

    import { computed } from 'vue'
    import { gsap } from 'gsap'

    interface Props {
        modelValue: boolean
    }

    const props = defineProps<Props>()

    const isToggled = computed({
        get(){
            return props.modelValue
        },
        set(){
            update()
        }
    })
    const emit = defineEmits(['update:modelValue'])

    const update = () => {
        emit('update:modelValue', false)
        console.log('clicked')
    }

    const beforeEnter = (el: Element) => {
        gsap.set(el, {
            y: '-100%',
        })
    }
    const enter = (el: Element, done: GSAPCallback) => {
        gsap.to(el, {
            y: 0,
            duration: .5,
            ease: 'Power1.in',
            onComplete: done
        })
    }
    const leave = (el: Element, done: GSAPCallback) => {
        gsap.to(el, {
            y: '-100%',
            duration: .5,
            ease: 'Power1.out',
            onComplete: done
        })
    }
</script>

<template>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
    >
        <nav v-if="isToggled" class="mobile-navigation">
            <router-link @click="update" :to="({name: 'home'})" class="navigation-link">
                home
            </router-link>
            <router-link @click="update" :to="({name: 'about'})" class="navigation-link">
                our shoes
            </router-link>
            <router-link @click="update" :to="({name: 'about'})" class="navigation-link">
                our story
            </router-link>
            <router-link @click="update" :to="({name: 'about'})" class="navigation-link">
                sustainability
            </router-link>
            <router-link @click="update" :to="({name: 'about'})" class="navigation-link">
                contact
            </router-link>
        </nav>
    </transition>
</template>

<style scoped>
    .mobile-navigation {
        @apply fixed bg-primary top-0 left-0 w-full h-screen flex flex-col px-10 pt-20 z-40
    }
    .mobile-navigation a {
        @apply text-3xl font-light text-white uppercase my-4 first:mt-0 last:mb-0
    }
    a.router-link-exact-active {
        @apply text-accent
    }
</style>