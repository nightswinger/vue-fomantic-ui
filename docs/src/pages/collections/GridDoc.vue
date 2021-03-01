<template>
  <div>
    <doc-page-header
      title="Grid"
      sub="A grid is used to harmonize negative space in a layout"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Grid"
        description="A basic grid"
        :code="gridCode"
      >
        <sui-grid>
          <sui-grid-column
            v-for="n in numbers"
            :key="n"
          >
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Divided"
        description="A grid can have dividers between its columns"
        :code="dividedCode"
      >
        <sui-grid :columns="3" divided>
          <sui-grid-row>
            <sui-grid-column>
              <sui-image src="/images/wireframe/media-paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/media-paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/media-paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>

          <sui-grid-row>
            <sui-grid-column>
              <sui-image src="/images/wireframe/media-paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/media-paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/media-paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Vertical Divided"
        description="A grid can have dividers between rows"
        :code="verticalDividedCode"
      >
        <sui-grid divided="vertically">
          <sui-grid-row :columns="2">
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>

          <sui-grid-row :columns="3">
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Celled"
        description="A grid can have rows divided into cells"
        :code="celledCode"
      >
        <sui-grid celled>
          <sui-grid-row>
            <sui-grid-column :width="3">
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column :width="13">
              <sui-image src="/images/wireframe/centered-paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>

          <sui-grid-row>
            <sui-grid-column :width="3">
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column :width="10">
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column :width="3">
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid> 
      </doc-example>

      <doc-example
        title="Internally Celled"
        description="A grid can have rows divisions only between internal rows"
        :code="internallyCelledCode"
      >
        <sui-grid celled="internally">
          <sui-grid-row>
            <sui-grid-column :width="3">
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column :width="13">
              <sui-image src="/images/wireframe/centered-paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>

          <sui-grid-row>
            <sui-grid-column :width="3">
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column :width="10">
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column :width="3">
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Rows"
        description="A row is a horizontal grouping of columns"
        :code="rowsCode"
      >
        <sui-grid :columns="3">
          <sui-grid-row>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>

          <sui-grid-row>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Columns"
        description="Columns each contain gutters giving them equal spacing from other columns"
        :code="columnsCode"
      >
        <sui-grid>
          <sui-grid-column :width="8">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :width="8">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :width="8">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :width="8">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Floated"
        description="A column can sit flush against the left or right edge of a row"
        :code="floatedCode"
      >
        <sui-grid>
          <sui-grid-column floated="left" :width="5">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column floated="right" :width="5">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Column Width"
        description="A column can vary in width taking up more than a single grid column"
        :code="columnWidthCode"
      >
        <sui-grid>
          <sui-grid-column :width="4">
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column :width="9">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :width="3">
            <sui-image src="/images/wireframe/media-paragraph.png" />
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Column Count"
        description="A grid can have a different number of columns per row"
        :code="columnCountCode"
      >
        <sui-grid>
          <sui-grid-row :columns="3">
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row :columns="4">
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Equal Width"
        description="Equal Width"
        :code="equalWidthCode"
      >
        <sui-grid columns="equal">
          <sui-grid-column>
            <sui-segment>1</sui-segment>
          </sui-grid-column>
          <sui-grid-column :width="8">
            <sui-segment>2</sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment>3</sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Stretched"
        description="A row can stretch its contents to take up the entire column height"
        :code="stretchedCode"
      >
        <sui-grid :columns="3" divided>
          <sui-grid-row stretched>
            <sui-grid-column>
              <sui-segment>1</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>1</sui-segment>
              <sui-segment>2</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>1</sui-segment>
              <sui-segment>2</sui-segment>
              <sui-segment>3</sui-segment>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Padded"
        description="A grid can preserve its vertical and horizontal gutters on first and last columns"
        :code="paddedCode"
      >
        <div>
          <sui-divider />
          <sui-grid padded :columns="2">
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-grid-column>
          </sui-grid>
        </div>
      </doc-example>

      <doc-example
        title="Relaxed"
        description="A grid can increase its gutters to allow for more negative space"
        :code="relaxedCode"
      >
        <sui-grid relaxed :columns="4">
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Colored"
        description="A row or column can be colored"
        :code="coloredCode"
      >
        <sui-grid padded :columns="5">
          <sui-grid-column color="red">Red</sui-grid-column>
          <sui-grid-column color="orange">Orange</sui-grid-column>
          <sui-grid-column color="yellow">Yellow</sui-grid-column>
          <sui-grid-column color="olive">Olive</sui-grid-column>
          <sui-grid-column color="green">Green</sui-grid-column>
          <sui-grid-column color="teal">Teal</sui-grid-column>
          <sui-grid-column color="blue">Blue</sui-grid-column>
          <sui-grid-column color="violet">Violet</sui-grid-column>
          <sui-grid-column color="purple">Purple</sui-grid-column>
          <sui-grid-column color="pink">Pink</sui-grid-column>
          <sui-grid-column color="brown">Brown</sui-grid-column>
          <sui-grid-column color="grey">Grey</sui-grid-column>
          <sui-grid-column color="black">Black</sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Centered"
        description="A grid can have its columns centered"
        :code="centeredCode"
      >
        <sui-grid centered :columns="2">
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-row centered :columns="4">
            <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Text Alignment"
        description="A grid, row, or column can specify its text alignment"
        :code="textAlignCode"
      >
        <sui-grid textAlign="center" :columns="3">
          <sui-grid-row>
            <sui-grid-column>
              <sui-menu vertical fluid>
                <sui-menu-item header>Cats</sui-menu-item>
              </sui-menu>
            </sui-grid-column>
            <sui-grid-column>
              <sui-menu vertical fluid>
                <sui-menu-item header>Dogs</sui-menu-item>
                <sui-menu-item>Poodle</sui-menu-item>
                <sui-menu-item>Cockerspaniel</sui-menu-item>
              </sui-menu>
            </sui-grid-column>
            <sui-grid-column>
              <sui-menu vertical fluid>
                <sui-menu-item header>Monkeys</sui-menu-item>
              </sui-menu>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Vertical Alignment"
        description="A grid, row, or column can specify its vertical alignment to have all its columns vertically centered"
        :code="verticalAlignCode"
      >
        <sui-grid verticalAlign="middle" :columns="4" centered>
          <sui-grid-row>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
              <br />
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/image.png" />
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <sui-header as="h2" dividing>Responsive Variations</sui-header>

      <doc-example
        title="Doubling"
        description="A grid can double its column width on tablet and mobile sizes"
        :code="doublingCode"
      >
        <sui-grid doubling :columns="5">
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
          <sui-grid-column>
            <sui-image src="/images/wireframe/image.png" />
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="stackable"
        description="A grid can have its columns stack on-top of each other after reaching mobile breakpoints"
        :code="stackableCode"
      >
        <sui-grid stackable :columns="2">
          <sui-grid-column>
            <sui-segemnt>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-segemnt>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segemnt>
              <sui-image src="/images/wireframe/paragraph.png" />
            </sui-segemnt>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Reversed"
        description="A grid or row can specify that its columns should reverse order at different device sizes"
        :code="reversedCode"
      >
        <sui-grid reversed="computer vertically">
          <sui-grid-row>
            <sui-grid-comlumn>Computer Row 3</sui-grid-comlumn>
          </sui-grid-row>
          <sui-grid-row>
            <sui-grid-comlumn>Computer Row 2</sui-grid-comlumn>
          </sui-grid-row>
          <sui-grid-row>
            <sui-grid-comlumn>Computer Row 1</sui-grid-comlumn>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Device Visibility"
        description="A columns or row can appear only for a specific device, or screen sizes"
        :code="deviceVisibilityCode"
      >
        <sui-grid>
          <sui-grid-row only="large screen" :columns="2">
            <sui-grid-column>
              <sui-segment>Large Screen</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Large Screen</sui-segment>
            </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row only="widescreen" :columns="2">
            <sui-grid-column>
              <sui-segment>Widescreen</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Widescreen</sui-segment>
            </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row only="mobile" :columns="2">
            <sui-grid-column>
              <sui-segment>Mobile</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Mobile</sui-segment>
            </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row :columns="3">
            <sui-grid-column only="computer">
              <sui-segment>Computer</sui-segment>
            </sui-grid-column>
            <sui-grid-column only="mobile">
              <sui-segment>Tablet and Mobile</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>All Sizes</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>All Sizes</sui-segment>
            </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row only="computer" :columns="4">
            <sui-grid-column>
              <sui-segment>Computer</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Computer</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Computer</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Computer</sui-segment>
            </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row only="tablet" :columns="3">
            <sui-grid-column>
              <sui-segment>Tablet</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Tablet</sui-segment>
            </sui-grid-column>
            <sui-grid-column>
              <sui-segment>Tablet</sui-segment>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Responsive Width"
        description="A column can specify a width for a specific device"
        :code="responsiveWidthCode"
      >
        <sui-grid>
          <sui-grid-column :mobile="16" :tablet="8" :computer="4">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :mobile="16" :tablet="8" :computer="4">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :mobile="16" :tablet="8" :computer="4">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :mobile="16" :tablet="8" :computer="4">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
          <sui-grid-column :mobile="16" :tablet="8" :computer="4">
            <sui-image src="/images/wireframe/paragraph.png" />
          </sui-grid-column>
        </sui-grid>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'GridDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const gridCode = `<sui-grid>
  <sui-grid-column
    v-for="n in numbers"
    :key="n"
  >
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`

    const dividedCode = `<sui-grid :columns="3" divided>
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const verticalDividedCode = `<sui-grid divided="vertically">
  <sui-grid-row :columns="2">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row :columns="3">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const celledCode = `<sui-grid celled>
  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="13">
      <sui-image src="/images/wireframe/centered-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="10">
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const internallyCelledCode = `<sui-grid celled="internally">
  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="13">
      <sui-image src="/images/wireframe/centered-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="10">
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const rowsCode = `<sui-grid :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const columnsCode = `<sui-grid>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`

    const floatedCode = `<sui-grid>
  <sui-grid-column floated="left" :width="5">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column floated="right" :width="5">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`

    const columnWidthCode = `<sui-grid>
  <sui-grid-column :width="4">
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column :width="9">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="3">
    <sui-image src="/images/wireframe/media-paragraph.png" />
  </sui-grid-column>
</sui-grid>`

    const columnCountCode = `<sui-grid>
  <sui-grid-row :columns="3">
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row :columns="4">
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const equalWidthCode = `<sui-grid columns="equal">
  <sui-grid-column>
    <sui-segment>1</sui-segment>
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-segment>2</sui-segment>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment>3</sui-segment>
  </sui-grid-column>
</sui-grid>`

    const stretchedCode = `<sui-grid :columns="3" divided>
  <sui-grid-row stretched>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
      <sui-segment>2</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
      <sui-segment>2</sui-segment>
      <sui-segment>3</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const paddedCode = `<div>
  <sui-divider />
  <sui-grid padded :columns="2">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid>
</div>`

    const relaxedCode = `<sui-grid relaxed :columns="4">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`

    const coloredCode = `<sui-grid padded :columns="5">
  <sui-grid-column color="red">Red</sui-grid-column>
  <sui-grid-column color="orange">Orange</sui-grid-column>
  <sui-grid-column color="yellow">Yellow</sui-grid-column>
  <sui-grid-column color="olive">Olive</sui-grid-column>
  <sui-grid-column color="green">Green</sui-grid-column>
  <sui-grid-column color="teal">Teal</sui-grid-column>
  <sui-grid-column color="blue">Blue</sui-grid-column>
  <sui-grid-column color="violet">Violet</sui-grid-column>
  <sui-grid-column color="purple">Purple</sui-grid-column>
  <sui-grid-column color="pink">Pink</sui-grid-column>
  <sui-grid-column color="brown">Brown</sui-grid-column>
  <sui-grid-column color="grey">Grey</sui-grid-column>
  <sui-grid-column color="black">Black</sui-grid-column>
</sui-grid>`

    const centeredCode = `<sui-grid centered :columns="2">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-row centered :columns="4">
    <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const textAlignCode = `<sui-grid textAlign="center" :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Cats</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Dogs</sui-menu-item>
        <sui-menu-item>Poodle</sui-menu-item>
        <sui-menu-item>Cockerspaniel</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Monkeys</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const verticalAlignCode = `<sui-grid verticalAlign="middle" :columns="4" centered>
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
      <br />
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const doublingCode = `<sui-grid doubling :columns="5">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`

    const stackableCode = `<sui-grid stackable :columns="2">
  <sui-grid-column>
    <sui-segemnt>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segemnt>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segemnt>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segemnt>
  </sui-grid-column>
</sui-grid>`

    const reversedCode = `<sui-grid reversed="computer vertically">
  <sui-grid-row>
    <sui-grid-comlumn>Computer Row 3</sui-grid-comlumn>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-comlumn>Computer Row 2</sui-grid-comlumn>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-comlumn>Computer Row 1</sui-grid-comlumn>
  </sui-grid-row>
</sui-grid>`

    const deviceVisibilityCode = `<sui-grid>
  <sui-grid-row only="large screen" :columns="2">
    <sui-grid-column>
      <sui-segment>Large Screen</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Large Screen</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="widescreen" :columns="2">
    <sui-grid-column>
      <sui-segment>Widescreen</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Widescreen</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="mobile" :columns="2">
    <sui-grid-column>
      <sui-segment>Mobile</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Mobile</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row :columns="3">
    <sui-grid-column only="computer">
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column only="mobile">
      <sui-segment>Tablet and Mobile</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>All Sizes</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>All Sizes</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="computer" :columns="4">
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="tablet" :columns="3">
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`

    const responsiveWidthCode = `<sui-grid>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`

    return {
      numbers,
      gridCode,
      dividedCode,
      verticalDividedCode,
      celledCode,
      internallyCelledCode,
      rowsCode,
      columnsCode,
      floatedCode,
      columnWidthCode,
      columnCountCode,
      equalWidthCode,
      stretchedCode,
      paddedCode,
      relaxedCode,
      coloredCode,
      centeredCode,
      textAlignCode,
      verticalAlignCode,
      doublingCode,
      stackableCode,
      reversedCode,
      deviceVisibilityCode,
      responsiveWidthCode
    }
  }
})
</script>