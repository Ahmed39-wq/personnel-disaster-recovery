import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Button from './components/Button.vue'

const app = createApp(App)
app.component(
    'Button', Button
)

app.use(createPinia())

app.mount('#app')
