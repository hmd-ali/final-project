<script setup lang="ts">

</script>

<template>
    <div class="footer">
        <div class="footer-contact">
            <h3 class="footer-contact-header">
                get in touch
            </h3>
            <div class="footer-contact-link">
                <a href="#">info@snkrs.com</a>
                <p>01-123-456</p>
            </div>
            <div class="footer-contact-address">
                <p>2072 Brodhead Road Aliquippa, PA 15001</p>
            </div>
            <div class="social-links">
                <Icon class="social-link" :icon="['fab','facebook-f']" />
                <Icon class="social-link" :icon="['fab','instagram']" />
            </div>
        </div>
        <div class="footer-subscribe">
            <p>
                Get the latest on new drops, deals, and other SNKRS developments sent straight to your inbox.
            </p>
            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="name@email.com">
                <button>
                    Sign up
                </button>
            </div>
        </div>
        <div class="footer-legal">
            &copy; 2022 by SNKRS Brands. All rights reserved.
        </div>
        <div class="footer-policies">
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        @apply relative w-full bg-primary text-white px-5 pt-14 pb-9;
        @apply sm:px-10;
        @apply lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8
    }
    .footer-contact {
        @apply relative w-full pr-14 order-1;
    }
    .footer-contact-header {
        @apply text-accent uppercase text-xs font-medium
    }
    .footer-contact-link {
        @apply relative w-full mt-7
    }
    .footer-contact-link a {
        @apply underline text-xl
    }
    .footer-contact-link p {
        @apply underline text-xl
    }
    .footer-contact-address {
        @apply text-xs mt-4
    }
    .social-links {
        @apply absolute top-2 right-0 flex flex-col
    }
    .social-link {
        @apply w-8 h-8 rounded-full flex flex-col items-center justify-center bg-white text-primary p-2 mb-2 last:mb-0
    }
    .footer-subscribe {
        @apply relative w-full mt-9 order-2
    }
    .footer-subscribe p {
        @apply text-lg
    }
    .footer-subscribe .form-group {
        @apply mt-2 relative w-full flex items-center border-b-2 border-white
    }
    .footer-subscribe .form-group input {
        @apply relative w-full p-2 pl-0 bg-transparent outline-none
    }
    .footer-subscribe .form-group button {
        @apply w-24
    }
    .footer-policies {
        @apply mt-5 relative w-full flex items-center justify-between order-4
    }
    .footer-legal {
        @apply mt-5 relative w-full order-3 text-sm
    }

</style>