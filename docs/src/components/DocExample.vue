<template>
  <div class="example">
    <sui-grid :columns="2">
      <sui-grid-row>
        <sui-grid-column>
          <sui-header as="h3">
            {{ title }}
            <sui-header-subheader>{{ description }}</sui-header-subheader>
          </sui-header>
        </sui-grid-column>
        <sui-grid-column textAlign="right">
          <sui-icon
            name="code"
            size="large"
            color="grey"
            @click="toggle"
            link
          />
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column :width="16">
          <slot />
        </sui-grid-column>
        <sui-grid-column :width="16" v-if="active">
          <prism language="markup">
            {{ code }}
          </prism>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Prism from 'vue-prism-component'

export default defineComponent({
  name: 'DocExample',
  components: { Prism },
  props: {
    title: String,
    description: String,
    code: String
  },
  setup() {
    const active = ref(false)
    const toggle = () => active.value = !active.value

    return { active, toggle }
  }
})
</script>