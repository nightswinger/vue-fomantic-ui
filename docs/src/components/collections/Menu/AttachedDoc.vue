<template>
  <DocSection label="Attached" :code="code">
    <template #description>
      A menu may be attached to other content segments
    </template>
    <template #example>
      <Menu attached="top" tabular>
        <MenuItem active>tab1</MenuItem>
        <MenuItem>tab2</MenuItem>
      </Menu>

      <Segment attached="bottom">
        There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text. All
        the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with
        a handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem, Segment } from 'vue-fomantic-ui'

const code = `<template>
  <Menu attached="top" tabular>
    <MenuItem active>tab1</MenuItem>
    <MenuItem>tab2</MenuItem>
  </Menu>

  <Segment attached="bottom">
    There are many variations of passages of Lorem Ipsum available, but
    the majority have suffered alteration in some form, by injected
    humour, or randomised words which don't look even slightly believable.
    If you are going to use a passage of Lorem Ipsum, you need to be sure
    there isn't anything embarrassing hidden in the middle of text. All
    the Lorem Ipsum generators on the Internet tend to repeat predefined
    chunks as necessary, making this the first true generator on the
    Internet. It uses a dictionary of over 200 Latin words, combined with
    a handful of model sentence structures, to generate Lorem Ipsum which
    looks reasonable. The generated Lorem Ipsum is therefore always free
    from repetition, injected humour, or non-characteristic words etc.
  </Segment>
<\/template>`
</script>
