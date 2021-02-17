<template>
  <div>
    <sui-segment vertical>
      <sui-container>
        <div class="intro">
          <sui-header as="h1">Button
          <sui-header-subheader>A button indicates a possible user action</sui-header-subheader>
          </sui-header>

          <sui-divider hidden></sui-divider>

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
        title="Button"
        description="A standard button"
        :code="buttonExample"
      >
        <sui-button>Follow</sui-button>
      </doc-example>

      <doc-example
        title="Emphasis"
        description="A button can be formatted to show different levels of emphasis"
        :code="emphasisExample"
      >
        <div>
          <sui-button primary>Primary</sui-button>
          <sui-button secondary>Secondary</sui-button>
        </div>
      </doc-example>

      <doc-example
        title="Animated"
        description="A button can animate to show hidden content"
        :code="animatedExample"
      >
        <sui-button animated>
          <sui-button-content visible>Next</sui-button-content>
          <sui-button-content hidden>
            <sui-icon name="arrow right" />
          </sui-button-content>
        </sui-button>
        <sui-button animated="vertical">
          <sui-button-content visible>
            <sui-icon name="shop" />
          </sui-button-content>
          <sui-button-content hidden>Shop</sui-button-content>
        </sui-button>
        <sui-button animated="fade">
          <sui-button-content visible>
            Sign-up for a Pro account
          </sui-button-content>
          <sui-button-content hidden>$12.99 a month</sui-button-content>
        </sui-button>
      </doc-example>

      <doc-example
        title="Labeled"
        description="A button can appear alongside a label"
        :code="labeledExample"
      >
        <sui-button labelPosition="right">
          <sui-button icon>
            <sui-icon name="heart" />
            Like
          </sui-button>
          <sui-label basic>2,048</sui-label>
        </sui-button>
        <sui-button labelPosition="left">
          <sui-label basic pointing="right">2,048</sui-label>
          <sui-button icon>
            <sui-icon name="heart" />
            Like
          </sui-button>
        </sui-button>
        <sui-button labelPosition="left">
          <sui-label basic>1,048</sui-label>
          <sui-button icon>
            <sui-icon name="fork" />
          </sui-button>
        </sui-button>
      </doc-example>
        
      <doc-example :code="labeledExample2">
        <sui-button labelPosition="right">
          <sui-button icon color="red">
            <sui-icon name="heart" />
            Like
          </sui-button>
          <sui-label basic pointing="left" color="red">
            1,048
          </sui-label>
        </sui-button>
        <sui-button labelPosition="right">
          <sui-button basic icon color="blue">
            <sui-icon name="fork" />
            Forks
          </sui-button>
          <sui-label basic pointing="left" color="blue">
            1,048
          </sui-label>
        </sui-button>
      </doc-example>

      <doc-example
        title="Icon"
        description="A button can have only an icon"
        :code="iconExample"
      >
        <sui-button icon>
          <sui-icon name="cloud" />
        </sui-button>
      </doc-example>

      <doc-example
        title="Labeled Icon"
        description="A button can use an icon as a label"
        :code="labeledIconExample"
      >
        <sui-button labeled icon>
          <sui-icon name="pause" />
          Pause
        </sui-button>
        <sui-button labeled="right" icon>
          <sui-icon name="right arrow" />
          Next
        </sui-button>
      </doc-example>

      <doc-example
        title="Basic"
        description="A basic button is less pronounced"
        :code="basicExample"
      >
        <sui-button basic>
          <sui-icon name="user" />
          Add Friend
        </sui-button>
      </doc-example>

      <doc-example :code="basicExample2">
        <sui-button basic primary>Primary</sui-button>
        <sui-button basic secondary>Secondary</sui-button>
        <sui-button basic positive>Positive</sui-button>
        <sui-button basic negative>Negative</sui-button>
      </doc-example>

      <doc-example :code="basicExample3">
        <sui-button basic color="red">Red</sui-button>
        <sui-button basic color="orange">Orange</sui-button>
        <sui-button basic color="yellow">Yellow</sui-button>
        <sui-button basic color="olive">Olive</sui-button>
        <sui-button basic color="green">Green</sui-button>
        <sui-button basic color="teal">Teal</sui-button>
        <sui-button basic color="blue">Blue</sui-button>
        <sui-button basic color="violet">Violet</sui-button>
        <sui-button basic color="purple">Purple</sui-button>
        <sui-button basic color="pink">Pink</sui-button>
        <sui-button basic color="brown">Brown</sui-button>
        <sui-button basic color="grey">Grey</sui-button>
        <sui-button basic color="black">Black</sui-button>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A button can be formatted to appear on dark backgrounds"
        :code="invertedExample"
      >
        <sui-segment inverted>
          <sui-button inverted>Standard</sui-button>
          <sui-button inverted primary>Primary</sui-button>
          <sui-button inverted secondary>Secondary</sui-button>
          <sui-button inverted color="red">Red</sui-button>
          <sui-button inverted color="orange">Orange</sui-button>
          <sui-button inverted color="yellow">Yellow</sui-button>
          <sui-button inverted color="olive">Olive</sui-button>
          <sui-button inverted color="green">Green</sui-button>
          <sui-button inverted color="teal">Teal</sui-button>
          <sui-button inverted color="blue">Blue</sui-button>
          <sui-button inverted color="violet">Violet</sui-button>
          <sui-button inverted color="purple">Purple</sui-button>
          <sui-button inverted color="pink">Pink</sui-button>
          <sui-button inverted color="brown">Brown</sui-button>
          <sui-button inverted color="grey">Grey</sui-button>
          <sui-button inverted color="black">Black</sui-button>
        </sui-segment>
      </doc-example>

      <doc-example :code="invertedExample2">
        <sui-segment inverted>
          <sui-button inverted basic>Basic</sui-button>
          <sui-button inverted basic primary>Primary</sui-button>
          <sui-button inverted basic secondary>Secondary</sui-button>
          <sui-button inverted basic color="red">Basic Red</sui-button>
          <sui-button inverted basic color="orange">Basic Orange</sui-button>
          <sui-button inverted basic color="yellow">Basic Yellow</sui-button>
          <sui-button inverted basic color="olive">Basic Olive</sui-button>
          <sui-button inverted basic color="green">Basic Green</sui-button>
          <sui-button inverted basic color="teal">Basic Teal</sui-button>
          <sui-button inverted basic color="blue">Basic Blue</sui-button>
          <sui-button inverted basic color="violet">Basic Violet</sui-button>
          <sui-button inverted basic color="purple">Basic Purple</sui-button>
          <sui-button inverted basic color="pink">Basic Pink</sui-button>
          <sui-button inverted basic color="brown">Basic Brown</sui-button>
          <sui-button inverted basic color="grey">Basic Grey</sui-button>
          <sui-button inverted basic color="black">Basic Black</sui-button>
        </sui-segment>
      </doc-example>

      <sui-header as="h2" dividing>Groups</sui-header>

      <doc-example
        title="Buttons"
        description="Buttons can exist together as a group"
        :code="buttonsExample"
      >
        <sui-button-group>
          <sui-button>One</sui-button>
          <sui-button>Two</sui-button>
          <sui-button>Three</sui-button>
        </sui-button-group>
      </doc-example>

      <doc-example
        title="Icon Buttons"
        description="Buttons can exist together as a group"
        :code="iconButtonsExample"
      >
        <sui-button-group icon>
          <sui-button><sui-icon name="align left" /></sui-button>
          <sui-button><sui-icon name="align center" /></sui-button>
          <sui-button><sui-icon name="align right" /></sui-button>
          <sui-button><sui-icon name="align justify" /></sui-button>
        </sui-button-group>
        <sui-button-group icon>
          <sui-button><sui-icon name="bold" /></sui-button>
          <sui-button><sui-icon name="underline" /></sui-button>
          <sui-button><sui-icon name="text width" /></sui-button>
        </sui-button-group>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Conditionals"
        description="Button groups can contain conditionals"
        :code="conditionalsExample"
      >
        <sui-button-group>
          <sui-button>Cancel</sui-button>
          <div class="or"></div>
          <sui-button positive>Save</sui-button>
        </sui-button-group>
      </doc-example>

      <doc-example :code="conditionalsExample2">
        <sui-button-group>
          <sui-button>Cancel</sui-button>
          <div class="or" data-text="ou"></div>
          <sui-button positive>Save</sui-button>
        </sui-button-group>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Active"
        description="A button can show it is currently the active user selection"
        :code="activeExample"
      >
        <sui-button active>
          <sui-icon name="user" />
          Follow
        </sui-button>
      </doc-example>

      <doc-example
        title="Disabled"
        description="A button can show it is currently unable to be interacted with"
        :code="disabledExample"
      >
        <sui-button disabled>
          <sui-icon name="user" />
          Followed
        </sui-button>
      </doc-example>

      <doc-example
        title="Loading"
        description="A button can show a loading indicator"
        :code="loadingExample"
      >
        <sui-button loading>Loading</sui-button>
        <sui-button basic loading>Loading</sui-button>
        <sui-button primary loading>Loading</sui-button>
        <sui-button secondary loading>Loading</sui-button>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Social"
        description="A button can be formatted to link to a social website"
        :code="socialExample"
      >
        <sui-button facebook>
          <sui-icon name="facebook" />
          Facebook
        </sui-button>
        <sui-button twitter>
          <sui-icon name="twitter" />
          Twitter
        </sui-button>
        <sui-button vk>
          <sui-icon name="vk" />
          VK
        </sui-button>
        <sui-button linkedin>
          <sui-icon name="linkedin" />
          LinkedIn
        </sui-button>
        <sui-button instagram>
          <sui-icon name="instagram" />
          Instagram
        </sui-button>
        <sui-button youtube>
          <sui-icon name="youtube" />
          YouTube
        </sui-button>
      </doc-example>

      <doc-example
        title="Size"
        description="Buttons can have assorted sizes"
        :code="sizeExample"
      >
        <div>
          <sui-button size="mini">Mini</sui-button>
          <sui-button size="tiny">Tiny</sui-button>
          <sui-button size="small">Small</sui-button>
          <sui-button size="medium">Medium</sui-button>
          <sui-button size="large">Large</sui-button>
          <sui-button size="big">Big</sui-button>
          <sui-button size="huge">Huge</sui-button>
          <sui-button size="massive">Massive</sui-button>
        </div>
      </doc-example>

      <doc-example
        title="Floated"
        description="A button can be aligned to the left or right of its container"
        :code="floatedExample"
      >
        <div>
          <sui-button floated="left">Left Floated</sui-button>
          <sui-button floated="right">Right Floated</sui-button>
        </div>
      </doc-example>

      <doc-example
        title="Colored"
        description="A button can have different colors"
        :code="coloredExample"
      >
        <div>
          <sui-button color="red">Red</sui-button>
          <sui-button color="orange">Orange</sui-button>
          <sui-button color="yellow">Yellow</sui-button>
          <sui-button color="olive">Olive</sui-button>
          <sui-button color="green">Green</sui-button>
          <sui-button color="teal">Teal</sui-button>
          <sui-button color="blue">Blue</sui-button>
          <sui-button color="violet">Violet</sui-button>
          <sui-button color="purple">Purple</sui-button>
          <sui-button color="pink">Pink</sui-button>
          <sui-button color="brown">Brown</sui-button>
          <sui-button color="grey">Grey</sui-button>
          <sui-button color="black">Black</sui-button>
        </div>
      </doc-example>

      <doc-example
        title="Compact"
        description="A button can reduce its padding to fit into tighter spaces"
        :code="compactExample"
      >
        <div>
          <sui-button compact>Compact</sui-button>
          <sui-button>Normal</sui-button>
        </div>
      </doc-example>

      <doc-example
        title="Toggle"
        description="A button can be formatted to toggle on and off"
        :code="toggleExample"
      >
        <sui-button toggle :active="active" @click="() => active = !active">Vote</sui-button>
      </doc-example>

      <doc-example
        title="Positive"
        description="A button can hint towards a positive consequence"
        :code="positiveExample"
      >
        <sui-button positive>Positive</sui-button>
      </doc-example>

      <doc-example
        title="Negative"
        description="A button can hint towards a negative consequence"
        :code="negativeExample"
      >
        <sui-button negative>Negative</sui-button>
      </doc-example>

      <doc-example
        title="Fluid"
        description="A button can take the width of its container"
        :code="fluidExample"
      >
        <sui-button fluid>Fluid</sui-button>
      </doc-example>

      <doc-example
        title="Circular"
        description="A button can be circular"
        :code="circularExample"
      >
        <sui-button circular icon>
          <sui-icon name="settings" />
        </sui-button>
      </doc-example>

      <doc-example :code="circularExample2">
        <div>
          <sui-button facebook circular icon>
            <sui-icon name="facebook" />
          </sui-button>
          <sui-button twitter circular icon>
            <sui-icon name="twitter" />
          </sui-button>
          <sui-button linkedin circular icon>
            <sui-icon name="linkedin" />
          </sui-button>
          <sui-button youtube circular icon>
            <sui-icon name="youtube" />
          </sui-button>
        </div>
      </doc-example>

      <doc-example
        title="Vertically Attached"
        description="A button can be attached to the top or bottom of other content"
        :code="attachedExample"
      >
        <div>
          <sui-button attached="top">Top</sui-button>
          <sui-segment attached>
            <img src="/src/assets/paragraph.png">
          </sui-segment>
          <sui-button attached="bottom">Bottom</sui-button>
        </div>
      </doc-example>

      <doc-example :code="attachedExample2">
        <div>
          <sui-button-group attached="top">
            <sui-button>One</sui-button>
            <sui-button>Two</sui-button>
          </sui-button-group>
          <sui-segment attached>
            <img src="/src/assets/paragraph.png">
          </sui-segment>
          <sui-button-group attached="bottom">
            <sui-button>One</sui-button>
            <sui-button>Two</sui-button>
          </sui-button-group>
        </div>
      </doc-example>

      <doc-example
        title="Horizontally Attached"
        description="A button can be attached to the left or right of other content"
        :code="horizontalAttachedExample"
      >
        <div>
          <sui-button attached="left">Left</sui-button>
          <sui-button attached="right">Right</sui-button>
        </div>
      </doc-example>

      <sui-header as="h2" dividing>Group Variations</sui-header>

      <doc-example
        title="Vertical Buttons"
        description="Groups can be formatted to appear vertically"
        :code="verticalButtonsExample"
      >
        <sui-button-group vertical>
          <sui-button>Feed</sui-button>
          <sui-button>Messages</sui-button>
          <sui-button>Events</sui-button>
          <sui-button>Photos</sui-button>
        </sui-button-group>
      </doc-example>

      <doc-example
        title="Labeled Icon Buttons"
        description="Groups can be formatted as labeled icons"
        :code="labeledIconButtonsExample"
      >
        <sui-button-group vertical labeled icon>
          <sui-button>
            <sui-icon name="pause" />
            Pause
          </sui-button>
          <sui-button>
            <sui-icon name="play" />
            Play
          </sui-button>
          <sui-button>
            <sui-icon name="shuffle" />
            Shuffle
          </sui-button>
        </sui-button-group>
      </doc-example>

      <doc-example
        title="Mixed Group"
        description="Groups can be formatted to use multiple button types together"
        :code="mixedGroupExample"
      >
        <sui-button-group>
          <sui-button labelPosition="left" icon>
            <sui-icon name="left chevron" />
            Back
          </sui-button>
          <sui-button>
            <sui-icon name="stop" />
            Stop
          </sui-button>
          <sui-button labelPosition="right" icon>
            <sui-icon name="right chevron" />
            Forward
          </sui-button>
        </sui-button-group>
      </doc-example>

      <doc-example
        title="Equal Width"
        description="Groups can have their widths divided evenly"
        :code="equalWidthExample"
      >
        <div>
          <sui-button-group :widths="5">
            <sui-button>Overview</sui-button>
            <sui-button>Specs</sui-button>
            <sui-button>Warranty</sui-button>
            <sui-button>Reviews</sui-button>
            <sui-button>Support</sui-button>
          </sui-button-group>
          <sui-divider />
          <sui-button-group :widths="3">
            <sui-button>Overview</sui-button>
            <sui-button>Specs</sui-button>
            <sui-button>Support</sui-button>
          </sui-button-group>
        </div>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocExample from "../components/DocExample.vue";

export default defineComponent({
  name: 'ButtonDoc',
  components: { DocExample },
  setup() {
   
    const active = ref(false)
    const toggle = () => active.value = !active.value

    const buttonExample = `<template>
  <sui-button>Follow</sui-button>
</template>`

    const emphasisExample = `<template>
  <div>
    <sui-button primary>Primary</sui-button>
    <sui-button secondary>Secondary</sui-button>
  </div>
</template>`

  const animatedExample = `<template>
  <div>
    <sui-button animated>
      <sui-button-content visible>Next</sui-button-content>
      <sui-button-content hidden>
        <sui-icon name="arrow right" />
      </sui-button-content>
    </sui-button>
    <sui-button animated="vertical">
      <sui-button-content visible>
        <sui-icon name="shop" />
      </sui-button-content>
      <sui-button-content hidden>Shop</sui-button-content>
    </sui-button>
    <sui-button animated="fade">
      <sui-button-content visible>
        Sign-up for a Pro account
      </sui-button-content>
      <sui-button-content hidden>$12.99 a month</sui-button-content>
    </sui-button>
  </div>
<template>`

  const labeledExample = `<template>
  <div>
    <sui-button labelPosition="right">
      <sui-button icon>
        <sui-icon name="heart" />
        Like
      </sui-button>
      <sui-label basic>2,048</sui-label>
    </sui-button>
    <sui-button labelPosition="left">
      <sui-label basic pointing="right">2,048</sui-label>
      <sui-button icon>
        <sui-icon name="heart" />
        Like
      </sui-button>
    </sui-button>
    <sui-button labelPosition="left">
      <sui-label basic>1,048</sui-label>
      <sui-button icon>
        <sui-icon name="fork" />
      </sui-button>
    </sui-button>
  </div>
<template>`

    const labeledExample2 = `<template>
  <div>
    <sui-button labelPosition="right">
      <sui-button icon color="red">
        <sui-icon name="heart" />
          Like
      </sui-button>
      <sui-label basic pointing="left" color="red">
        1,048
      </sui-label>
    </sui-button>
    <sui-button labelPosition="right">
      <sui-button basic icon color="blue">
        <sui-icon name="fork" />
          Forks
      </sui-button>
      <sui-label basic pointing="left" color="blue">
        1,048
      </sui-label>
    </sui-button>
  </div>
</template>
`

    const iconExample = `<template>
  <sui-button icon>
    <sui-icon name="cloud" />
  </sui-button>
</template>`

    const labeledIconExample = `<template>
  <div>
    <sui-button labeled icon>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button labeled="right" icon>
      <sui-icon name="right arrow" />
      Next
    </sui-button>
  <div>
</template>`

    const basicExample = `<template>
  <sui-button basic>
    <sui-icon name="user" />
    Add Friend
  </sui-button>
</template>`

    const basicExample2 = `<template>
  <div>
    <sui-button basic primary>Primary</sui-button>
    <sui-button basic secondary>Secondary</sui-button>
    <sui-button basic positive>Positive</sui-button>
    <sui-button basic negative>Negative</sui-button>
  </div>
</template>`

    const basicExample3 = `<template>
  <div>
    <sui-button basic color="red">Red</sui-button>
    <sui-button basic color="orange">Orange</sui-button>
    <sui-button basic color="yellow">Yellow</sui-button>
    <sui-button basic color="olive">Olive</sui-button>
    <sui-button basic color="green">Green</sui-button>
    <sui-button basic color="teal">Teal</sui-button>
    <sui-button basic color="blue">Blue</sui-button>
    <sui-button basic color="violet">Violet</sui-button>
    <sui-button basic color="purple">Purple</sui-button>
    <sui-button basic color="pink">Pink</sui-button>
    <sui-button basic color="brown">Brown</sui-button>
    <sui-button basic color="grey">Grey</sui-button>
    <sui-button basic color="black">Black</sui-button>
  </div>
</template>`

    const invertedExample = `<template>
  <sui-segment inverted>
    <sui-button inverted>Standard</sui-button>
    <sui-button inverted primary>Primary</sui-button>
    <sui-button inverted secondary>Secondary</sui-button>
    <sui-button inverted color="red">Red</sui-button>
    <sui-button inverted color="orange">Orange</sui-button>
    <sui-button inverted color="yellow">Yellow</sui-button>
    <sui-button inverted color="olive">Olive</sui-button>
    <sui-button inverted color="green">Green</sui-button>
    <sui-button inverted color="teal">Teal</sui-button>
    <sui-button inverted color="blue">Blue</sui-button>
    <sui-button inverted color="violet">Violet</sui-button>
    <sui-button inverted color="purple">Purple</sui-button>
    <sui-button inverted color="pink">Pink</sui-button>
    <sui-button inverted color="brown">Brown</sui-button>
    <sui-button inverted color="grey">Grey</sui-button>
    <sui-button inverted color="black">Black</sui-button>
  </sui-segment>
</template>`

    const invertedExample2 = `<template>
  <sui-segment inverted>
    <sui-button inverted basic>Basic</sui-button>
    <sui-button inverted basic primary>Primary</sui-button>
    <sui-button inverted basic secondary>Secondary</sui-button>
    <sui-button inverted basic color="red">Basic Red</sui-button>
    <sui-button inverted basic color="orange">Basic Orange</sui-button>
    <sui-button inverted basic color="yellow">Basic Yellow</sui-button>
    <sui-button inverted basic color="olive">Basic Olive</sui-button>
    <sui-button inverted basic color="green">Basic Green</sui-button>
    <sui-button inverted basic color="teal">Basic Teal</sui-button>
    <sui-button inverted basic color="blue">Basic Blue</sui-button>
    <sui-button inverted basic color="violet">Basic Violet</sui-button>
    <sui-button inverted basic color="purple">Basic Purple</sui-button>
    <sui-button inverted basic color="pink">Basic Pink</sui-button>
    <sui-button inverted basic color="brown">Basic Brown</sui-button>
    <sui-button inverted basic color="grey">Basic Grey</sui-button>
    <sui-button inverted basic color="black">Basic Black</sui-button>
  </sui-segment>
</template>`

    const buttonsExample = `<template>
  <sui-button-group>
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`

    const iconButtonsExample = `<template>
  <div>
    <sui-button-group icon>
      <sui-button><sui-icon name="align left" /></sui-button>
      <sui-button><sui-icon name="align center" /></sui-button>
      <sui-button><sui-icon name="align right" /></sui-button>
      <sui-button><sui-icon name="align justify" /></sui-button>
    </sui-button-group>
    <sui-button-group icon>
      <sui-button><sui-icon name="bold" /></sui-button>
      <sui-button><sui-icon name="underline" /></sui-button>
      <sui-button><sui-icon name="text width" /></sui-button>
    </sui-button-group>
  </div>
</template>`

    const conditionalsExample = `<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`

    const conditionalsExample2 = `<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or" data-text="ou"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`

    const activeExample = `<template>
  <sui-button active>
    <sui-icon name="user" />
    Follow
  </sui-button>
</template>`

    const disabledExample = `<template>
  <sui-button disabled>
    <sui-icon name="user" />
    Followed
  </sui-button>
</template>`

    const loadingExample = `<template>
  <div>
    <sui-button loading>Loading</sui-button>
    <sui-button basic loading>Loading</sui-button>
    <sui-button primary loading>Loading</sui-button>
    <sui-button secondary loading>Loading</sui-button>
  </div>
</template>`

    const socialExample = `<template>
  <div>
    <sui-button facebook>
      <sui-icon name="facebook" />
      Facebook
    </sui-button>
    <sui-button twitter>
      <sui-icon name="twitter" />
      Twitter
    </sui-button>
    <sui-button vk>
      <sui-icon name="vk" />
      VK
    </sui-button>
    <sui-button linkedin>
      <sui-icon name="linkedin" />
      LinkedIn
    </sui-button>
    <sui-button instagram>
      <sui-icon name="instagram" />
      Instagram
    </sui-button>
    <sui-button youtube>
      <sui-icon name="youtube" />
      YouTube
    </sui-button>
  </div>
</template>`

    const sizeExample = `<template>
  <div>
    <sui-button size="mini">Mini</sui-button>
    <sui-button size="tiny">Tiny</sui-button>
    <sui-button size="small">Small</sui-button>
    <sui-button size="medium">Medium</sui-button>
    <sui-button size="large">Large</sui-button>
    <sui-button size="big">Big</sui-button>
    <sui-button size="huge">Huge</sui-button>
    <sui-button size="massive">Massive</sui-button>
  </div>
</template>`

    const floatedExample = `<template>
  <div>
    <sui-button floated="left">Left Floated</sui-button>
    <sui-button floated="right">Right Floated</sui-button>
  </div>
</template>`

    const coloredExample = `<template>
  <div>
    <sui-button color="red">Red</sui-button>
    <sui-button color="orange">Orange</sui-button>
    <sui-button color="yellow">Yellow</sui-button>
    <sui-button color="olive">Olive</sui-button>
    <sui-button color="green">Green</sui-button>
    <sui-button color="teal">Teal</sui-button>
    <sui-button color="blue">Blue</sui-button>
    <sui-button color="violet">Violet</sui-button>
    <sui-button color="purple">Purple</sui-button>
    <sui-button color="pink">Pink</sui-button>
    <sui-button color="brown">Brown</sui-button>
    <sui-button color="grey">Grey</sui-button>
    <sui-button color="black">Black</sui-button>
  </div>
</template>`

    const compactExample = `<template>
  <div>
    <sui-button compact>Compact</sui-button>
    <sui-button>Normal</sui-button>
  </div>
</template>`

    const toggleExample = `<template>
  <sui-button toggle :active="active" @click="() => active = !active">Vote</sui-button>
</template>`

    const positiveExample = `<template>
  <sui-button positive>Positive</sui-button>
</template>`

    const negativeExample = `<template>
  <sui-button negative>Negative</sui-button>
</template>`

    const fluidExample = `<template>
  <sui-button fluid>Fluid</sui-button>
</template>`

    const circularExample = `<template>
  <sui-button circular icon>
    <sui-icon name="settings" />
  </sui-button>
</template>`

    const circularExample2 = `<template>
  <div>
    <sui-button facebook circular icon>
      <sui-icon name="facebook" />
    </sui-button>
    <sui-button twitter circular icon>
      <sui-icon name="twitter" />
    </sui-button>
    <sui-button linkedin circular icon>
      <sui-icon name="linkedin" />
    </sui-button>
    <sui-button youtube circular icon>
      <sui-icon name="youtube" />
    </sui-button>
  </div>
</template>`

    const attachedExample = `<template>
  <div>
    <sui-button attached="top">Top</sui-button>
    <sui-segment attached>
      <img src="/images/paragraph.png">
    </sui-segment>
    <sui-button attached="bottom">Bottom</sui-button>
  </div>
</template>`

    const attachedExample2 = `<template>
  <div>
    <sui-button-group attached="top">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
    <sui-segment attached>
      <img src="/images/paragraph.png">
    </sui-segment>
    <sui-button-group attached="bottom">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
  </div>
</template>`

    const horizontalAttachedExample = `<tempalte>
  <div>
    <sui-button attached="left">Left</sui-button>
    <sui-button attached="right">Right</sui-button>
  </div>
</template>`

    const verticalButtonsExample = `<template>
  <sui-button-group vertical>
    <sui-button>Feed</sui-button>
    <sui-button>Messages</sui-button>
    <sui-button>Events</sui-button>
    <sui-button>Photos</sui-button>
  </sui-button-group>
</template>`

    const labeledIconButtonsExample = `<template>
  <sui-button-group vertical labeled icon>
    <sui-button>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button>
      <sui-icon name="play" />
      Play
    </sui-button>
    <sui-button>
      <sui-icon name="shuffle" />
      Shuffle
    </sui-button>
  </sui-button-group>
</template>`

    const mixedGroupExample = `<template>
  <sui-button-group>
    <sui-button labelPosition="left" icon>
      <sui-icon name="left chevron" />
      Back
    </sui-button>
    <sui-button>
      <sui-icon name="stop" />
      Stop
    </sui-button>
    <sui-button labelPosition="right" icon>
      <sui-icon name="right chevron" />
      Forward
    </sui-button>
  </sui-button-group>
</template>`

    const equalWidthExample = `<template>
  <div>
    <sui-button-group :widths="5">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Warranty</sui-button>
      <sui-button>Reviews</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
    <sui-divider />
    <sui-button-group :widths="3">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
  </div>
</template>`

    return {
      active,
      toggle,
      buttonExample,
      emphasisExample,
      animatedExample,
      labeledExample,
      labeledExample2,
      iconExample,
      labeledIconExample,
      basicExample,
      basicExample2,
      basicExample3,
      invertedExample,
      invertedExample2,
      buttonsExample,
      iconButtonsExample,
      conditionalsExample,
      conditionalsExample2,
      activeExample,
      disabledExample,
      loadingExample,
      socialExample,
      sizeExample,
      floatedExample,
      coloredExample,
      compactExample,
      toggleExample,
      positiveExample,
      negativeExample,
      fluidExample,
      circularExample,
      circularExample2,
      attachedExample,
      attachedExample2,
      horizontalAttachedExample,
      verticalButtonsExample,
      labeledIconButtonsExample,
      mixedGroupExample,
      equalWidthExample
    }
  }
})
</script>

<style scoped>
.ui.container {
  margin-left: 3rem !important;
  width: auto !important;
  max-width: 960px !important;
}

.intro:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.main {
  padding: 2rem 0rem 7rem;
}

.main > h2 {
  margin: 5rem 0rem 3rem;
}

.example {
  padding: 2rem 0rem;
}
</style>