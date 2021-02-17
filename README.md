# Install

You need [Vue.js](https://v3.vuejs.org/) **version 3.0+**.

```bash
# npm
npm install vue-fomantic-ui
npm install fomantic-ui-css
```

```bash
# yarn
yarn add vue-fomantic-ui
yarn add fomantic-ui-css
```

# Usage

```js
import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)
```