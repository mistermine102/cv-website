import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Tres from '@tresjs/core'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(Tres)
app.mount('#app')
