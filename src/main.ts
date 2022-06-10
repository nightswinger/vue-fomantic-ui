import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from './index'

const app = createApp(App)
app.use(FomanticUI)
app.mount('#app')
