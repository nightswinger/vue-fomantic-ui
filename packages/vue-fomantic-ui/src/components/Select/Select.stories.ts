import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import Select from './Select'

type Story = StoryObj<typeof Select>

export default {
  title: 'Select',
  component: Select,
} as Meta<typeof Select>

export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref()
      const options = [
        'Cat',
        'Dog',
        'Bird',
        'Rabbit',
        'Squirrel',
        'Horse',
        'Turtle',
        'Parrot',
      ]
      return { args, selected, options }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :options="options"
      />
    `,
  }),
  args: {
    placeholder: 'Pet',
  }
}

export const WithObjectOptions: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref()
      const options = [
        { text: 'Cat', value: 1 },
        { text: 'Dog', value: 2 },
        { text: 'Bird', value: 3 },
        { text: 'Rabbit', value: 4 },
        { text: 'Squirrel', value: 5 },
        { text: 'Horse', value: 6 },
        { text: 'Turtle', value: 7 },
        { text: 'Parrot', value: 8 },
      ]
      return { args, selected, options }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :options="options"
      />
    `,
  }),
  args: {
    placeholder: 'Pet',
  }
}

export const WithImage: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref()
      const options = [
        {
          text: 'Jenny Hess',
          value: 'Jenny Hess',
          image: { avatar: true, src: './avatar/small/jenny.jpg' },
        },
        {
          text: 'Elliot Fu',
          value: 'Elliot Fu',
          image: { avatar: true, src: './avatar/small/elliot.jpg' },
        },
        {
          text: 'Stevie Feliciano',
          value: 'Stevie Feliciano',
          image: { avatar: true, src: './avatar/small/stevie.jpg' },
        },
        {
          text: 'Christian',
          value: 'Christian',
          image: { avatar: true, src: './avatar/small/christian.jpg' },
        },
      ]
      return { args, selected, options }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :options="options"
      />
    `,
  }),
  args: {
    fluid: true,
    placeholder: 'Select Friend',
  }
}

export const Search: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref()
      const options = [
        { text: 'Cat', value: 1 },
        { text: 'Dog', value: 2 },
        { text: 'Bird', value: 3 },
        { text: 'Rabbit', value: 4 },
        { text: 'Squirrel', value: 5 },
        { text: 'Horse', value: 6 },
        { text: 'Turtle', value: 7 },
        { text: 'Parrot', value: 8 },
      ]
      return { args, selected, options }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :options="options"
      />
    `,
  }),
  args: {
    placeholder: 'Pet',
    search: true,
  }
}

export const Clearable: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref({ text: 'English', value: 3 })
      const options = [
        { text: 'Arabic', value: 0 },
        { text: 'Chinese', value: 1 },
        { text: 'Dutch', value: 2 },
        { text: 'English', value: 3 },
        { text: 'French', value: 4 },
        { text: 'German', value: 5 },
        { text: 'Italian', value: 6 },
        { text: 'Japanese', value: 7 },
        { text: 'Korean', value: 8 },
        { text: 'Portuguese', value: 9 },
        { text: 'Russian', value: 10 },
        { text: 'Spanish', value: 11 },
        { text: 'Thai', value: 12 },
        { text: 'Turkish', value: 13 },
      ]
      return { args, selected, options }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :options="options"
      />
    `,
  }),
  args: {
    placeholder: 'Select Language',
    clearable: true,
  }
}

export const Multiple: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref([])
      const options = [
        { text: 'Angular', value: 'angular' },
        { text: 'CSS', value: 'css' },
        { text: 'Graphic Design', value: 'design' },
        { text: 'Ember', value: 'ember' },
        { text: 'HTML', value: 'html' },
        { text: 'Information Architecture', value: 'ia' },
        { text: 'Javascript', value: 'javascript' },
        { text: 'Mechanical Engineering', value: 'mech' },
        { text: 'Meteor', value: 'meteor' },
        { text: 'NodeJS', value: 'node' },
        { text: 'Plumbing', value: 'plumbing' },
        { text: 'Python', value: 'python' },
        { text: 'Rails', value: 'rails' },
        { text: 'React', value: 'react' },
        { text: 'Kitchen Repair', value: 'repair' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'UI Design', value: 'ui' },
        { text: 'User Experience', value: 'ux' },
      ]
      return { args, selected, options }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :options="options"
      />
    `,
  }),
  args: {
    placeholder: 'Skills',
    multiple: true,
    search: false,
    clearable: false,
  }
}

export const MultipleWithFlags: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref([])
      const options = [
        { value: 'af', flag: 'af', text: 'Afghanistan' },
        { value: 'ax', flag: 'ax', text: 'Aland Islands' },
        { value: 'al', flag: 'al', text: 'Albania' },
        { value: 'dz', flag: 'dz', text: 'Algeria' },
        { value: 'as', flag: 'as', text: 'American Samoa' },
      ]
      return { args, selected, options }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :options="options"
      />
    `,
  }),
  args: {
    placeholder: 'Select Country',
    multiple: true,
  }
}
