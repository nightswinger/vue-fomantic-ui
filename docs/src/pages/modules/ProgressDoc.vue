<template>
  <div>
    <doc-page-header
      title="Progress"
      sub="A progress bar shows the progression of a task"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Standard"
        description="A standard progress bar"
        :code="standardCode"
      >
        <sui-progress :percent="42" label="Uploading Files" progress />
      </doc-example>

      <doc-example
        title="Indicating"
        description="An indicating progress bar visually indicates the current level of progress of a task"
        :code="indicatingCode"
      >
        <sui-progress :percent="30" label="30% Founded" indicating active />
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Bar"
        description="A progress element can contain a bar visually indicating progress"
        :code="barCode"
      >
        <sui-progress :percent="33" />
      </doc-example>

      <doc-example
        title="Progress"
        description="A progress bar can contain a text value indicating current progress"
        :code="progressCode"
      >
        <sui-progress :percent="14" progress />
      </doc-example>

      <doc-example
        title="Centered Progress Text"
        description="The text inside a progress can be centered"
        :code="centeredCode"
      >
        <sui-progress :percent="68" progress="centered" />
      </doc-example>

      <doc-example
        title="Label"
        description="A progress element can contain a label"
        :code="labelCode"
      >
        <sui-progress :percent="37" label="Uploading Files" progress />
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Active"
        description="A progress bar can show activity"
        :code="activeCode"
      >
        <sui-progress :percent="33" label="Uploading Files" progress active />
      </doc-example>

      <doc-example
        title="Success"
        description="A progress bar can show a success state"
        :code="successCode"
      >
        <sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />
      </doc-example>

      <doc-example
        title="Warning"
        description="A progress bar can show a warning state"
        :code="warningCode"
      >
        <sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />
      </doc-example>

      <doc-example
        title="Error"
        description="A progress bar can show an error state"
        :code="errorCode"
      >
        <sui-progress :percent="100" label="There was an error." progress error />
      </doc-example>

      <doc-example
        title="Disabled"
        description="A progress bar can be disabled"
        :code="disabledCode"
      >
        <sui-progress :percent="25" disabled />
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Inverted"
        description="A progress bar can have its colors inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-progress inverted :percent="41" label="Uploading Files" progress />
          <sui-progress inverted :percent="100" label="Success" success progress />
          <sui-progress inverted :percent="100" label="Warning" warning progress />
          <sui-progress inverted :percent="100" label="Error" error progress />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Attached"
        description="A progress bar can show progress of an element"
        :code="attachedCode"
      >
        <sui-segment>
          <sui-progress :percent="47" attached="top" />
          La la la la
          <sui-progress :percent="26" attached="bottom" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Size"
        description="A progress bar can vary in size"
        :code="sizeCode"
      >
        <sui-progress :percent="88" size="tiny" label="tiny" />
        <sui-progress :percent="100" size="small" label="small" success />
        <sui-progress :percent="83" label="standard" />
        <sui-progress :percent="73" size="large" label="large" />
        <sui-progress :percent="94" size="big" label="big" />
      </doc-example>

      <doc-example
        title="Color"
        description="A progress bar can have different colors"
        :code="colorCode"
      >
        <sui-progress :percent="32" color="red" />
        <sui-progress :percent="53" color="orange" />
        <sui-progress :percent="13" color="yellow" />
        <sui-progress :percent="37" color="olive" />
        <sui-progress :percent="83" color="green" />
        <sui-progress :percent="24" color="teal" />
        <sui-progress :percent="88" color="blue" />
        <sui-progress :percent="41" color="violet" />
        <sui-progress :percent="47" color="purple" />
        <sui-progress :percent="30" color="pink" />
        <sui-progress :percent="68" color="brown" />
        <sui-progress :percent="35" color="grey" />
        <sui-progress :percent="73" color="black" />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue';
import DocExample from '../../components/DocExample.vue';

export default defineComponent({
  name: 'ProgressDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const standardCode = `<sui-progress :percent="42" label="Uploading Files" progress />`
    const indicatingCode = `<sui-progress :percent="30" label="30% Founded" indicating active />`
    const barCode = `<sui-progress :percent="33" />`
    const progressCode = `<sui-progress :percent="14" progress />`
    const centeredCode = `<sui-progress :percent="68" progress="centered" />`
    const labelCode = `<sui-progress :percent="37" label="Uploading Files" progress />`
    const activeCode = `<sui-progress :percent="33" label="Uploading Files" progress active />`
    const successCode = `<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />`
    const warningCode = `<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`
    const errorCode = `<sui-progress :percent="100" label="There was an error." progress error />`
    const disabledCode = `<sui-progress :percent="25" disabled />`

    const invertedCode = `<sui-segment inverted>
  <sui-progress inverted :percent="41" label="Uploading Files" progress />
  <sui-progress inverted :percent="100" label="Success" success progress />
  <sui-progress inverted :percent="100" label="Warning" warning progress />
  <sui-progress inverted :percent="100" label="Error" error progress />
</sui-segment>`

    const attachedCode = `<sui-segment>
  <sui-progress :percent="47" attached="top" />
  La la la la
  <sui-progress :percent="26" attached="bottom" />
</sui-segment>`

    const sizeCode = `<sui-progress :percent="88" size="tiny" label="tiny" />
<sui-progress :percent="100" size="small" label="small" success />
<sui-progress :percent="83" label="standard" />
<sui-progress :percent="73" size="large" label="large" />
<sui-progress :percent="94" size="big" label="big" />`

    const colorCode = `<sui-progress :percent="32" color="red" />
<sui-progress :percent="53" color="orange" />
<sui-progress :percent="13" color="yellow" />
<sui-progress :percent="37" color="olive" />
<sui-progress :percent="83" color="green" />
<sui-progress :percent="24" color="teal" />
<sui-progress :percent="88" color="blue" />
<sui-progress :percent="41" color="violet" />
<sui-progress :percent="47" color="purple" />
<sui-progress :percent="30" color="pink" />
<sui-progress :percent="68" color="brown" />
<sui-progress :percent="35" color="grey" />
<sui-progress :percent="73" color="black" />`

    return {
      standardCode,
      indicatingCode,
      barCode,
      progressCode,
      centeredCode,
      labelCode,
      activeCode,
      successCode,
      warningCode,
      errorCode,
      disabledCode,
      invertedCode,
      attachedCode,
      sizeCode,
      colorCode
    }
  }
})
</script>