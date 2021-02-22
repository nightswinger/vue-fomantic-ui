<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Segment
            <sui-header-subheader>
              A segment is used to create a grouping of related content
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
        title="Segment"
        description="A segment of content"
        :code="segmentCode"
      >
        <sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>
      </doc-example>

      <doc-example
        title="Placeholder Segment"
        description="A segment can be used to reserve space for conditionally displayed content"
        :code="placeholderCode"
      >
        <sui-segment placeholder>
          <sui-header icon>
            <sui-icon name="file outline" />
            No documents are listed for this customer.
          </sui-header>
          <sui-button color="primary">Add Document</sui-button>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Raised"
        description="A segment may be formatted to raise above the page"
        :code="raisedCode"
      >
        <sui-segment raised>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Stacked"
        description="A segment can be formatted to show it contains multiple pages"
        :code="stackedCode"
      >
        <sui-segment stacked>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Piled"
        description="A segment can be formatted to look like a pile of pages"
        :code="piledCode"
      >
        <sui-segment piled>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Vertical Segment"
        description="A vertical segment formats content to be aligned as part of a vertical group"
        :code="verticalCode"
      >
        <div>
          <sui-segment vertical>
            Te eum doming eirmod, nominati pertinacia argumentum ad his.
          </sui-segment>
          <sui-segment vertical>
            Pellentesque habitant morbi tristique senectus.
          </sui-segment>
          <sui-segment vertical>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
          </sui-segment>
        </div>
      </doc-example>

      <sui-header as="h2" dividing>Groups</sui-header>

      <doc-example
        title="Segments"
        description="A group of segments can be formatted to appear together"
        :code="segmentsCode"
      >
        <sui-segment-group>
          <sui-segment><p>Top</p></sui-segment>
          <sui-segment><p>Middle</p></sui-segment>
          <sui-segment><p>Middle</p></sui-segment>
          <sui-segment><p>Middle</p></sui-segment>
          <sui-segment><p>Bottom</p></sui-segment>
        </sui-segment-group>
      </doc-example>

      <doc-example
        title="Nested Segments"
        description="A group of segments can be nested in another group of segments"
        :code="nestedCode"
      >
        <sui-segment-group>
          <sui-segment>Top</sui-segment>
          <sui-segment-group>
            <sui-segment>Nested Top</sui-segment>
            <sui-segment>Nested Middle</sui-segment>
            <sui-segment>Nested Bottom</sui-segment>
          </sui-segment-group>
          <sui-segment-group horizontal>
            <sui-segment>Top</sui-segment>
            <sui-segment>Middle</sui-segment>
            <sui-segment>Bottom</sui-segment>
          </sui-segment-group>
          <sui-segment>Bottom</sui-segment>
        </sui-segment-group>
      </doc-example>

      <doc-example
        title="Horizontal Segments"
        description="A segment group can appear horizontally"
        :code="horizontalCode"
      >
        <sui-segment-group horizontal>
          <sui-segment>Left</sui-segment>
          <sui-segment>Middle</sui-segment>
          <sui-segment>Right</sui-segment>
        </sui-segment-group>
      </doc-example>

      <doc-example
        title="Raised Segments"
        description="A group of segments can be raised"
        :code="raisedSegmentsCode"
      >
        <sui-segment-group raised>
          <sui-segment>Top</sui-segment>
          <sui-segment>Middle</sui-segment>
          <sui-segment>Bottom</sui-segment>
        </sui-segment-group>
      </doc-example>

      <doc-example
        title="Stacked Segments"
        description="A group of segments can be stacked"
        :code="stackedSegmentsCode"
      >
        <sui-segment-group stacked>
          <sui-segment>Top</sui-segment>
          <sui-segment>Middle</sui-segment>
          <sui-segment>Bottom</sui-segment>
        </sui-segment-group>
      </doc-example>

      <doc-example
        title="Piled Segments"
        description="A group of segments can be piled"
        :code="piledSegmentsCode"
      >
        <sui-segment-group piled>
          <sui-segment>Top</sui-segment>
          <sui-segment>Middle</sui-segment>
          <sui-segment>Bottom</sui-segment>
        </sui-segment-group>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Disabled"
        description="A segment may show its content is disabled"
        :code="disabledCode"
      >
        <sui-segment disabled>Disabled content</sui-segment>
      </doc-example>

      <doc-example
        title="Loading"
        description="A segment may show its content is being loaded"
        :code="loadingCode"
      >
        <sui-segment loading>Now Loading...</sui-segment>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Inverted"
        description="A segment can have its colors inverted for contrast"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <p>I'm here to tell you something, and you will probably read me first.</p>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Attached"
        description="A segment can be attached to other content on a page"
        :code="attachedCode"
      >
        <div>
          <sui-segment attached="top">
            <p>This segment is on top</p>
          </sui-segment>
          <sui-segment attached>
            <p>This segment is attached on both sides</p>
          </sui-segment>
          <sui-segment attached="bottom">
            <p>This segment is on bottom</p>
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Padded"
        description="A segment can increase its padding"
        :code="paddedCode"
      >
        <sui-segment padded>Padded content</sui-segment>
      </doc-example>

      <doc-example
        title="Fitted"
        description="A segment can remove its padding, vertically or horizontally"
        :code="fittedCode"
      >
        <div>
          <sui-segment fitted>
            <p>Fitted Segment</p>
          </sui-segment>
          <sui-segment fitted="horizontally">
            <p>Horizontally fitted segment</p>
          </sui-segment>
          <sui-segment fitted="vertically">
            <p>Vertically fitted segment</p>
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Compact"
        description="A segment may take up only as much space as is necessary"
        :code="compactCode"
      >
        <sui-segment compact>Compact content</sui-segment>
      </doc-example>

      <doc-example
        title="Colored"
        description="A segment can be colored"
        :code="coloredCode"
      >
        <div>
          <sui-segment color="red">Red</sui-segment>
          <sui-segment color="orange">Orange</sui-segment>
          <sui-segment color="yellow">Yellow</sui-segment>
          <sui-segment color="olive">Olive</sui-segment>
          <sui-segment color="green">Green</sui-segment>
          <sui-segment color="teal">Teal</sui-segment>
          <sui-segment color="blue">Blue</sui-segment>
          <sui-segment color="violet">Violet</sui-segment>
          <sui-segment color="purple">Purple</sui-segment>
          <sui-segment color="pink">Pink</sui-segment>
          <sui-segment color="brown">Brown</sui-segment>
          <sui-segment color="grey">Grey</sui-segment>
          <sui-segment color="black">Black</sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Emphasis"
        description="A segment can be formatted to appear more or less noticeable"
        :code="emphasisCode"
      >
        <div>
          <sui-segment>
            <p>I'm here to tell you something, and you will probably read me first.</p>
          </sui-segment>
          <sui-segment secondary>
            <p>I am pretty noticeable but you might check out other content before you look at me.</p>
          </sui-segment>
          <sui-segment tertiary>
            <p>If you notice me you must be looking very hard.</p>
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Circular"
        description="A segment can be circular"
        :code="circularCode"
      >
        <div>
          <sui-segment circular style="width: 175px; height: 175px;">
            <sui-header as="h2">
              Buy Now
              <sui-header-subheader>
                $10.99
              </sui-header-subheader>
            </sui-header>
          </sui-segment>
          <sui-segment inverted circular style="width: 175px; height: 175px;">
            <sui-header as="h2">
              Buy Now
              <sui-header-subheader>
                $10.99
              </sui-header-subheader>
            </sui-header>
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Clearing"
        description="A segment can clear floated content"
        :code="clearingCode"
      >
        <sui-segment clearing>
          <sui-button floated="right">Floated</sui-button>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Floated"
        description="A segment can appear to the left or right of other content"
        :code="floatedCode"
      >
        <div>
          <sui-segment floated="right">
            <p>This segment will appear to the right</p>
          </sui-segment>
          <sui-segment floated="left">
            <p>This segment will appear to the left</p>
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Text Alignment"
        description="A segment can have its text aligned to a side"
        :code="textAlignCode"
      >
        <div>
          <sui-segment textAlign="right">
            Right
          </sui-segment>
          <sui-segment textAlign="left">
            Left
          </sui-segment>
          <sui-segment textAlign="center">
            Center
          </sui-segment>
        </div>
      </doc-example>

      <doc-example
        title="Basic"
        description="A basic segment has no special formatting"
        :code="basicCode"
      >
        <sui-segment basic>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </sui-segment>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'SegmentDoc',
  components: { DocExample },
  setup() {
    const segmentCode = `<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>`
    const placeholderCode = `<sui-segment placeholder>
  <sui-header icon>
    <sui-icon name="file outline" />
    No documents are listed for this customer.
  </sui-header>
  <sui-button color="primary">Add Document</sui-button>
</sui-segment>`

    const raisedCode = `<sui-segment raised>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`

    const stackedCode = `<sui-segment stacked>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`

    const piledCode = `<sui-segment piled>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`

    const verticalCode = `<div>
  <sui-segment vertical>
    Te eum doming eirmod, nominati pertinacia argumentum ad his.
  </sui-segment>
  <sui-segment vertical>
    Pellentesque habitant morbi tristique senectus.
  </sui-segment>
  <sui-segment vertical>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
  </sui-segment>
</div>`

    const segmentsCode = `<sui-segment-group>
  <sui-segment><p>Top</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Bottom</p></sui-segment>
</sui-segment-group>`

    const nestedCode = `<sui-segment-group>
  <sui-segment>Top</sui-segment>
  <sui-segment-group>
    <sui-segment>Nested Top</sui-segment>
    <sui-segment>Nested Middle</sui-segment>
    <sui-segment>Nested Bottom</sui-segment>
  </sui-segment-group>
  <sui-segment-group horizontal>
    <sui-segment>Top</sui-segment>
    <sui-segment>Middle</sui-segment>
    <sui-segment>Bottom</sui-segment>
  </sui-segment-group>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`

    const horizontalCode = `<sui-segment-group horizontal>
  <sui-segment>Left</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Right</sui-segment>
</sui-segment-group>`

    const raisedSegmentsCode = `<sui-segment-group raised>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`

    const stackedSegmentsCode = `<sui-segment-group stacked>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`

    const piledSegmentsCode = `<sui-segment-group piled>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`

    const disabledCode = `<sui-segment disabled>Disabled content</sui-segment>`
    const loadingCode = `<sui-segment loading>Now Loading...</sui-segment>`

    const invertedCode = `<sui-segment inverted>
  <p>I'm here to tell you something, and you will probably read me first.</p>
</sui-segment>`

    const attachedCode = `<div>
  <sui-segment attached="top">
    <p>This segment is on top</p>
  </sui-segment>
  <sui-segment attached>
    <p>This segment is attached on both sides</p>
  </sui-segment>
  <sui-segment attached="bottom">
    <p>This segment is on bottom</p>
  </sui-segment>
</div>`

    const paddedCode = `<sui-segment padded>Padded content</sui-segment>`

    const fittedCode = `<div>
  <sui-segment fitted>
    <p>Fitted Segment</p>
  </sui-segment>
  <sui-segment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </sui-segment>
  <sui-segment fitted="vertically">
    <p>Vertically fitted segment</p>
  </sui-segment>
</div>`

    const compactCode = `<sui-segment compact>Compact content</sui-segment>`

    const coloredCode = `<div>
  <sui-segment color="red">Red</sui-segment>
  <sui-segment color="orange">Orange</sui-segment>
  <sui-segment color="yellow">Yellow</sui-segment>
  <sui-segment color="olive">Olive</sui-segment>
  <sui-segment color="green">Green</sui-segment>
  <sui-segment color="teal">Teal</sui-segment>
  <sui-segment color="blue">Blue</sui-segment>
  <sui-segment color="violet">Violet</sui-segment>
  <sui-segment color="purple">Purple</sui-segment>
  <sui-segment color="pink">Pink</sui-segment>
  <sui-segment color="brown">Brown</sui-segment>
  <sui-segment color="grey">Grey</sui-segment>
  <sui-segment color="black">Black</sui-segment>
</div>`

    const emphasisCode = `<div>
  <sui-segment>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </sui-segment>
  <sui-segment secondary>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </sui-segment>
  <sui-segment tertiary>
    <p>If you notice me you must be looking very hard.</p>
  </sui-segment>
</div>`

    const circularCode = `<div>
  <sui-segment circular style="width: 175px; height: 175px;">
    <sui-header as="h2">
      Buy Now
      <sui-header-subheader>
        $10.99
      </sui-header-subheader>
    </sui-header>
  </sui-segment>
  <sui-segment inverted circular style="width: 175px; height: 175px;">
    <sui-header as="h2">
      Buy Now
      <sui-header-subheader>
        $10.99
      </sui-header-subheader>
    </sui-header>
  </sui-segment>
</div>`

    const clearingCode = `<sui-segment clearing>
  <sui-button floated="right">Floated</sui-button>
</sui-segment>`

    const floatedCode = `<div>
  <sui-segment floated="right">
    <p>This segment will appear to the right</p>
  </sui-segment>
  <sui-segment floated="left">
    <p>This segment will appear to the left</p>
  </sui-segment>
</div>`

    const textAlignCode = `<div>
  <sui-segment textAlign="right">
    Right
  </sui-segment>
  <sui-segment textAlign="left">
    Left
  </sui-segment>
  <sui-segment textAlign="center">
    Center
  </sui-segment>
</div>`

    const basicCode = `<sui-segment basic>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`

    return {
      segmentCode,
      placeholderCode,
      raisedCode,
      stackedCode,
      piledCode,
      verticalCode,
      segmentsCode,
      nestedCode,
      horizontalCode,
      raisedSegmentsCode,
      stackedSegmentsCode,
      piledSegmentsCode,
      disabledCode,
      loadingCode,
      invertedCode,
      attachedCode,
      paddedCode,
      fittedCode,
      compactCode,
      coloredCode,
      emphasisCode,
      circularCode,
      clearingCode,
      floatedCode,
      textAlignCode,
      basicCode
    }
  }
})
</script>