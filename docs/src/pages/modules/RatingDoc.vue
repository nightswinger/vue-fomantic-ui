<template>
  <div>
    <doc-page-header
      title="Rating"
      sub="A rating indicates user interest in content"
    />
    
    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Rating"
        description="A Basic rating"
        :code="ratingCode"
      >
        <sui-rating  />
      </doc-example>

      <doc-example
        title="Icon"
        description="You can use any available icon as rating indicator"
        :code="iconCode"
      >
        <sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="4" icon="heart" color="red" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="4" icon="female" color="purple" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="4" icon="male" color="blue" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="4" icon="cloud" color="grey" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="4" icon="cat" color="pink" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="4" icon="circle" color="orange" />
      </doc-example>

      <doc-example
        title="Color"
        description="You can specify any color of the FUI color palette"
        :code="colorCode"
      >
        <sui-rating :defaultRating="1" :maxRating="7" color="red" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="7" color="orange" />
        <br>
        <br>
        <sui-rating :defaultRating="3" :maxRating="7" color="yellow" />
        <br>
        <br>
        <sui-rating :defaultRating="4" :maxRating="7" color="olive" />
        <br>
        <br>
        <sui-rating :defaultRating="5" :maxRating="7" color="green" />
        <br>
        <br>
        <sui-rating :defaultRating="6" :maxRating="7" color="teal" />
        <br>
        <br>
        <sui-rating :defaultRating="6" :maxRating="7" color="blue" />
        <br>
        <br>
        <sui-rating :defaultRating="5" :maxRating="7" color="violet" />
        <br>
        <br>
        <sui-rating :defaultRating="4" :maxRating="7" color="purple" />
        <br>
        <br>
        <sui-rating :defaultRating="3" :maxRating="7" color="pink" />
        <br>
        <br>
        <sui-rating :defaultRating="2" :maxRating="7" color="brown" />
        <br>
        <br>
        <sui-rating :defaultRating="1" :maxRating="7" color="grey" />
        <br>
        <br>
        <sui-rating :defaultRating="1" :maxRating="7" color="black" />
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Disabled"
        description="A rating can be started in non-interactive mode by adding a disabled class"
        :code="disabledCode"
      >
        <sui-rating disabled :defaultRating="3" :maxRating="5" color="yellow" />
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Size"
        description="A rating can vary in size"
        :code="sizeCode"
      >
        <sui-rating size="mini" :defaultRating="3" :maxRating="4" color="yellow" />
        <br>
        <br>
        <sui-rating size="tiny" :defaultRating="3" :maxRating="4" color="yellow" />
        <br>
        <br>
        <sui-rating size="small" :defaultRating="3" :maxRating="4" color="yellow" />
        <br>
        <br>
        <sui-rating :defaultRating="3" :maxRating="4" color="yellow" />
        <br>
        <br>
        <sui-rating size="large" :defaultRating="3" :maxRating="4" color="yellow" />
        <br>
        <br>
        <sui-rating size="huge" :defaultRating="3" :maxRating="4" color="yellow" />
        <br>
        <br>
        <sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue';
import DocExample from '../../components/DocExample.vue';

export default defineComponent({
  name: 'RatingDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const ratingCode = `<sui-rating  />`

    const iconCode = `<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
<sui-rating :defaultRating="2" :maxRating="4" icon="heart" color="red" />
<sui-rating :defaultRating="2" :maxRating="4" icon="female" color="purple" />
<sui-rating :defaultRating="2" :maxRating="4" icon="male" color="blue" />
<sui-rating :defaultRating="2" :maxRating="4" icon="cloud" color="grey" />
<sui-rating :defaultRating="2" :maxRating="4" icon="cat" color="pink" />
<sui-rating :defaultRating="2" :maxRating="4" icon="circle" color="orange" />`

    const colorCode = `<sui-rating :defaultRating="1" :maxRating="7" color="red" />
<sui-rating :defaultRating="2" :maxRating="7" color="orange" />
<sui-rating :defaultRating="3" :maxRating="7" color="yellow" />
<sui-rating :defaultRating="4" :maxRating="7" color="olive" />
<sui-rating :defaultRating="5" :maxRating="7" color="green" />
<sui-rating :defaultRating="6" :maxRating="7" color="teal" />
<sui-rating :defaultRating="6" :maxRating="7" color="blue" />
<sui-rating :defaultRating="5" :maxRating="7" color="violet" />
<sui-rating :defaultRating="4" :maxRating="7" color="purple" />
<sui-rating :defaultRating="3" :maxRating="7" color="pink" />
<sui-rating :defaultRating="2" :maxRating="7" color="brown" />
<sui-rating :defaultRating="1" :maxRating="7" color="grey" />
<sui-rating :defaultRating="1" :maxRating="7" color="black" />`

    const disabledCode = `<sui-rating disabled :defaultRating="3" :maxRating="5" color="yellow" />`

    const sizeCode = `<sui-rating size="mini" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="tiny" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="small" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="large" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="huge" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`

    return {
      ratingCode,
      iconCode,
      colorCode,
      disabledCode,
      sizeCode
    }
  }
})
</script>