<template>
  <DocSection label="Styled" :code="code">
    <template #description>
      A styled accordion adds basic formatting
    </template>
    <template #example>
      <Accordion styled>
        <AccordionTab title="What is a dog?">
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </AccordionTab>
        <AccordionTab title="What kinds of dogs are there?">
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </AccordionTab>
        <AccordionTab title="How do you acquire a dog?">
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
        </AccordionTab>
      </Accordion>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Accordion, AccordionTab } from 'vue-fomantic-ui'

const code = `<template>
  <Accordion styled>
    <AccordionTab title="What is a dog?">
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    </AccordionTab>
    <AccordionTab title="What kinds of dogs are there?">
      <p>
        There are many breeds of dogs. Each breed varies in size and
        temperament. Owners often select a breed of dog that they find to be
        compatible with their own lifestyle and desires from a companion.
      </p>
    </AccordionTab>
    <AccordionTab title="How do you acquire a dog?">
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
    </AccordionTab>
  </Accordion>
<\/template>`
</script>
