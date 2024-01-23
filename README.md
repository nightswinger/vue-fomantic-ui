# VueFomanticUI

[![npm version](https://badge.fury.io/js/vue-fomantic-ui.svg)](https://badge.fury.io/js/vue-fomantic-ui)

VueFomanticUI is a component library for Vue.js 3.0 that wraps [Fomantic-UI](https://fomantic-ui.com/).

## Documentation

To check out live examples and docs, see the [Documentation](https://nightswinger.github.io/vue-fomantic-ui/).

## Install

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

## Usage

You can import all components as Vue plugin.

```js
import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)
```

Or pick a component indivisually, add it to your `components` option.

```js
import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}
```
