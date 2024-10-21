<template>
  <div>
    <doc-page-header
      title="Popup"
      sub="A popup displays additional information on top of a page"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Popup"
        description="An element can specify popup content to appear"
        :code="popupCode"
      >
        <sui-button icon ref="popupTrigger">
          <sui-icon name="add" />
        </sui-button>
        <sui-popup :trigger="popupTrigger">
          Add users to your feed
        </sui-popup>
      </doc-example>

      <doc-example
        title="Titled"
        description="An element can specify popup content with a title"
        :code="titledCode"
      >
        <sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
        <sui-image avatar src="/images/avatar/small/stevie.jpg" ref="titledTrigger2" />
        <sui-image avatar src="/images/avatar/small/matt.jpg" ref="titledTrigger3" />
        <sui-popup
          :trigger="titledTrigger1"
          header="Elliot Fu"
          content="Elliot has been a member since July 2012"
        />
        <sui-popup
          :trigger="titledTrigger2"
          header="Stevie Feliciano"
          content="Stevie has been a member since August 2013"
        />
        <sui-popup
          :trigger="titledTrigger3"
          header="Matt"
          content="Matt has been a member since July 2014"
        />
      </doc-example>

      <doc-example
        title="Trigger"
        description="A trigger can be complex element"
        :code="triggerCode"
      >
        <sui-card ref="triggerTriger">
          <sui-image src="/images/movies/totoro-horizontal.jpg" />
          <sui-card-content>
            <sui-card-header>My Neighbor Totoro</sui-card-header>
            <sui-card-description>
              Two sisters move to the country with their father in order to be
              closer to their hospitalized mother, and discover the surrounding
              trees are inhabited by magical spirits.
            </sui-card-description>
          </sui-card-content>
        </sui-card>
        <sui-popup
          :trigger="triggerTriger"
          header="User Rating"
        >
          <sui-rating icon="star" :defaultRating="3" :maxRating="4" />
        </sui-popup>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Basic"
        description="A popup can provide more basic formatting"
        :code="basicCode"
      >
        <sui-button icon ref="basicTrigger">
          <sui-icon name="add" />
        </sui-button>
        <sui-popup
          :trigger="basicTrigger"
          basic
          content="The default theme's basic popup removes the pointing arrow."
        />
      </doc-example>

      <doc-example
        title="Position"
        description="A popup can be position around its trigger"
        :code="positionCode"
      >
        <sui-button ref="positionTrigger1">Top Left</sui-button>
        <sui-button ref="positionTrigger2">Top Center</sui-button>
        <sui-button ref="positionTrigger3">Top Right</sui-button>

        <sui-divider />

        <sui-button ref="positionTrigger4">Bottom Left</sui-button>
        <sui-button ref="positionTrigger5">Bottom Center</sui-button>
        <sui-button ref="positionTrigger6">Bottom Right</sui-button>

        <sui-divider />

        <sui-button ref="positionTrigger7">Right Center</sui-button>
        <sui-button ref="positionTrigger8">Left Center</sui-button>

        <sui-popup :trigger="positionTrigger1" position="top left" content="I am positioned to the top left" />
        <sui-popup :trigger="positionTrigger2" position="top center" content="I am positioned to the top center" />
        <sui-popup :trigger="positionTrigger3" position="top right" content="I am positioned to the top right" />
        <sui-popup :trigger="positionTrigger4" position="bottom left" content="I am positioned to the bottom left" />
        <sui-popup :trigger="positionTrigger5" position="bottom center" content="I am positioned to the bottom center" />
        <sui-popup :trigger="positionTrigger6" position="bottom right" content="I am positioned to the bottom right" />
        <sui-popup :trigger="positionTrigger7" position="right center" content="I am positioned to the right center" />
        <sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />
      </doc-example>

      <doc-example
        title="Flowing"
        description="A popup can have no maximum width and continue to flow to fit its content"
        :code="flowingCode"
      >
        <sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
        <sui-popup :trigger="flowingTrigger" flowing>
          <sui-grid centered divided :columns="3">
            <sui-grid-column textAlign="center">
              <sui-header as="h4">Basic Plan</sui-header>
              <p>
                <b>2</b> projects, $10 a month
              </p>
              <sui-button>Choose</sui-button>
            </sui-grid-column>
            <sui-grid-column textAlign="center">
              <sui-header as="h4">Business Plan</sui-header>
              <p>
                <b>5</b> projects, $20 a month
              </p>
              <sui-button>Choose</sui-button>
            </sui-grid-column>
            <sui-grid-column textAlign="center">
              <sui-header as="h4">Premium Plan</sui-header>
              <p>
                <b>8</b> projects, $25 a month
              </p>
              <sui-button>Choose</sui-button>
            </sui-grid-column>
          </sui-grid>
        </sui-popup>
      </doc-example>

      <doc-example
        title="Size"
        description="A popup can vary in size"
        :code="sizeCode"
      >
        <sui-icon name="heart" circular link ref="sizeTrigger1" />
        <sui-icon name="heart" circular link ref="sizeTrigger2" />
        <sui-icon name="heart" circular link ref="sizeTrigger3" />
        <sui-icon name="heart" circular link ref="sizeTrigger4" />
        <sui-icon name="heart" circular link ref="sizeTrigger5" />
      
        <sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
        <sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
        <sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
        <sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
        <sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />
      </doc-example>

      <doc-example
        title="Wide"
        description="A popup can be extra wide to allow for longer content"
        :code="wideCode"
      >
        <sui-icon name="heart" circular ref="wideTrigger1" />
        <sui-icon name="heart" circular ref="wideTrigger2" />
        <sui-icon name="heart" circular ref="wideTrigger3" />

        <sui-popup :trigger="wideTrigger1">
          Hello. This is a regular pop-up which does not allow for lots of content.
          You cannot fit a lot of words here as the paragraphs will be pretty
          narrow.
        </sui-popup>
        <sui-popup :trigger="wideTrigger2" wide>
          Hello. This is a wide pop-up which allows for lots of content with
          additional space. You can fit a lot of words here and the paragraphs will
          be pretty wide.
        </sui-popup>
        <sui-popup :trigger="wideTrigger3" wide="very">
          Hello. This is a very wide pop-up which allows for lots of content with
          additional space. You can fit a lot of words here and the paragraphs will
          be pretty wide.
        </sui-popup>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A popup can have its colors inverted"
        :code="invertedCode"
      >
        <sui-icon name="heart" circular ref="invertedTrigger1" />
        <sui-button icon ref="invertedTrigger2">
          <sui-icon name="add" />
        </sui-button>

        <sui-popup
          :trigger="invertedTrigger1"
          content="Hello. This is an inverted popup"  
          inverted
        />
        <sui-popup
          :trigger="invertedTrigger2"
          content="Hello. This is an inverted popup"
          inverted
        />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue';
import DocExample from '../../components/DocExample.vue';

export default defineComponent({
  name: 'PopupDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const popupTrigger = ref(null)
    const popupCode = `<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`

    const titledTrigger1 = ref(null)
    const titledTrigger2 = ref(null)
    const titledTrigger3 = ref(null)
    const titledCode = `<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
<sui-image avatar src="/images/avatar/small/stevie.jpg" ref="titledTrigger2" />
<sui-image avatar src="/images/avatar/small/matt.jpg" ref="titledTrigger3" />
<sui-popup
  :trigger="titledTrigger1"
  header="Elliot Fu"
  content="Elliot has been a member since July 2012"
/>
<sui-popup
  :trigger="titledTrigger2"
  header="Stevie Feliciano"
  content="Stevie has been a member since August 2013"
/>
<sui-popup
  :trigger="titledTrigger3"
  header="Matt"
  content="Matt has been a member since July 2014"
/>`

    const triggerTriger = ref(null)
    const triggerCode = `<sui-card ref="triggerTriger">
  <sui-image src="/images/movies/totoro-horizontal.jpg" />
  <sui-card-content>
    <sui-card-header>My Neighbor Totoro</sui-card-header>
    <sui-card-description>
      Two sisters move to the country with their father in order to be
      closer to their hospitalized mother, and discover the surrounding
      trees are inhabited by magical spirits.
    </sui-card-description>
  </sui-card-content>
</sui-card>
<sui-popup
  :trigger="triggerTriger"
  header="User Rating"
>
  <sui-rating icon="star" :defaultRating="3" :maxRating="4" />
</sui-popup>`

    const basicTrigger = ref(null)
    const basicCode = `<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`

    const wideTrigger1 = ref(null)
    const wideTrigger2 = ref(null)
    const wideTrigger3 = ref(null)
    const wideCode = `<sui-icon name="heart" circular ref="wideTrigger1" />
<sui-icon name="heart" circular ref="wideTrigger2" />
<sui-icon name="heart" circular ref="wideTrigger3" />

<sui-popup :trigger="wideTrigger1">
  Hello. This is a regular pop-up which does not allow for lots of content.
  You cannot fit a lot of words here as the paragraphs will be pretty
  narrow.
</sui-popup>
<sui-popup :trigger="wideTrigger2" wide>
  Hello. This is a wide pop-up which allows for lots of content with
  additional space. You can fit a lot of words here and the paragraphs will
  be pretty wide.
</sui-popup>
<sui-popup :trigger="wideTrigger3" wide="very">
  Hello. This is a very wide pop-up which allows for lots of content with
  additional space. You can fit a lot of words here and the paragraphs will
  be pretty wide.
</sui-popup>`

    const positionTrigger1 = ref(null)
    const positionTrigger2 = ref(null)
    const positionTrigger3 = ref(null)
    const positionTrigger4 = ref(null)
    const positionTrigger5 = ref(null)
    const positionTrigger6 = ref(null)
    const positionTrigger7 = ref(null)
    const positionTrigger8 = ref(null)
    const positionCode = `<sui-button ref="positionTrigger1">Top Left</sui-button>
<sui-button ref="positionTrigger2">Top Center</sui-button>
<sui-button ref="positionTrigger3">Top Right</sui-button>

<sui-divider />

<sui-button ref="positionTrigger4">Bottom Left</sui-button>
<sui-button ref="positionTrigger5">Bottom Center</sui-button>
<sui-button ref="positionTrigger6">Bottom Right</sui-button>

<sui-divider />

<sui-button ref="positionTrigger7">Right Center</sui-button>
<sui-button ref="positionTrigger8">Left Center</sui-button>

<sui-popup :trigger="positionTrigger1" position="top left" content="I am positioned to the top left" />
<sui-popup :trigger="positionTrigger2" position="top center" content="I am positioned to the top center" />
<sui-popup :trigger="positionTrigger3" position="top right" content="I am positioned to the top right" />
<sui-popup :trigger="positionTrigger4" position="bottom left" content="I am positioned to the bottom left" />
<sui-popup :trigger="positionTrigger5" position="bottom center" content="I am positioned to the bottom center" />
<sui-popup :trigger="positionTrigger6" position="bottom right" content="I am positioned to the bottom right" />
<sui-popup :trigger="positionTrigger7" position="right center" content="I am positioned to the right center" />
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`

    const flowingTrigger = ref(null)
    const flowingCode = `<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
<sui-popup :trigger="flowingTrigger" flowing>
  <sui-grid centered divided :columns="3">
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Basic Plan</sui-header>
      <p>
        <b>2</b> projects, $10 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Business Plan</sui-header>
      <p>
        <b>5</b> projects, $20 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Premium Plan</sui-header>
      <p>
        <b>8</b> projects, $25 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
  </sui-grid>
</sui-popup>`

    const sizeTrigger1 = ref(null)
    const sizeTrigger2 = ref(null)
    const sizeTrigger3 = ref(null)
    const sizeTrigger4 = ref(null)
    const sizeTrigger5 = ref(null)
    const sizeCode = `<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`

    const invertedTrigger1 = ref(null)
    const invertedTrigger2 = ref(null)
    const invertedCode = `<sui-icon name="heart" circular ref="invertedTrigger1" />
<sui-button icon ref="invertedTrigger2">
  <sui-icon name="add" />
</sui-button>

<sui-popup
  :trigger="invertedTrigger1"
  content="Hello. This is an inverted popup"  
  inverted
/>
<sui-popup
  :trigger="invertedTrigger2"
  content="Hello. This is an inverted popup"
  inverted
/>`

    return {
      popupTrigger,
      popupCode,
      titledTrigger1,
      titledTrigger2,
      titledTrigger3,
      titledCode,
      triggerTriger,
      triggerCode,
      basicTrigger,
      basicCode,
      wideTrigger1,
      wideTrigger2,
      wideTrigger3,
      wideCode,
      positionTrigger1,
      positionTrigger2,
      positionTrigger3,
      positionTrigger4,
      positionTrigger5,
      positionTrigger6,
      positionTrigger7,
      positionTrigger8,
      positionCode,
      flowingTrigger,
      flowingCode,
      sizeTrigger1,
      sizeTrigger2,
      sizeTrigger3,
      sizeTrigger4,
      sizeTrigger5,
      sizeCode,
      invertedTrigger1,
      invertedTrigger2,
      invertedCode
    }
  }
})
</script>