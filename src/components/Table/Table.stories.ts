import { ref } from 'vue'
import type { Meta, StoryObj } from "@storybook/vue3"

import Table from "./Table"
import Column from "./Column"

import Header from "../Header/Header"
import Icon from "../Icon/Icon"
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

export const Error: Story = {
  render: (args) => ({
    components: { Table, Column, Icon },
    setup() {
      const dataSource = ref([
        { name: 'No Name Specified', status: 'Approved', notes: 'None' },
        { name: 'Jimmy', status: 'Cannot pull data', notes: 'None' },
        { name: 'Jamie', status: 'Approved', notes: 'Classified' },
        { name: 'Jill', status: 'Approved', notes: 'None' },
      ])

      const rowError = ({ data }) => data.name === 'Jimmy'
      const colError = ({ value }) => value === 'Classified'

      return { args, dataSource, rowError, colError }
    },
    template: `
      <Table
        :dataSource="dataSource"
        :rowError="rowError"
        v-bind="args"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" :error="colError">
          <template #body="{ data }">
            <Icon name="attention" v-if="data.notes === 'Classified'" />
            {{ data.notes }}
          </template>
        </Column>
      </Table>
    `,
  }),
  args: {
    celled: true,
  }
}

export const Warning: Story = {
  render: (args) => ({
    components: { Table, Column, Icon },
    setup() {
      const dataSource = ref([
        { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
        { name: 'Jimmy', status: 'Requires Action', notes: 'None' },
        { name: 'Jamie', status: 'Unknown', notes: 'Hostile' },
        { name: 'Jill', status: 'Unknown', notes: 'None' },
      ])

      const rowWarning = ({ data }) => data.name === 'Jimmy'
      const colWarning = ({ value }) => value === 'Hostile'

      return { args, dataSource, rowWarning, colWarning }
    },
    template: `
      <Table
        :dataSource="dataSource"
        :rowWarning="rowWarning"
        v-bind="args"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Icon name="attention" v-if="data.status === 'Requires Action'" />
            {{ data.status }}
          </template>
        </Column>
        <Column field="notes" header="Notes" :warning="colWarning">
          <template #body="{ data }">
            <Icon name="attention" v-if="data.notes === 'Hostile'" />
            {{ data.notes }}
          </template>
        </Column>
      </Table>
    `,
  }),
  args: {
    celled: true,
  }
}

export const Active: Story = {
  render: (args) => ({
    components: { Table, Column, Icon },
    setup() {
      const dataSource = ref([
        { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
        { name: 'John', status: 'Requires Action', notes: 'None' },
        { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
        { name: 'Jill', status: 'Approved', notes: 'None' },
      ])

      const rowActive = ({ data }) => data.name === 'John'
      const colActive = ({ value }) => value === 'Jill'

      return { args, dataSource, rowActive, colActive }
    },
    template: `
      <Table
        :dataSource="dataSource"
        :rowActive="rowActive"
        v-bind="args"
      >
        <Column field="name" header="Name" :active="colActive" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" />
      </Table>
    `,
  }),
  args: {
    celled: true,
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Table, Column, Icon },
    setup() {
      const dataSource = ref([
        { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
        { name: 'John', status: 'Requires Action', notes: 'None' },
        { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
        { name: 'Jill', status: 'Approved', notes: 'None' },
      ])

      const rowDisabled = ({ index }) => index === 0
      const colDisabled = ({ value }) => value === 'Jill'

      return { args, dataSource, rowDisabled, colDisabled }
    },
    template: `
      <Table
        :dataSource="dataSource"
        :rowDisabled="rowDisabled"
        v-bind="args"
      >
        <Column field="name" header="Name" :disabled="colDisabled" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" />
      </Table>
    `,
  }),
  args: {
    celled: true,
  }
}

export const ColoredCells: Story = {
  render: (args) => ({
    components: { Table, Column, Icon },
    setup() {
      const dataSource = ref([
        { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
        { name: 'Jimmy', status: 'Recording session', notes: 'None' },
        { name: 'Jamie', status: 'Unknown', notes: 'Baby Party' },
        { name: 'Jill', status: 'Unknown', notes: 'Vacation' },
      ])

      const rowColor = ({ data }) => data.name === 'Jimmy' ? 'blue': undefined
      const colColor = ({ value }) => {
        if (value === 'No Name Specified') return 'orange'
        if (value === 'Baby Party') return 'pink'
        if (value === 'Vacation') return 'green'
      }

      return { args, dataSource, rowColor, colColor }
    },
    template: `
      <Table
        :dataSource="dataSource"
        :rowColor="rowColor"
        v-bind="args"
      >
        <Column field="name" header="Name" :color="colColor" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Icon name="microphone" v-if="data.status === 'Recording session'" />
            {{ data.status }}
          </template>
        </Column>
        <Column field="notes" header="Notes" :color="colColor">
          <template #body="{ data }">
            <Icon name="child" v-if="data.notes === 'Baby Party'" />
            {{ data.notes }}
          </template>
        </Column>
      </Table>
    `,
  }),
  args: {
    celled: true,
  }
}

export const Marked: Story = {
  render: (args) => ({
    components: { Table, Column, Icon },
    setup() {
      const dataSource = ref([
        { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
        { name: 'Jimmy', status: 'Recording session', notes: 'None' },
        { name: 'Jamie', status: 'Unknown', notes: 'Baby Party' },
        { name: 'Jill', status: 'Unknown', notes: 'Vacation' },
      ])

      const marked = ({ data, value }) => {
        if (value === 'No Name Specified') return 'right blue'
        if (data.name === 'No Name Specified' && value === 'Unknown') return 'left red'
        if (value === 'Jimmy') return 'left green'
        if (data.name === 'Jamie' && value === 'Unknown') return 'right orange'
        if (value === 'Vacation') return 'right purple'
      }

      return { args, dataSource, marked }
    },
    template: `
      <Table
        :dataSource="dataSource"
        :rowColor="rowColor"
        v-bind="args"
      >
        <Column field="name" header="Name" :marked="marked" />
        <Column field="status" header="Status" :marked="marked">
          <template #body="{ data }">
            <Icon name="microphone" v-if="data.status === 'Recording session'" />
            {{ data.status }}
          </template>
        </Column>
        <Column field="notes" header="Notes" :marked="marked">
          <template #body="{ data }">
            <Icon name="child" v-if="data.notes === 'Baby Party'" />
            {{ data.notes }}
          </template>
        </Column>
      </Table>
    `,
  }),
  args: {
    celled: true,
  }
}

export const SelectableRow: Story = {
  render: (args) => ({
    components: { Table, Column },
    setup() {
      const dataSource = ref([
        { name: 'John', status: 'No Action', notes: 'None' },
        { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
        { name: 'Jill', status: 'Denied', notes: 'None' },
        { name: 'John', status: 'No Action', notes: 'None' },
        { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
        { name: 'Jill', status: 'Denied', notes: 'None' },
      ])

      const rowWarning = ({ index }) => index === 3
      const colWarning = ({ value, index }) => value === 'Requires call' && index === 4

      return { args, dataSource, rowWarning, colWarning }
    },
    template: `
      <Table
        :dataSource="dataSource"
        :rowWarning="rowWarning"
        v-bind="args"
        @row-select="(e) => console.log(e.data)"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" :warning="colWarning" />
      </Table>
    `,
  }),
  args: {
    celled: true,
    selectable: true,
  }
}

export default meta
