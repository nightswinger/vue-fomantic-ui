<template>
  <div>
    <doc-page-header
      title="Tab"
      sub="A tab is a hidden section of content activated by a menu"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Examples</sui-header>

      <doc-example
        title="Basic"
        :code="basicCode"
      >
        <sui-tab>
          <sui-tab-panel header="First">Content A</sui-tab-panel>
          <sui-tab-panel header="Second">Content B</sui-tab-panel>
          <sui-tab-panel header="Third">Content C</sui-tab-panel>
        </sui-tab>
      </doc-example>

      <doc-example
        title="Pointing"
        :code="pointingCode"
      >
        <sui-tab pointing>
          <sui-tab-panel header="First">Content A</sui-tab-panel>
          <sui-tab-panel header="Second">Content B</sui-tab-panel>
          <sui-tab-panel header="Third">Content C</sui-tab-panel>
        </sui-tab>
      </doc-example>

      <doc-example
        title="Secondary"
        :code="secondaryCode"
      >
        <sui-tab secondary>
          <sui-tab-panel header="First">Content A</sui-tab-panel>
          <sui-tab-panel header="Second">Content B</sui-tab-panel>
          <sui-tab-panel header="Third">Content C</sui-tab-panel>
        </sui-tab>
      </doc-example>

      <doc-example
        title="Text"
        :code="textCode"
      >
        <sui-tab text>
          <sui-tab-panel header="First">Content A</sui-tab-panel>
          <sui-tab-panel header="Second">Content B</sui-tab-panel>
          <sui-tab-panel header="Third">Content C</sui-tab-panel>
        </sui-tab>
      </doc-example>

      <sui-header as="h2" dividing>Properties</sui-header>

      <sui-header as="h3">Tab</sui-header>
      <property-list-table :properties="tabProperties" />

      <sui-header as="h3">TabPanel</sui-header>
      <property-list-table :properties="tabPanelProperties" />

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
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'
import PropertyListTable from '../../components/PropertyListTable.vue'

export default defineComponent({
  name: 'TabDoc',
  components: { DocPageHeader, DocExample, PropertyListTable },
  setup() {
    const basicCode = `<sui-tab>
  <sui-tab-panel header="First">Content A</sui-tab-panel>
  <sui-tab-panel header="Second">Content B</sui-tab-panel>
  <sui-tab-panel header="Third">Content C</sui-tab-panel>
</sui-tab>`

    const pointingCode = `<sui-tab pointing>
    <sui-tab-panel header="First">Content A</sui-tab-panel>
    <sui-tab-panel header="Second">Content B</sui-tab-panel>
    <sui-tab-panel header="Third">Content C</sui-tab-panel>
  </sui-tab>
</doc-example>`

    const secondaryCode = `<sui-tab secondary>
    <sui-tab-panel header="First">Content A</sui-tab-panel>
    <sui-tab-panel header="Second">Content B</sui-tab-panel>
    <sui-tab-panel header="Third">Content C</sui-tab-panel>
  </sui-tab>
</doc-example>`

    const textCode = `<sui-tab text>
  <sui-tab-panel header="First">Content A</sui-tab-panel>
  <sui-tab-panel header="Second">Content B</sui-tab-panel>
  <sui-tab-panel header="Third">Content C</sui-tab-panel>
</sui-tab>`

    const tabProperties = [
      { name: 'activeIndex', type: 'string', default: 0, description: 'Index of the active tab.' },
      { name: 'pointing', type: 'boolean', default: false, description: '' },
    ]

    const tabPanelProperties = [
      { name: 'header', type: 'boolean', default: 'null', description: 'Orientation of tab headers.' }
    ]

    const events = [
      { name: 'tab-change', description: 'Callback to invoke when an active tab is changed.' },
      { name: 'tab-click', description: 'Callback to invoke when an tab is clicked.' }
    ]

    return {
      basicCode,
      pointingCode,
      secondaryCode,
      textCode,
      tabProperties,
      tabPanelProperties,
      events
    }
  }
})
</script>