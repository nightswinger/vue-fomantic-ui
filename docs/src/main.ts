import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import SuiVueNext from "semantic-ui-vue-next"
import 'semantic-ui-css/semantic.min.css'

import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-okaidia.css'

const app = createApp(App)

app.use(router)
app.use(SuiVueNext)

app.mount('#app')
