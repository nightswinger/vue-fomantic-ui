import { ref } from 'vue'
import type { Meta, StoryObj } from "@storybook/vue3"

import Table from "./Table"
import Column from "./Column"

import Header from "../Header/Header"
import Image from "../Image/Image"

type Story = StoryObj<typeof Table>

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
}

export const Default: Story = {
  render: (args) => ({
    components: { Table, Column },
    setup() {
      const dataSource = ref([
        { name: 'James', age: 24, job: 'Engineer' },
        { name: 'Jill', age: 26, job: 'Engineer' },
        { name: 'Elyse', age: 24, job: 'Designer' },
      ])

      return { args, dataSource }
    },
    template: `
      <Table :dataSource="dataSource" v-bind="args">
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
        <Column field="job" header="Job" />
      </Table>
    `,
  }),
  args: {
    celled: true,
  }
}

export const StandardTable: Story = {
  render: (args) => ({
    components: { Table, Column, Image, Header },
    setup() {
      const dataSource = ref([
        { name: 'Lena', job: 'Human Resources', correctGuesses: 22, image: './avatar/small/lena.png' },
        { name: 'Matthew', job: 'Fabric Design', correctGuesses: 15, image: './avatar/small/matthew.png' },
        { name: 'Lindsay', job: 'Entertainment', correctGuesses: 12, image: './avatar/small/lindsay.png' },
        { name: 'Mark', job: 'Executive', correctGuesses: 11, image: './avatar/small/mark.png' },
      ])

      return { args, dataSource }
    },
    template: `
      <Table :dataSource="dataSource" v-bind="args">
        <Column field="name" header="Employee">
          <template #body="{ data }">
            <Header as="h4">
              <Image :src="data.image" size="mini" rounded />
              <div class="content">
                {{ data.name }}
                <div class="sub header">{{ data.job }}</div>
              </div>
            </Header>
          </template>
        </Column>
        <Column field="correctGuesses" header="Correct Guesses" />
      </Table>
    `,
  }),
  args: {
    basic: 'very',
    celled: true,
    collapsing: true,
  }
}

export default meta
