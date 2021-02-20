<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Rail
            <sui-header-subheader>
              A rail is used to show accompanying content outside the boundaries of the main view of a site
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
        title="Rail"
        description="A rail can be presented on the left or right side of a container"
        :code="railCode"
      >
        <sui-grid centered :columns="3">
          <sui-grid-column>
            <sui-segment>
              <sui-image src="/src/assets/short-paragraph.png" />

              <sui-rail position="left">
                <sui-segment>
                  Left Rail Content
                </sui-segment>
              </sui-rail>
              <sui-rail position="right">
                <sui-segment>
                  Right Rail Content
                </sui-segment>
              </sui-rail>
            </sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Internal"
        description="A rail can attach itself to the inside of a container"
        :code="internalCode"
      >
        <sui-segment textAlign="center">
          <sui-image src="/src/assets/short-paragraph.png" />

          <sui-rail internal position="left">
            <sui-segment>Left Rail Content</sui-segment>
          </sui-rail>

          <sui-rail internal position="right">
            <sui-segment>Right Rail Content</sui-segment>
          </sui-rail>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Dividing"
        description="A rail can create a division between itself and a container"
        :code="dividingCode"
      >
        <sui-grid centered :columns="3">
          <sui-grid-column>
            <sui-segment>
              <sui-image src="/src/assets/short-paragraph.png" />

              <sui-rail dividing position="left">
                <sui-segment>
                  Left Rail Content
                </sui-segment>
              </sui-rail>
              <sui-rail dividing position="right">
                <sui-segment>
                  Right Rail Content
                </sui-segment>
              </sui-rail>
            </sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Attached"
        description="A rail can appear attached to the main viewport"
        :code="attachedCode"
      >
        <sui-grid centered :columns="3">
          <sui-grid-column>
            <sui-segment>
              <sui-image src="/src/assets/short-paragraph.png" />

              <sui-rail attached position="left">
                <sui-segment>
                  Left Rail Content
                </sui-segment>
              </sui-rail>
              <sui-rail attached position="right">
                <sui-segment>
                  Right Rail Content
                </sui-segment>
              </sui-rail>
            </sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Close"
        description="A rail can appear closer to the main viewport"
        :code="closeCode"
      >
        <sui-grid centered :columns="3">
          <sui-grid-column>
            <sui-segment>
              <sui-image src="/src/assets/short-paragraph.png" />

              <sui-rail close position="left">
                <sui-segment>
                  Left Rail Content
                </sui-segment>
              </sui-rail>
              <sui-rail close position="right">
                <sui-segment>
                  Right Rail Content
                </sui-segment>
              </sui-rail>
            </sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Size"
        description="A rail can have different sizes"
        :code="sizeCode"
      >
        <sui-grid centered :columns="3">
          <sui-grid-column>
            <sui-segment>
              <sui-image src="/src/assets/short-paragraph.png" />

              <sui-rail size="small" position="left">
                Left Small Rail
              </sui-rail>
              <sui-rail size="large" position="right">
                Right Large Rail
              </sui-rail>
            </sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'RailDoc',
  components: { DocExample },
  setup() {
    const railCode = `<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/src/assets/short-paragraph.png" />

      <sui-rail position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    const internalCode = `<sui-segment textAlign="center">
  <sui-image src="/src/assets/short-paragraph.png" />

  <sui-rail internal position="left">
    <sui-segment>Left Rail Content</sui-segment>
  </sui-rail>

  <sui-rail internal position="right">
    <sui-segment>Right Rail Content</sui-segment>
  </sui-rail>
</sui-segment>`

    const dividingCode = `<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/src/assets/short-paragraph.png" />

      <sui-rail dividing position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail dividing position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    const attachedCode = `<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/src/assets/short-paragraph.png" />

      <sui-rail attached position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail attached position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    const closeCode = `<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/src/assets/short-paragraph.png" />

      <sui-rail close position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail close position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    const closeCode = `<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/src/assets/short-paragraph.png" />

      <sui-rail close position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail close position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    const sizeCode = `<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/src/assets/short-paragraph.png" />

      <sui-rail size="small" position="left">
        Left Small Rail
      </sui-rail>
      <sui-rail size="large" position="right">
        Right Large Rail
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    return {
      railCode,
      internalCode,
      dividingCode,
      attachedCode,
      closeCode,
      sizeCode
    }
  }
})
</script>