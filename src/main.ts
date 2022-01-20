import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/router'

import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faBars,
    faFacebookF,
    faInstagram,
    faShoppingCart
)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon', FontAwesomeIcon)
app.mount('#app')
