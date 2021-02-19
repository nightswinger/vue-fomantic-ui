<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Icon
            <sui-header-subheader>
              An icon is a glyph used to represent something else
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
      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Disabled"
        description="An icon can show that it is disabled"
        :code="disabledCode"
      >
        <sui-icon name="users" disabled />
      </doc-example>

      <doc-example
        title="Loading"
        description="An icon can be used as a simple loader"
        :code="loadingCode"
      >
        <div>
          <sui-icon name="spinner" loading />
          <sui-icon name="notched circle" loading />
          <sui-icon name="asterisk" loading />
        </div>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Fitted"
        description="An icon can be fitted, without any space to the left or right of it"
        :code="fittedCode"
      >
        <div>
          This icon
          <sui-icon name="help" fitted />
          is fitted.
          <br>
          This icon
          <sui-icon name="help" />
          is not.
        </div>
      </doc-example>

      <doc-example
        title="Size"
        description="An icon can vary in size"
        :code="sizeCode"
      >
        <div>
          <sui-icon name="home" size="mini" />
          <sui-icon name="home" size="tiny" />
          <sui-icon name="home" size="small" />
          <br>
          <sui-icon name="home" />
          <br>
          <sui-icon name="home" size="large" />
          <br>
          <sui-icon name="home" size="big" />
          <br>
          <sui-icon name="home" size="huge" />
          <br>
          <sui-icon name="home" size="massive" />
        </div>
      </doc-example>

      <doc-example
        title="Link"
        description="An icon can be formatted as a link"
        :code="linkCode"
      >
        <div>
          <sui-icon name="close" link />
          <sui-icon name="help" link />
        </div>
      </doc-example>

      <doc-example
        title="Flipped"
        description="An icon can be flipped"
        :code="flippedCode"
      >
        <div>
          <sui-icon name="cloud" flipped="horizontally" />
          <sui-icon name="cloud" flipped="vertically" />
        </div>
      </doc-example>

      <doc-example
        title="Rotated"
        description="An icon can be rotated"
        :code="rotatedCode"
      >
        <div>
          <sui-icon name="cloud" rotated="clockwise" />
          <sui-icon name="cloud" rotated="counterclockwise" />
        </div>
      </doc-example>

      <doc-example
        title="Circular"
        description="An icon can be formatted to appear circular"
        :code="circularCode"
      >
        <div>
          <sui-icon name="users" circular />
          <sui-icon name="users" color="teal" circular />
          <sui-icon name="users" inverted circular />
          <sui-icon name="users" color="teal" inverted circular />
        </div>
      </doc-example>

      <doc-example
        title="Bordered"
        description="An icon can be formatted to appear bordered"
        :code="borderedCode"
      >
        <div>
          <sui-icon name="users" bordered />
          <sui-icon name="users" bordered color="teal" />
          <sui-icon name="users" inverted bordered color="black" />
          <sui-icon name="users" inverted bordered color="teal" />
        </div>
      </doc-example>

      <doc-example
        title="Colored"
        description="An icon can be formatted with different colors"
        :code="coloredCode"
      >
        <div>
          <sui-icon name="users" color="primary" />
          <sui-icon name="users" color="secondary" />
          <sui-icon name="users" color="red" />
          <sui-icon name="users" color="orange" />
          <sui-icon name="users" color="yellow" />
          <sui-icon name="users" color="olive" />
          <sui-icon name="users" color="green" />
          <sui-icon name="users" color="teal" />
          <sui-icon name="users" color="blue" />
          <sui-icon name="users" color="violet" />
          <sui-icon name="users" color="purple" />
          <sui-icon name="users" color="pink" />
          <sui-icon name="users" color="brown" />
          <sui-icon name="users" color="grey" />
          <sui-icon name="users" color="black" />
        </div>
      </doc-example>

      <doc-example
        title="Inverted"
        description="An icon can have its colors inverted for contrast"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-icon name="users" inverted />
          <sui-icon name="users" inverted color="primary" />
          <sui-icon name="users" inverted color="secondary" />
          <sui-icon name="users" inverted color="red" />
          <sui-icon name="users" inverted color="orange" />
          <sui-icon name="users" inverted color="yellow" />
          <sui-icon name="users" inverted color="olive" />
          <sui-icon name="users" inverted color="green" />
          <sui-icon name="users" inverted color="teal" />
          <sui-icon name="users" inverted color="blue" />
          <sui-icon name="users" inverted color="violet" />
          <sui-icon name="users" inverted color="purple" />
          <sui-icon name="users" inverted color="pink" />
          <sui-icon name="users" inverted color="brown" />
          <sui-icon name="users" inverted color="grey" />
        </sui-segment>
      </doc-example>

      <sui-header as="h2" dividing>Groups</sui-header>

      <doc-example
        title="Icons"
        description="Several icons can be used together as a group"
        :code="iconsCode"
      >
        <sui-icon-group size="huge">
          <sui-icon name="circle outline" size="big" />
          <sui-icon name="user" />
        </sui-icon-group>
      </doc-example>

      <doc-example
        title="Corner Icon"
        description="A group of icons can display a smaller corner icon"
        :code="cornerIconCode"
      >
        <sui-icon-group size="huge">
          <sui-icon name="puzzle" />
          <sui-icon name="add" corner />
        </sui-icon-group>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'IconDoc',
  components: { DocExample },
  setup() {
    const disabledCode = `<sui-icon name="users" disabled />`
    const loadingCode = `<div>
  <sui-icon name="spinner" loading />
  <sui-icon name="notched circle" loading />
  <sui-icon name="asterisk" loading />
</div>`

    const fittedCode = `<div>
  This icon
  <sui-icon name="help" fitted />
  is fitted.
  <br>
  This icon
  <sui-icon name="help" />
  is not.
</div>`

    const sizeCode = `<div>
  <sui-icon name="home" size="mini" />
  <sui-icon name="home" size="tiny" />
  <sui-icon name="home" size="small" />
  <br>
  <sui-icon name="home" />
  <br>
  <sui-icon name="home" size="large" />
  <br>
  <sui-icon name="home" size="big" />
  <br>
  <sui-icon name="home" size="huge" />
  <br>
  <sui-icon name="home" size="massive" />
</div>`

    const linkCode = `<div>
  <sui-icon name="close" link />
  <sui-icon name="help" link />
</div>`

    const flippedCode = `<div>
  <sui-icon name="cloud" flipped="horizontally" />
  <sui-icon name="cloud" flipped="vertically" />
</div>`

    const rotatedCode = `<div>
  <sui-icon name="cloud" rotated="clockwise" />
  <sui-icon name="cloud" rotated="counterclockwise" />
</div>`

    const circularCode = `<div>
  <sui-icon name="users" circular />
  <sui-icon name="users" color="teal" circular />
  <sui-icon name="users" inverted circular />
  <sui-icon name="users" color="teal" inverted circular />
</div>`

    const borderedCode = `<div>
  <sui-icon name="users" bordered />
  <sui-icon name="users" bordered color="teal" />
  <sui-icon name="users" inverted bordered color="black" />
  <sui-icon name="users" inverted bordered color="teal" />
</div>`

    const coloredCode = `<div>
  <sui-icon name="users" color="primary" />
  <sui-icon name="users" color="secondary" />
  <sui-icon name="users" color="red" />
  <sui-icon name="users" color="orange" />
  <sui-icon name="users" color="yellow" />
  <sui-icon name="users" color="olive" />
  <sui-icon name="users" color="green" />
  <sui-icon name="users" color="teal" />
  <sui-icon name="users" color="blue" />
  <sui-icon name="users" color="violet" />
  <sui-icon name="users" color="purple" />
  <sui-icon name="users" color="pink" />
  <sui-icon name="users" color="brown" />
  <sui-icon name="users" color="grey" />
  <sui-icon name="users" color="black" />
</div>`

    const invertedCode = `<sui-segment inverted>
  <sui-icon name="users" inverted />
  <sui-icon name="users" inverted color="primary" />
  <sui-icon name="users" inverted color="secondary" />
  <sui-icon name="users" inverted color="red" />
  <sui-icon name="users" inverted color="orange" />
  <sui-icon name="users" inverted color="yellow" />
  <sui-icon name="users" inverted color="olive" />
  <sui-icon name="users" inverted color="green" />
  <sui-icon name="users" inverted color="teal" />
  <sui-icon name="users" inverted color="blue" />
  <sui-icon name="users" inverted color="violet" />
  <sui-icon name="users" inverted color="purple" />
  <sui-icon name="users" inverted color="pink" />
  <sui-icon name="users" inverted color="brown" />
  <sui-icon name="users" inverted color="grey" />
</sui-segment>`

    const iconsCode = `<sui-icon-group size="huge">
  <sui-icon name="circle outline" size="big" />
  <sui-icon name="user" />
</sui-icon-group>`

    const cornerIconCode = `<sui-icon-group size="huge">
  <sui-icon name="puzzle" />
  <sui-icon name="add" corner />
</sui-icon-group>`

    return {
      disabledCode,
      loadingCode,
      fittedCode,
      sizeCode,
      linkCode,
      flippedCode,
      rotatedCode,
      circularCode,
      borderedCode,
      coloredCode,
      invertedCode,
      iconsCode,
      cornerIconCode
    }
  }
})
</script>