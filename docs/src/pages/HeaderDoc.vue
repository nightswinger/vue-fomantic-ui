<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Header
            <sui-header-subheader>
              A header provides a short summary of content
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
        title="Page Headers"
        description="Headers may be oriented to give the hierarchy of a section in the context of the page"
        :code="pageHeaderCode"
      >
        <div>
          <sui-header as="h1">First header</sui-header>
          <sui-header as="h2">Second header</sui-header>
          <sui-header as="h3">Third header</sui-header>
          <sui-header as="h4">Fourth header</sui-header>
          <sui-header as="h5">Fifth header</sui-header>
        </div>
      </doc-example>

      <doc-example
        title="Content Headers"
        description="Headers may be oriented to give the importance of a section in the context of the content that surrounds it"
        :code="contentHeaderCode"
      >
        <div>
          <sui-header size="huge">Huge Header</sui-header>
          <sui-header size="large">Large Header</sui-header>
          <sui-header size="medium">Medium Header</sui-header>
          <sui-header size="small">Small Header</sui-header>
          <sui-header size="tiny">Tiny Header</sui-header>
        </div>
      </doc-example>

      <doc-example
        title="Icon Headers"
        description="A header can be formatted to emphasize an icon"
        :code="iconHeadersCode"
      >
        <sui-header icon>
          <sui-icon name="settings" />
          <sui-header-content>
            AccountSettings
            <sui-header-subheader>
              Manage your account settings and set e-mail preferences.
            </sui-header-subheader>
          </sui-header-content>
        </sui-header>
      </doc-example>

      <doc-example
        title="Sub Headers"
        description="Headers may be formatted to label smaller or de-emphasized content"
        :code="subHeadersCode"
      >
        <div>
          <sui-header as="h2" sub>Price</sui-header>
          <span>$10.99</span>
        </div>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Image"
        description="A header may contain an image"
        :code="imageCode"
      >
        <sui-header>
          <sui-image src="/src/assets/icons/school.png" />
          <sui-header-content>Learn More</sui-header-content>
        </sui-header>
      </doc-example>

      <doc-example
        title="Icon"
        description="A header may contain an icon"
        :code="iconCode"
      >
        <sui-header>
          <sui-icon name="plug" />
          <sui-header-content>Uptime Guarantee</sui-header-content>
        </sui-header>
      </doc-example>

      <doc-example
        title="Subheader"
        description="Headers may contain subheaders"
        :code="subheaderCode"
      >
        <sui-header as="h2">
          AccountSettings
          <sui-header-subheader>
            Manage your account settings and set e-mail preferences.
          </sui-header-subheader>
        </sui-header>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Disabled"
        description="A header can show that it is inactive"
        :code="disabledCode"
      >
        <sui-header disabled>Disabled Header</sui-header>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Dividing"
        description="A header can be formatted to divide itself from the content below it"
        :code="dividingCode"
      >
        <sui-header as="h3" dividing>Dividing Header</sui-header>
      </doc-example>

      <doc-example
        title="Block"
        description="A header can be formatted to appear inside a content block"
        :code="blockCode"
      >
        <sui-header as="h3" block>Block Header</sui-header>
      </doc-example>

      <doc-example
        title="Attached"
        description="A header can be attached to other content, like a segment"
        :code="attachedCode"
      >
        <div>
          <sui-header as="h2" attached="top">Attached Header</sui-header>
          <sui-segment attached>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Floating"
        description="A header can sit to the left or right of other content"
        :code="floatingCode"
      >
        <sui-segment clearing>
          <sui-header as="h3" floated="right">Go Forward</sui-header>
          <sui-header as="h3" floated="left">Go Back</sui-header>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Text Alignment"
        description="A header can have its text aligned to a side"
        :code="textAlignCode"
      >
        <sui-segment>
          <sui-header as="h3" textAlign="right">Right</sui-header>
          <sui-header as="h3" textAlign="left">Left</sui-header>
          <sui-header as="h3" textAlign="justified">
            This should take up the full width even if only one line
          </sui-header>
          <sui-header as="h3" textAlign="center">Center</sui-header>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Colored"
        description="A header can be formatted with different colors"
        :code="coloredCode"
      >
        <div>
          <sui-header as="h4" color="primary">Primary</sui-header>
          <sui-header as="h4" color="secondary">Secondary</sui-header>
          <sui-header as="h4" color="red">Red</sui-header>
          <sui-header as="h4" color="orange">Orange</sui-header>
          <sui-header as="h4" color="yellow">Yellow</sui-header>
          <sui-header as="h4" color="olive">Olive</sui-header>
          <sui-header as="h4" color="green">Green</sui-header>
          <sui-header as="h4" color="teal">Teal</sui-header>
          <sui-header as="h4" color="blue">Blue</sui-header>
          <sui-header as="h4" color="purple">Purple</sui-header>
          <sui-header as="h4" color="violet">Violet</sui-header>
          <sui-header as="h4" color="pink">Pink</sui-header>
          <sui-header as="h4" color="brown">Brown</sui-header>
          <sui-header as="h4" color="grey">Grey</sui-header>
        </div>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A header can have its colors inverted for contrast"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-header as="h4" color="red" inverted>Red</sui-header>
          <sui-header as="h4" color="orange" inverted>Orange</sui-header>
          <sui-header as="h4" color="yellow" inverted>Yellow</sui-header>
          <sui-header as="h4" color="olive" inverted>Olive</sui-header>
          <sui-header as="h4" color="green" inverted>Green</sui-header>
          <sui-header as="h4" color="teal" inverted>Teal</sui-header>
          <sui-header as="h4" color="blue" inverted>Blue</sui-header>
          <sui-header as="h4" color="purple" inverted>Purple</sui-header>
          <sui-header as="h4" color="violet" inverted>Violet</sui-header>
          <sui-header as="h4" color="pink" inverted>Pink</sui-header>
          <sui-header as="h4" color="brown" inverted>Brown</sui-header>
          <sui-header as="h4" color="grey" inverted>Grey</sui-header>
        </sui-segment>
      </doc-example>

    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'HeaderDoc',
  components: { DocExample },
  setup() {
    const pageHeaderCode = `<div>
  <sui-header as="h1">First header</sui-header>
  <sui-header as="h2">Second header</sui-header>
  <sui-header as="h3">Third header</sui-header>
  <sui-header as="h4">Fourth header</sui-header>
  <sui-header as="h5">Fifth header</sui-header>
</div>`

    const contentHeaderCode = `<div>
  <sui-header size="huge">Huge Header</sui-header>
  <sui-header size="large">Large Header</sui-header>
  <sui-header size="medium">Medium Header</sui-header>
  <sui-header size="small">Small Header</sui-header>
  <sui-header size="tiny">Tiny Header</sui-header>
</div>`

    const iconHeadersCode = `<sui-header icon>
  <sui-icon name="settings" />
  <sui-header-content>
    AccountSettings
    <sui-header-subheader>
      Manage your account settings and set e-mail preferences.
    </sui-header-subheader>
  </sui-header-content>
</sui-header>`

    const subHeadersCode = `<div>
  <sui-header as="h2" sub>Price</sui-header>
  <span>$10.99</span>
</div>`

    const imageCode = `<sui-header>
  <sui-image src="/images/icons/school.png" />
  <sui-header-content>Learn More</sui-header-content>
</sui-header>`

    const iconCode = `<sui-header>
  <sui-icon name="plug" />
  <sui-header-content>Uptime Guarantee</sui-header-content>
</sui-header>`

    const subheaderCode = `<sui-header as="h2">
  AccountSettings
  <sui-header-subheader>
    Manage your account settings and set e-mail preferences.
  </sui-header-subheader>
</sui-header>`

    const disabledCode = `<sui-header disabled>Disabled Header</sui-header>`
    const dividingCode = `<sui-header as="h3" dividing>Dividing Header</sui-header>`
    const blockCode = `<sui-header as="h3" block>Block Header</sui-header>`

    const attachedCode = `<div>
  <sui-header as="h2" attached="top">Attached Header</sui-header>
  <sui-segment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </sui-segment>
</div>`

    const floatingCode = `<sui-segment clearing>
  <sui-header as="h3" floated="right">Go Forward</sui-header>
  <sui-header as="h3" floated="left">Go Back</sui-header>
</sui-segment>`

    const textAlignCode = `<sui-segment>
  <sui-header as="h3" textAlign="right">Right</sui-header>
  <sui-header as="h3" textAlign="left">Left</sui-header>
  <sui-header as="h3" textAlign="justified">
    This should take up the full width even if only one line
  </sui-header>
  <sui-header as="h3" textAlign="center">Center</sui-header>
</sui-segment>`

    const coloredCode = `<div>
  <sui-header as="h4" color="primary">Primary</sui-header>
  <sui-header as="h4" color="secondary">Secondary</sui-header>
  <sui-header as="h4" color="red">Red</sui-header>
  <sui-header as="h4" color="orange">Orange</sui-header>
  <sui-header as="h4" color="yellow">Yellow</sui-header>
  <sui-header as="h4" color="olive">Olive</sui-header>
  <sui-header as="h4" color="green">Green</sui-header>
  <sui-header as="h4" color="teal">Teal</sui-header>
  <sui-header as="h4" color="blue">Blue</sui-header>
  <sui-header as="h4" color="purple">Purple</sui-header>
  <sui-header as="h4" color="violet">Violet</sui-header>
  <sui-header as="h4" color="pink">Pink</sui-header>
  <sui-header as="h4" color="brown">Brown</sui-header>
  <sui-header as="h4" color="grey">Grey</sui-header>
</div>`

    const invertedCode = `<sui-segment inverted>
  <sui-header as="h4" color="red" inverted>Red</sui-header>
  <sui-header as="h4" color="orange" inverted>Orange</sui-header>
  <sui-header as="h4" color="yellow" inverted>Yellow</sui-header>
  <sui-header as="h4" color="olive" inverted>Olive</sui-header>
  <sui-header as="h4" color="green" inverted>Green</sui-header>
  <sui-header as="h4" color="teal" inverted>Teal</sui-header>
  <sui-header as="h4" color="blue" inverted>Blue</sui-header>
  <sui-header as="h4" color="purple" inverted>Purple</sui-header>
  <sui-header as="h4" color="violet" inverted>Violet</sui-header>
  <sui-header as="h4" color="pink" inverted>Pink</sui-header>
  <sui-header as="h4" color="brown" inverted>Brown</sui-header>
  <sui-header as="h4" color="grey" inverted>Grey</sui-header>
</sui-segment>`

    return {
      pageHeaderCode,
      contentHeaderCode,
      iconHeadersCode,
      subHeadersCode,
      imageCode,
      iconCode,
      subheaderCode,
      disabledCode,
      dividingCode,
      blockCode,
      attachedCode,
      floatingCode,
      textAlignCode,
      coloredCode,
      invertedCode
    }
  }
})
</script>