<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Flag
            <sui-header-subheader>
              A flag is used to represent a political state
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

    <sui-container class="main">
      <doc-example
        title="Flag"
        description="A flag can use the two digit country code, the full name, or a common alias"
        :code="flagCode"
      >
        <div>
          <sui-flag name="ae" />
          <sui-flag name="france" />
          <sui-flag name="myanmar" />
        </div>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'FlagDoc',
  components: { DocExample },
  setup() {
    const flagCode = `<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`

    return {
      flagCode
    }
  }
})
</script>