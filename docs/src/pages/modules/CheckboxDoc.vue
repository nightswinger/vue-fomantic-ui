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
        title="Multiple"
        description="Multiple mode is enabled by default, v-model property refers to an array to bind the selected values"
        :code="multipleCode"
      >
        <div class="ui form">
          <div class="grouped fields">
            <div class="field">
              <sui-checkbox label="Apple" value="Apple" v-model="selected"  />
            </div>
            <div class="field">
              <sui-checkbox label="Banana" value="Banana" v-model="selected"  />
            </div>
            <div class="field">
              <sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />
            </div>
          </div>
        </div>
        selected : {{ selected }}
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

      <sui-header as="h2" dividing>Properties</sui-header>
      <property-list-table :properties="properties" />

      <sui-header as="h2" dividing>Events</sui-header>
      <sui-table celled>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Name</sui-table-header-cell>
            <sui-table-header-cell>Description</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="e in events" :key="e.name">
            <sui-table-cell>{{ e.name }}</sui-table-cell>
            <sui-table-cell>{{ e.description }}</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'
import PropertyListTable from '../../components/PropertyListTable.vue'

export default defineComponent({
  name: 'CheckboxDoc',
  components: { DocPageHeader, DocExample, PropertyListTable },
  setup() {
    const checked = ref(false)
    const checkboxCode = `<sui-checkbox label="Make my profile visible" v-model="checked" />`

    const selected = ref([])
    const multipleCode = `<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`

    const toggle = ref(false)
    const toggleCode = `<sui-checkbox toggle v-model="toggle" />`

    const slider = ref(false)
    const sliderCode = `<sui-checkbox slider v-model="slider" />`

    const properties = [
      { name: 'label', type: 'string', default: 'null', description: 'Label of the checkbox.' },
      { name: 'modelValue', type: 'any', default: 'null', description: 'Value binding of the checkbox.' },
      { name: 'value', type: 'any', default: 'null', description: 'Value of the checkbox.' }
    ]

    const events = [
      { name: 'change', description: 'Callback to invoke when checkbox value is changed.' },
      { name: 'click', description: 'Callback to invoke when checkbox is clicked.' }
    ]

    return {
      checked,
      checkboxCode,
      selected,
      multipleCode,
      toggle,
      toggleCode,
      slider,
      sliderCode,
      properties,
      events
    }
  }
})
</script>