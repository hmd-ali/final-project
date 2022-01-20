<script setup lang="ts">
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/all';
    gsap.registerPlugin(ScrollTrigger)
    import { onMounted } from 'vue';

    onMounted(() => {
        gsap.fromTo('#hero-header-1', {
            x: -20,
            ease: 'Power2.in',
            repeat: -1,
            yoyo: true,
            duration: 5,
        }, {
            x: 20,
            duration: 5,
            repeat: -1,
            yoyo: true,
            yoyoEase: 'Power2.in'
        })
        gsap.fromTo('#hero-header-2', {
            x: 20,
            ease: 'Power2.in',
            repeat: -1,
            yoyo: true,
            duration: 5,
        }, {
            x: -20,
            duration: 5,
            repeat: -1,
            yoyo: true,
            yoyoEase: 'Power2.in'
        })
        gsap.fromTo('#hero-header-3', {
            x: -30,
            ease: 'Power2.in',
            repeat: -1,
            yoyo: true,
            duration: 7,
        }, {
            x: 15,
            duration: 7,
            repeat: -1,
            yoyo: true,
            yoyoEase: 'Power2.in'
        })
        gsap.fromTo('#hero-header-4', {
            x: 40,
            ease: 'Power2.in',
            repeat: -1,
            yoyo: true,
            duration: 5,
        }, {
            x: 0,
            duration: 5,
            repeat: -1,
            yoyo: true,
            yoyoEase: 'Power2.in'
        })
        gsap.to('#hero-image', {
            rotate: '30deg',
            scale: .4,
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'top -30%',
                scrub: true
            }   
        })
        gsap.fromTo('#trigger', {
            y: 200,
            scale: .7,
        },{
            y: 0,
            scale:1,
            scrollTrigger: {
                trigger: '#first-img-trigger',
                start: 'top bottom',
                end: 'top center',
                scrub: true
            }
        })
    })
    
</script>

<template>
    <section class="home">
        <div class="hero" id="hero">
            <div class="hero-image-container">
                <div class="hero-image">
                    <img id="hero-image" src="@/assets/images/hero/lava-black-side_720x.webp" alt="">
                </div>
            </div>
            <div class="xl:w-full flex flex-col xl:ml-10">
                <div class="hero-header">
                    <h1 id="hero-header-1">
                        the new
                    </h1>
                    <h1 id="hero-header-2" class="hero-text-accent">
                        alchemy
                    </h1>
                    <h1 id="hero-header-3">
                        sneaker
                    </h1>
                    <h1 id="hero-header-4">
                        collection
                    </h1>
                </div>
                <div class="hero-description">
                    <span>The Alchemy Collection continues to push the limits of our 3D printing and knitting powers, introducing flex-wear technology for the next step in confort and durability.</span>
                </div>
            </div>
        </div>
        <div class="content" id="content">
            <div id="first-img-trigger" class="content-container">
                <div id="trigger" class="content-container-image">
                    <img id="first-img" src="@/assets/images/hero/fullwidth_01_1284x.webp" alt="">
                </div>
                <div class="content-text">
                    <h2>
                        Not Afraid
                    </h2>
                    <p>
                        Revolutionizing the way sneakers are made while helping to take on climate change – not easy. See how we got started and why we're not afraid to keep changing the world.
                    </p>
                    <button>
                        <span>
                            <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-604.000000, -599.000000)">
                                        <g transform="translate(580.000000, 587.000000)">
                                            <g transform="translate(24.000000, 12.000000)">
                                                <g class="stroke">
                                                    <g>
                                                        <g transform="translate(9.473684, 0.000000)">
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                        </g>
                                                        <g transform="translate(10.187970, 10.285714) rotate(90.000000) translate(-10.187970, -10.285714) translate(9.187970, 0.285714)">
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                                <circle class="fill" cx="10.0789475" cy="10.0789475" r="1.0789475"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span>
                            our story
                        </span>
                    </button>
                </div>
            </div>
            <div class="info-container">
                <div class="info-container-image">
                    <img src="@/assets/images/hero/Home_big_01_500x.webp" alt="">
                </div>
                <div class="info-text">
                    <h2>
                        STEP INTO THE <br/>SPOTLIGHT
                    </h2>
                    <p>
                        Designed to do what others can’t, SNKRS sneakers meld forward-thinking, sustainability, and bold style so that you can make a statement with every step.
                    </p>
                    <button>
                        <span class="icon">
                            <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-604.000000, -599.000000)">
                                        <g transform="translate(580.000000, 587.000000)">
                                            <g transform="translate(24.000000, 12.000000)">
                                                <g class="stroke">
                                                    <g>
                                                        <g transform="translate(9.473684, 0.000000)">
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                        </g>
                                                        <g transform="translate(10.187970, 10.285714) rotate(90.000000) translate(-10.187970, -10.285714) translate(9.187970, 0.285714)">
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                                <circle class="fill" cx="10.0789475" cy="10.0789475" r="1.0789475"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span>
                            Find Your Style
                        </span>
                    </button>
                </div>
            </div>
            <div class="info-container">
                <div class="info-container-image">
                    <img src="@/assets/images/hero/Image02_46f4bac1-d31c-4d29-acf5-55f51e02e809_500x.webp" alt="">
                </div>
                <div class="info-text">
                    <h2>
                        WEAR THE FUTURE
                    </h2>
                    <p>
                        SNKRS sneakers are unlike any shoe you’ve seen before. Never mass-produced, each pair is 3D printed into existence when you place your order, combining innovative design with cutting-edge technology to take the next step in sustainable fashion.
                    </p>
                    <button>
                        <span class="icon">
                            <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-604.000000, -599.000000)">
                                        <g transform="translate(580.000000, 587.000000)">
                                            <g transform="translate(24.000000, 12.000000)">
                                                <g class="stroke">
                                                    <g>
                                                        <g transform="translate(9.473684, 0.000000)">
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                        </g>
                                                        <g transform="translate(10.187970, 10.285714) rotate(90.000000) translate(-10.187970, -10.285714) translate(9.187970, 0.285714)">
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                                <circle class="fill" cx="10.0789475" cy="10.0789475" r="1.0789475"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span>
                            See Our Tech
                        </span>
                    </button>
                </div>
            </div>
            <div class="info-container">
                <div class="info-container-image">
                    <img src="@/assets/images/hero/Image03_720c3910-494b-4ed5-b135-2d355c780859_500x.webp" alt="">
                </div>
                <div class="info-text">
                    <h2>
                        STAND FOR <br>SUSTAINABILITY
                    </h2>
                    <p>
                        We turn trash into prized possessions that you can wear and then recycle. Our sneakers help the Earth heal and put you in control of what you stand on, stand in, and stand for.
                    </p>
                    <button class="group">
                        <span class="icon">
                            <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-604.000000, -599.000000)">
                                        <g transform="translate(580.000000, 587.000000)">
                                            <g transform="translate(24.000000, 12.000000)">
                                                <g class="stroke">
                                                    <g>
                                                        <g transform="translate(9.473684, 0.000000)">
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                        </g>
                                                        <g transform="translate(10.187970, 10.285714) rotate(90.000000) translate(-10.187970, -10.285714) translate(9.187970, 0.285714)">
                                                            <path d="M0.714285714,5.26315789 L0.714285714,4.78710638e-13"></path>
                                                            <path d="M0.714285714,20 L0.714285714,14.7368421"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                                <circle class="fill" cx="10.0789475" cy="10.0789475" r="1.0789475"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span>
                            Stand With Us
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .home {
        @apply relative w-full
    }
    .hero {
        @apply relative w-full pt-14 pb-36;
        @apply md:flex justify-center md:pt-36 md:pb-12;
        @apply xl:min-h-screen
    }
    .hero-header {
        @apply relative w-full flex items-center flex-col after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-60 after:h-px after:bg-primary after:bg-opacity-50;
        @apply xl:items-start xl:px-8
    }
    .hero-header h1 {
        @apply font-Poppins text-primary text-4xl uppercase transition-all;
        @apply xl:text-7xl
    }
    .hero-header h1.hero-text-accent {
        @apply text-accent ml-4
    }
    .hero-description {
        @apply relative w-full px-4 mt-12 flex flex-col items-center;
        @apply xl:items-start xl:px-10 xl:text-xl
    }
    .hero-description span {
        @apply block text-primary text-opacity-60 w-72 leading-5
    }
    .hero-image-container {
        @apply relative w-full flex flex-col items-center pb-20 px-6 overflow-x-hidden;
        @apply lg:p-40 lg:pt-0
    }
    .hero-image {
        @apply relative w-full aspect-square rounded-full bg-texture bg-cover flex items-center justify-center;
    }
    .hero-image img {
        @apply -rotate-[30deg] w-full
    }
    .content {
        @apply relative w-full flex flex-col items-center
    }
    .stroke {
        @apply stroke-white transition-all duration-300 
    }
    .fill {
        @apply fill-white transition-all duration-300 
    }
    .content-container {
        @apply relative w-full flex flex-col items-center bg-primary pb-20 xl:pb-32
    }
    .content-container .content-container-image {
        @apply -mt-20 w-full px-10
    }
    .content-container .content-container-image img {
        @apply w-full
    }
    .content-container .content-text {
        @apply relative w-full flex flex-col items-center mt-20 px-6
    }
    .content-container .content-text h2 {
        @apply text-white text-4xl uppercase
    }
    .content-container .content-text p {
        @apply text-white text-sm mt-8 text-center
    }
    .content-container .content-text button {
        @apply text-white border border-transparent flex items-center px-6 py-2 bg-accent mt-8 rounded-full transition-all duration-300
    }
    .content-container .content-text button:hover {
        @apply border border-accent bg-white
    }
    .content-container .content-text button:hover span{
        @apply text-primary first:rotate-[2turn] transition-all duration-300 
    }
    .content-container .content-text button:hover span .fill{
        @apply fill-primary
    }
    .content-container .content-text button:hover span .stroke{
        @apply stroke-primary
    }
    .content-container .content-text button span {
        @apply first:mr-2 capitalize
    }
    .info-container {
        @apply relative w-full flex flex-col items-center bg-white pb-20 xl:flex-row-reverse xl:odd:flex-row
    }
    .info-container-image {
        @apply -mt-8 w-full px-10;
    }
    .info-text {
        @apply relative w-full flex flex-col mt-8 px-14
    }
    .info-text h2 {
        @apply text-primary text-xl mb-4
    }
    .info-text p {
        @apply text-primary text-sm text-opacity-70
    }
    .info-text button {
        @apply text-primary w-max mx-auto flex items-center px-6 py-2 border border-accent mt-8 rounded-full hover:bg-accent transition-all duration-300 
    }
    .info-text button span {
        @apply first:mr-4 text-primary capitalize text-sm transition-all duration-300 
    }
    .info-text button:hover span {
        @apply text-white first:rotate-[2turn]
    }
    .info-text button span .fill {
        @apply fill-primary transition-all duration-300 
    }
    .info-text button:hover span .fill {
        @apply fill-white
    }
    .info-text button span .stroke {
        @apply stroke-primary transition-all duration-300 
    }
    .info-text button:hover span .stroke {
        @apply stroke-white
    }

</style>