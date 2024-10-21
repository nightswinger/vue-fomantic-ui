import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'

import Calendar from './Calendar'

type Story = StoryObj<typeof Calendar>

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta<typeof Calendar>

export const Default: Story = {
  render: (args) => ({
    components: { Calendar },
    setup() {
      const date = ref(new Date())
      return { args, date }
    },
    template: `
    <Calendar
      v-model="date"
      v-bind="args"
      @date-selected="date => console.log(date)"
    />`
  }),
  args: {
    locale: 'en-US',
    placeholder: 'Date/Time'
  }
}

export const Inline: Story = {
  render: (args) => ({
    components: { Calendar },
    setup() {
      const date = ref(new Date())
      return { args, date }
    },
    template: `<Calendar v-model="date" v-bind="args" />`
  }),
  args: {
    locale: 'en-US',
    inline: true,
  }
}

export const Inverted: Story = {
  render: (args) => ({
    components: { Calendar },
    setup() {
      const date = ref(new Date())
      return { args, date }
    },
    template: `<Calendar v-model="date" v-bind="args" />`
  }),
  args: {
    locale: 'en-US',
    inverted: true,
  }
}
