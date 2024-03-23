<template>
  <DocSection label="Attached" :code="code">
    <template #description>
      A message can be formatted to attach itself to other content
    </template>
    <template #example>
      <Message
        attached
        header="Welcome to our site!"
        content="Fill out the form below to sign-up for a new account"
      />
      <Segment attached>
        <Form>
          <FormGroup widths="equal">
            <FormField label="First Name" placeholder="First Name" />
            <FormField label="Last Name" placeholder="Last Name" />
          </FormGroup>
          <FormField label="Username" placeholder="Username" />
          <FormField label="Password" type="password" placeholder="Password" />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>
          <Button primary>Submit</Button>
        </Form>
      </Segment>
      <Message warning attached="bottom">
        <Icon name="help" />
        Already signed up? <a href="#">Login here</a> instead.
      </Message>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message, Form, FormGroup, FormField, Segment, Button, Checkbox, Icon } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    attached
    header="Welcome to our site!"
    content="Fill out the form below to sign-up for a new account"
  />
  <Segment attached>
    <Form>
      <FormGroup widths="equal">
        <FormField label="First Name" placeholder="First Name" />
        <FormField label="Last Name" placeholder="Last Name" />
      </FormGroup>
      <FormField label="Username" placeholder="Username" />
      <FormField label="Password" type="password" placeholder="Password" />
      <FormField>
        <Checkbox label="I agree to the Terms and Conditions" />
      </FormField>
      <Button primary>Submit</Button>
    </Form>
  </Segment>
  <Message warning attached="bottom">
    <Icon name="help" />
    Already signed up? <a href="#">Login here</a> instead.
  </Message>
<\/template>`
</script>
