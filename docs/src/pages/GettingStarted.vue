<template>
  <div>
    <doc-page-header
      title="Getting Started"
      sub="Getting up and running with Fomantic-UI Vue"
    />

    <sui-container class="main">
      <sui-header as="h2">Install</sui-header>
      <p>
        Fomantic-UI Vue provides UI components based on Fomantic-UI.
      </p>
      <sui-header as="h3">via Package Manager</sui-header>
      <prism language="bash">
        {{
`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`
        }}
      </prism>
      <sui-header as="h2">Usage</sui-header>
      <p>
        You can import all components as Vue plugin.
      </p>
      <prism language="js">
        {{
`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`
        }}
      </prism>
      <br>
      <p>
        Or pick a component indivisually, add it to your components option.
      </p>
      <prism language="js">
        {{
`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`
        }}
      </prism>
    </sui-container>
  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import Prism from 'vue-prism-component'
import DocPageHeader from "../components/DocPageHeader.vue";

export default defineComponent({
  name: 'GettingStarted',
  components: { Prism, DocPageHeader }
})
</script>

<style scoped>
.intro:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.main {
  padding: 2rem 0rem 7rem;
}
</style>