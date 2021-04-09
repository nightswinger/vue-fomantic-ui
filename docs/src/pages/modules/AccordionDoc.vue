<template>
  <div>
    <doc-page-header
      title="Accordion"
      sub="An accordion allows users to toggle the display of sections of content"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Accordion"
        description="A standard accordion"
        :code="accordionCode"
      >
        <sui-accordion>
          <sui-accordion-tab title="What is a dog?">
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="What kinds of dogs are there?">
            <p>
              There are many breeds of dogs. Each breed varies in size and
              temperament. Owners often select a breed of dog that they find to be
              compatible with their own lifestyle and desires from a companion.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="How do you acquire a dog?">
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
          </sui-accordion-tab>
        </sui-accordion>
      </doc-example>

      <doc-example
        title="Styled"
        description="A styled accordion adds basic formatting"
        :code="styledCode"
      >
        <sui-accordion styled>
          <sui-accordion-tab title="What is a dog?">
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="What kinds of dogs are there?">
            <p>
              There are many breeds of dogs. Each breed varies in size and
              temperament. Owners often select a breed of dog that they find to be
              compatible with their own lifestyle and desires from a companion.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="How do you acquire a dog?">
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
          </sui-accordion-tab>
        </sui-accordion>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Fluid"
        description="An accordion can take up the width of its container"
        :code="fluidCode"
      >
        <sui-accordion fluid styled>
          <sui-accordion-tab title="What is a dog?">
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="What kinds of dogs are there?">
            <p>
              There are many breeds of dogs. Each breed varies in size and
              temperament. Owners often select a breed of dog that they find to be
              compatible with their own lifestyle and desires from a companion.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="How do you acquire a dog?">
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
          </sui-accordion-tab>
        </sui-accordion>
      </doc-example>

      <doc-example
        title="Inverted"
        description="An accordion can be formatted to appear on dark backgrounds"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-accordion inverted>
            <sui-accordion-tab title="What is a dog?">
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </sui-accordion-tab>
            <sui-accordion-tab title="What kinds of dogs are there?">
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
              </p>
            </sui-accordion-tab>
            <sui-accordion-tab title="How do you acquire a dog?">
              <p>
                Three common ways for a prospective owner to acquire a dog is from
                pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog
                from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog who
                may not find one so readily.
              </p>
            </sui-accordion-tab>
          </sui-accordion>
        </sui-segment>
      </doc-example>

      <sui-header as="h2" dividing>Usage</sui-header>

      <doc-example
        title="Multiple"
        description="An accordion can have multiple panels open at the same time"
        :code="multipleCode"
      >
        <sui-accordion multiple>
          <sui-accordion-tab title="What is a dog?">
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="What kinds of dogs are there?">
            <p>
              There are many breeds of dogs. Each breed varies in size and
              temperament. Owners often select a breed of dog that they find to be
              compatible with their own lifestyle and desires from a companion.
            </p>
          </sui-accordion-tab>
          <sui-accordion-tab title="How do you acquire a dog?">
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
          </sui-accordion-tab>
        </sui-accordion>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'AccordionDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const accordionCode = `<sui-accordion>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`

    const styledCode = `<sui-accordion styled>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`

    const fluidCode = `<sui-accordion fluid styled>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`

    const invertedCode = `<sui-segment inverted>
  <sui-accordion inverted>
    <sui-accordion-tab title="What is a dog?">
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    </sui-accordion-tab>
    <sui-accordion-tab title="What kinds of dogs are there?">
      <p>
        There are many breeds of dogs. Each breed varies in size and
        temperament. Owners often select a breed of dog that they find to be
        compatible with their own lifestyle and desires from a companion.
      </p>
    </sui-accordion-tab>
    <sui-accordion-tab title="How do you acquire a dog?">
      <p>
        Three common ways for a prospective owner to acquire a dog is from
        pet shops, private owners, or shelters.
      </p>
      <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog
        from a private owner allows you to assess the pedigree and
        upbringing of your dog before choosing to take it home. Lastly,
        finding your dog from a shelter, helps give a good home to a dog who
        may not find one so readily.
      </p>
    </sui-accordion-tab>
  </sui-accordion>
</sui-segment>`

    return {
      accordionCode,
      styledCode,
      fluidCode,
      invertedCode
    }
  }
})
</script>