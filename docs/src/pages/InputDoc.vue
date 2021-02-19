<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Input
            <sui-header-subheader>
              An input is a field used to elicit a response from a user
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
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Input"
        description="A standard input"
        :code="inputCode"
      >
        <sui-input placeholder="Search..." />
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Focus"
        description="An input field can show a user is currently interacting with it"
        :code="focusCode"
      >
        <sui-input focus placeholder="Search..." />
      </doc-example>

      <doc-example
        title="Loading"
        description="An icon input field can show that it is currently loading data"
        :code="loadingCode"
      >
        <div>
          <sui-input loading placeholder="Search..." />
          <sui-divider hidden />
          <sui-input loading iconPosition="left" placeholder="Search..." />
        </div>
      </doc-example>

      <doc-example
        title="Disabled"
        description="An input field can show that it is disabled"
        :code="disabledCode"
      >
        <sui-input disabled placeholder="Search..." />
      </doc-example>

      <doc-example
        title="Error"
        description="An input field can show the data contains errors"
        :code="errorCode"
      >
        <sui-input error placeholder="Search..." />
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Icon"
        description="An input can be formatted with an icon"
        :code="iconCode"
      >
        <sui-input icon="search" placeholder="Search..." />
      </doc-example>

      <doc-example
        title="Labeled"
        description="An input can be formatted with a label"
        :code="labeledCode"
      >
        <div>
          <sui-input label="http://" placeholder="mysite.com" />
        </div>
      </doc-example>

      <doc-example
        title="Action"
        description="An input can be formatted to alert the user to an action they may perform"
        :code="actionCode"
      >
        <sui-input action="Search" placeholder="Search..." />
      </doc-example>

      <doc-example
        title="Transparent"
        description="A transparent input has no background"
        :code="transparentCode"
      >
        <sui-input transparent placeholder="Search..." />
      </doc-example>

      <doc-example
        title="Inverted"
        description="An input can be formatted to appear on dark backgrounds"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-input inverted placeholder="Search..." />
          <sui-divider inverted />
          <sui-input inverted icon="search" iconPosition="left" placeholder="Search..." />
          <sui-divider inverted />
          <sui-input inverted transparent icon="search" placeholder="Search..." />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Fluid"
        description="An input can take the size of its container"
        :code="fluidCode"
      >
        <sui-input fluid icon="search" placeholder="Search..." />
      </doc-example>

      <doc-example
        title="Size"
        description="An input can vary in size"
        :code="sizeCode"
      >
        <div>
          <sui-input size="mini" icon="search" placeholder="Search mini" />
          <sui-divider hidden />
          <sui-input size="small" icon="search" placeholder="Search small" />
          <sui-divider hidden />
          <sui-input size="large" icon="search" placeholder="Search large" />
          <sui-divider hidden />
          <sui-input size="big" icon="search" placeholder="Search big" />
          <sui-divider hidden />
          <sui-input size="huge" icon="search" placeholder="Search huge" />
          <sui-divider hidden />
          <sui-input size="massive" icon="search" placeholder="Search massive" />
        </div>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'InputDoc',
  components: { DocExample },
  setup() {
    const inputCode = `<sui-input placeholder="Search..." />`
    const focusCode = `<sui-input focus placeholder="Search..." />`
    const loadingCode = `<div>
  <sui-input loading placeholder="Search..." />
  <sui-divider hidden />
  <sui-input loading iconPosition="left" placeholder="Search..." />
</div>`

    const disabledCode = `<sui-input disabled placeholder="Search..." />`
    const errorCode = `<sui-input error placeholder="Search..." />`
    const iconCode = `<sui-input icon="search" placeholder="Search..." />`
    const labeledCode = `<sui-input label="http://" placeholder="mysite.com" />`
    const actionCode = `<sui-input action="Search" placeholder="Search..." />`
    const transparentCode = `<sui-input transparent placeholder="Search..." />`
    const invertedCode = `<sui-segment inverted>
  <sui-input inverted placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted icon="search" iconPosition="left" placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted transparent icon="search" placeholder="Search..." />
</sui-segment>`

    const fluidCode = `<sui-input fluid icon="search" placeholder="Search..." />`
    const sizeCode = `<div>
  <sui-input size="mini" icon="search" placeholder="Search mini" />
  <sui-divider hidden />
  <sui-input size="small" icon="search" placeholder="Search small" />
  <sui-divider hidden />
  <sui-input size="large" icon="search" placeholder="Search large" />
  <sui-divider hidden />
  <sui-input size="big" icon="search" placeholder="Search big" />
  <sui-divider hidden />
  <sui-input size="huge" icon="search" placeholder="Search huge" />
  <sui-divider hidden />
  <sui-input size="massive" icon="search" placeholder="Search massive" />
</div>`

    return {
      inputCode,
      focusCode,
      loadingCode,
      disabledCode,
      errorCode,
      iconCode,
      labeledCode,
      actionCode,
      transparentCode,
      invertedCode,
      fluidCode,
      sizeCode
    }
  }
})
</script>