<template>
  <div>
    <doc-page-header
      title="Checkbox"
      sub="A checkbox allows a user to select a value from a small set of options, often binary"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Checkbox"
        description="A standard checkbox"
        :code="checkboxCode"
      >
        <sui-checkbox label="Make my profile visible" v-model="checked" />
      </doc-example>

      <doc-example
        title="Toggle"
        description="A checkbox can toggle"
        :code="toggleCode"
      >
        <sui-checkbox toggle v-model="toggle" />
      </doc-example>

      <doc-example
        title="Slider"
        description="A checkbox can look like a slider"
        :code="sliderCode"
      >
        <sui-checkbox slider v-model="slider" />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'CheckboxDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const checked = ref(false)
    const checkboxCode = `<sui-checkbox label="Make my profile visible" v-model="checked" />`

    const toggle = ref(false)
    const toggleCode = `<sui-checkbox toggle v-model="toggle" />`

    const slider = ref(false)
    const sliderCode = `<sui-checkbox slider v-model="slider" />`

    return {
      checked,
      checkboxCode,
      toggle,
      toggleCode,
      slider,
      sliderCode
    }
  }
})
</script>