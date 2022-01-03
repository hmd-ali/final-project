import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/router'

import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faBars,
)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon', FontAwesomeIcon)
app.mount('#app')
