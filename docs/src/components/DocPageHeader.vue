<template>
  <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">{{ title }}
            <sui-header-subheader>
              {{ sub }}
            </sui-header-subheader>
          </sui-header>

          <sui-divider hidden />

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
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'DocPageHeader',
  props: {
    title: String,
    sub: String
  }
})
</script>