<template>
  <div>
    <doc-page-header
      title="Slider"
      sub="A slider allows users to select values within a range"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Slider"
        description="A standard slider"
        :code="sliderCode"
      >
        <sui-slider v-model="slider1" />
        {{ slider1 }}
      </doc-example>

      <doc-example
        title="Labeled Slider"
        description="A slider that show its labels"
        :code="labeledSliderCode"
      >
        <sui-slider labeled v-model="slider2" />
      </doc-example>

      <doc-example
        title="Labeled Ticked Slider"
        description="A slider that show its labels and ticks"
        :code="labeledTickedCode"
      >
        <sui-slider labeled="ticked" v-model="slider3" />
      </doc-example>

      <doc-example
        title="Custom Interpreted Labels"
        description="You can provide a function which returns a custom label according to the label value"
        :code="customLabelsCode"
      >
        <sui-slider
          v-model="slider4"
          labeled="ticked"
          :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
          :max="20"
        />
      </doc-example>

      <doc-example
        title="Step"
        description="A slider can change the default step increment"
        :code="stepCode"
      >
        <sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />
        {{ slider5 }}
      </doc-example>

      <doc-example
        title="Range"
        description="A range slider which allow you to select a range between two values"
        :code="rangeCode"
      >
        <sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />
        {{ slider6 }}
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Disabled"
        description="A slider can appear disabled"
        :code="disabledCode"
      >
        <sui-slider disabled v-model="slider7" />
      </doc-example>

      <doc-example
        title="Inverted"
        description="A slider can be inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-slider inverted v-model="slider8" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Reversed"
        description="A slider can be reversed"
        :code="reversedCode"
      >
        <sui-slider reversed v-model="slider9" />
        {{ slider9 }}
      </doc-example>

      <doc-example
        title="Vertical"
        description="A slider can be vertical"
        :code="verticalCode"
      >
        <sui-slider vertical v-model="slider10" :max="20" />
        {{ slider10 }}
      </doc-example>

      <doc-example
        title="Colored"
        description="A slider can be different colors"
        :code="coloredCode"
      >
        <sui-slider color="red" v-model="redSlider" />
        <sui-slider color="orange" v-model="orangeSlider" />
        <sui-slider color="yellow" v-model="yellowSlider" />
        <sui-slider color="olive" v-model="oliveSlider" />
        <sui-slider color="green" v-model="greenSlider" />
        <sui-slider color="teal" v-model="tealSlider" />
        <sui-slider color="blue" v-model="blueSlider" />
        <sui-slider color="violet" v-model="violetSlider" />
        <sui-slider color="purple" v-model="purpleSlider" />
        <sui-slider color="pink" v-model="pinkSlider" />
        <sui-slider color="brown" v-model="brownSlider" />
        <sui-slider color="grey" v-model="greySlider" />
        <sui-slider color="black" v-model="blackSlider" />
      </doc-example>

      <doc-example
        title="Inverted Colored"
        description="A slider can be different colors while inverted"
        :code="invertedColoredCode"
      >
        <sui-segment inverted>
          <sui-slider inverted color="red" v-model="redSlider" />
          <sui-slider inverted color="orange" v-model="orangeSlider" />
          <sui-slider inverted color="yellow" v-model="yellowSlider" />
          <sui-slider inverted color="olive" v-model="oliveSlider" />
          <sui-slider inverted color="green" v-model="greenSlider" />
          <sui-slider inverted color="teal" v-model="tealSlider" />
          <sui-slider inverted color="blue" v-model="blueSlider" />
          <sui-slider inverted color="violet" v-model="violetSlider" />
          <sui-slider inverted color="purple" v-model="purpleSlider" />
          <sui-slider inverted color="pink" v-model="pinkSlider" />
          <sui-slider inverted color="brown" v-model="brownSlider" />
          <sui-slider inverted color="grey" v-model="greySlider" />
          <sui-slider inverted color="black" v-model="blackSlider" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Size"
        description="A slider can have different sizes"
        :code="sizeCode"
      >
        <sui-slider size="small" color="red" v-model="smallSlider" />
        <sui-slider size="large" color="yellow" v-model="largeSlider" />
        <sui-slider size="big" color="olive" v-model="bigSlider" />
      </doc-example>

      <sui-header as="h2" dividing>Properties</sui-header>

      <sui-table celled>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Name</sui-table-header-cell>
            <sui-table-header-cell>Type</sui-table-header-cell>
            <sui-table-header-cell>Default</sui-table-header-cell>
            <sui-table-header-cell>Description</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="prop in properties" :key="prop.name">
            <sui-table-cell>{{ prop.name }}</sui-table-cell>
            <sui-table-cell>{{ prop.type }}</sui-table-cell>
            <sui-table-cell>{{ prop.default }}</sui-table-cell>
            <sui-table-cell>{{ prop.description }}</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>

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
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue';
import DocExample from '../../components/DocExample.vue';

export default defineComponent({
  name: 'SliderDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const slider1 = ref(5)
    const sliderCode = `<sui-slider v-model="slider1" />`

    const slider2 = ref(4)
    const labeledSliderCode = `<sui-slider labeled v-model="slider2" />`

    const slider3 = ref(6)
    const labeledTickedCode = `<sui-slider labeled="ticked" v-model="slider3" />`

    const slider4 = ref(0)
    const customLabelsCode = `<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`

    const slider5 = ref(40)
    const stepCode = `<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />`

    const slider6 = ref([])
    slider6.value.push(20,60)
    const rangeCode = `<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />`

    const slider7 = ref(7)
    const disabledCode = `<sui-slider disabled v-model="slider7" />`

    const slider8 = ref(8)
    const invertedCode = `<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`

    const slider9 = ref(3)
    const reversedCode = `<sui-slider reversed v-model="slider9" />`

    const slider10 = ref(18)
    const verticalCode = `<sui-slider vertical v-model="slider10" :max="20" />`

    const redSlider = ref(5)
    const orangeSlider = ref(5)
    const yellowSlider = ref(5)
    const oliveSlider = ref(5)
    const greenSlider = ref(5)
    const tealSlider = ref(5)
    const blueSlider = ref(5)
    const violetSlider = ref(5)
    const purpleSlider = ref(5)
    const pinkSlider = ref(5)
    const brownSlider = ref(5)
    const greySlider = ref(5)
    const blackSlider = ref(5)

    const coloredCode = `<sui-slider color="red" v-model="redSlider" />
<sui-slider color="orange" v-model="orangeSlider" />
<sui-slider color="yellow" v-model="yellowSlider" />
<sui-slider color="olive" v-model="oliveSlider" />
<sui-slider color="green" v-model="greenSlider" />
<sui-slider color="teal" v-model="tealSlider" />
<sui-slider color="blue" v-model="blueSlider" />
<sui-slider color="violet" v-model="violetSlider" />
<sui-slider color="purple" v-model="purpleSlider" />
<sui-slider color="pink" v-model="pinkSlider" />
<sui-slider color="brown" v-model="brownSlider" />
<sui-slider color="grey" v-model="greySlider" />
<sui-slider color="black" v-model="blackSlider" />`

    const invertedColoredCode = `<sui-segment inverted>
  <sui-slider inverted color="red" v-model="redSlider" />
  <sui-slider inverted color="orange" v-model="orangeSlider" />
  <sui-slider inverted color="yellow" v-model="yellowSlider" />
  <sui-slider inverted color="olive" v-model="oliveSlider" />
  <sui-slider inverted color="green" v-model="greenSlider" />
  <sui-slider inverted color="teal" v-model="tealSlider" />
  <sui-slider inverted color="blue" v-model="blueSlider" />
  <sui-slider inverted color="violet" v-model="violetSlider" />
  <sui-slider inverted color="purple" v-model="purpleSlider" />
  <sui-slider inverted color="pink" v-model="pinkSlider" />
  <sui-slider inverted color="brown" v-model="brownSlider" />
  <sui-slider inverted color="grey" v-model="greySlider" />
  <sui-slider inverted color="black" v-model="blackSlider" />
</sui-segment>`

    const smallSlider = ref(5)
    const largeSlider = ref(5)
    const bigSlider = ref(5)

    const sizeCode = `<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`

    const properties = [
      { name: 'color', type: 'string', default: '', description: 'A slider can have different colors' },
      { name: 'disabled', type: 'boolean', default: false, description: 'When present, it specifies that the component should be disabled.' },
      { name: 'inverted', type: 'boolean', default: false, description: 'A slider can be formatted to appear on dark backgrounds.' },
      { name: 'labeled', type: 'boolean|string', default: false, description: 'A slider can show its labels.' },
      { name: 'labels', type: 'string[]', default: '', description: 'A slider can have a custom label according to the label value.' },
      { name: 'max', type: 'number', default: 10, description: 'Maximum boundary value.' },
      { name: 'min', type: 'number', default: 0, description: 'Mininum boundary value.' },
      { name: 'modelValue', type: 'number|number[]', default: 0, description: 'A value of component.' },
      { name: 'range', type: 'boolean', default: false, description: 'When specified, allows two boundary values to be picked.' },
      { name: 'reversed', type: 'boolean', default: false, description: 'A slider can be reversed.' },
      { name: 'size', type: 'string', default: '', description: 'A slider can have different sizes.' },
      { name: 'step', type: 'number', default: 1, description: 'Step factor to increment/decrement the value.' },
      { name: 'vertical', type: 'boolean', default: false, description: 'When specified, orientation of the slider becomes vertical.' },
      { name: 'verticalHeight', type: 'number|string', default: 200, description: 'Height of the vertical slider.' }
    ]

    const events = [
      { name: 'change', description: 'Callback to invoke on value change.' },
      { name: 'slideend', description: 'Callback to invoke when slide end.' }
    ]

    return {
      slider1,
      sliderCode,
      slider2,
      labeledSliderCode,
      slider3,
      labeledTickedCode,
      slider4,
      customLabelsCode,
      slider5,
      stepCode,
      slider6,
      rangeCode,
      slider7,
      disabledCode,
      slider8,
      invertedCode,
      slider9,
      reversedCode,
      slider10,
      verticalCode,
      redSlider,
      orangeSlider,
      yellowSlider,
      oliveSlider,
      greenSlider,
      tealSlider,
      blueSlider,
      violetSlider,
      purpleSlider,
      pinkSlider,
      brownSlider,
      greySlider,
      blackSlider,
      coloredCode,
      invertedColoredCode,
      smallSlider,
      largeSlider,
      bigSlider,
      sizeCode,
      properties,
      events
    }
  }
})
</script>