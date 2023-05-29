import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

library.add(faHatWizard, faArrowRight)

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
