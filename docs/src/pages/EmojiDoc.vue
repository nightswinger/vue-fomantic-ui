<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Emoji
            <sui-header-subheader>
              An emoji is a glyph used to represent an emotional state
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
        description="An emoji can show that it is disabled"
        :code="disabledCode"
      >
        <sui-segment basic>
          <sui-emoji name="anguished" disabled />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Loading"
        description="An emoji can be used as a simple loader"
        :code="loadingCode"
      >
        <sui-segment basic>
          <sui-emoji name="angel" loading />
          <sui-emoji name="blush" loading />
          <sui-emoji name="grin" loading />
        </sui-segment>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Size"
        description="An emoji can vary in size"
        :code="sizeCode"
      >
        <sui-segment basic>
          <sui-emoji name="relaxed" size="small" /> Small
          <br>
          <sui-emoji name="relaxed" size="medium" /> Medium
          <br>
          <sui-emoji name="relaxed" size="large" /> Large
          <br>
          <sui-emoji name="relaxed" size="big" /> Big
        </sui-segment>
      </doc-example>

      <doc-example
        title="Autosizing"
        description="If no specific size class is given, all emojis are automatically sized according to the current element font-size"
        :code="autosizingCode"
      >
        <sui-segment basic>
          <sui-header size="small">Within a header <sui-emoji name="relaxed" /></sui-header>
          <sui-button size="large">Within a button <sui-emoji name="relaxed" /></sui-button>
          <br><br>
          <sui-label size="massive">Within a label <sui-emoji name="relaxed" /></sui-label>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Link"
        description="An emoji can be formatted as a link"
        :code="linkCode"
      >
        <sui-segment basic>
          <sui-emoji name="slight_smile" link />
        </sui-segment>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'EmojiDoc',
  components: { DocExample },
  setup() {
    const disabledCode = `<sui-segment basic>
  <sui-emoji name="anguished" disabled />
</sui-segment>`

    const loadingCode = `<sui-segment basic>
  <sui-emoji name="angel" loading />
  <sui-emoji name="blush" loading />
  <sui-emoji name="grin" loading />
</sui-segment>`

    const sizeCode = `<sui-segment basic>
  <sui-emoji name="relaxed" size="small" /> Small
  <br>
  <sui-emoji name="relaxed" size="medium" /> Medium
  <br>
  <sui-emoji name="relaxed" size="large" /> Large
  <br>
  <sui-emoji name="relaxed" size="big" /> Big
</sui-segment>`

    const autosizingCode = `<sui-segment basic>
  <sui-header size="small">Within a header <sui-emoji name="relaxed" /></sui-header>
  <sui-button size="large">Within a button <sui-emoji name="relaxed" /></sui-button>
  <br><br>
  <sui-label size="massive">Within a label <sui-emoji name="relaxed" /></sui-label>
</sui-segment>`

    const linkCode = `<sui-segment basic>
  <sui-emoji name="slight_smile" link />
</sui-segment>`

    return {
      disabledCode,
      loadingCode,
      sizeCode,
      autosizingCode,
      linkCode
    }
  }
})
</script>