<template>
  <div>
    <sui-segment vertical>
      <sui-container>
      <div class="intro">
        <sui-header as="h1">Getting Started
        <sui-header-subheader>Getting up and running with Fomantic-UI Vue</sui-header-subheader>
        </sui-header>

        <sui-divider hidden></sui-divider>

        <sui-menu floated="right">
        <sui-menu-item as="a" icon>
            <sui-icon name="edit"></sui-icon>
        </sui-menu-item>
        <sui-menu-item as="a" icon>
            <sui-icon name="github"></sui-icon>
        </sui-menu-item>
        </sui-menu>
      </div>
      </sui-container>
    </sui-segment>

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
    </sui-container>
  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import Prism from 'vue-prism-component'

export default defineComponent({
  name: 'GettingStarted',
  components: { Prism }
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