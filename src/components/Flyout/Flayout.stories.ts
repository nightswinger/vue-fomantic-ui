import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import Flyout from './Flyout'

import Button from '../Button/Button'

type Story = StoryObj<typeof Flyout>

export default {
  title: 'Flyout',
  component: Flyout,
  render: (args) => ({
    components: { Flyout, Button },
    setup: () => {
      const visible = ref(true)
      return { args, visible }
    },
    template: `
      <Flyout v-model:visible="visible" v-bind="args" />
      <Button icon="plus" floated="right" @click="visible = !visible" />
    `
  }),
} as Meta<typeof Flyout>

export const Default: Story = {}
