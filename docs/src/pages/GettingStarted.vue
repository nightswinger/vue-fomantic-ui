<template>
  <DocComponent
    title="Getting Started"
    description="Getting up and running with Fomantic-UI Vue"
  >
    <section :style="{paddingTop: '3rem'}">
      <SuiHeader as="h2">Install</SuiHeader>
      <p>
        Fomantic-UI Vue provides UI components based on Fomantic-UI.
      </p>

      <SuiHeader as="h3">via Package Manager</SuiHeader>

      <pre v-code-highlight><code>$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css</code></pre>
    </section>

    <section :style="{paddingTop: '3rem', marginBottom: '3rem'}">
      <SuiHeader as="h2">Usage</SuiHeader>
      <p>
        You can import all components as Vue plugin.
      </p>
      <pre v-code-highlight.script><code>import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)</code></pre>
      <br>
      <p>
        Or pick a component indivisually, add it to your components option.
      </p>
      <pre v-code-highlight.script><code>import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}</code></pre>
    </section>

  </DocComponent>
</template>

<script setup>
import DocComponent from "@/components/doc/DocComponent.vue"

import { vCodeHighlight } from '@/directives/vCodeHighlight'
</script>
