<template>
  <div>
    <doc-page-header
      title="Dropdown"
      sub="A dropdown allows a user to select a value from a series of options"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Dropdown"
        description="A dropdown"
        :code="dropdownCode"
      >
        <sui-dropdown text="File">
          <sui-dropdown-menu>
            <sui-dropdown-item text="New" />
            <sui-dropdown-item text="Open..." description="ctrl + o" />
            <sui-dropdown-item text="Save as..." description="ctrl + s" />
            <sui-dropdown-item text="Rename" description="ctrl + r" />
            <sui-dropdown-item text="Make a copy" />
            <sui-dropdown-item icon="folder" text="Move to folder" />
            <sui-dropdown-item icon="trash" text="Move to trash" />
            <sui-divider />
            <sui-dropdown-item text="Download As..." />
            <sui-dropdown-item text="Publish To Web" />
            <sui-dropdown-item text="E-mail Collaborators" />
          </sui-dropdown-menu>
        </sui-dropdown>
      </doc-example>

      <doc-example
        title="Selection"
        description="A dropdown can be used to select between choices in a form"
        :code="selectionCode"
      >
        <sui-dropdown
          selection
          placeholder="Pet"
          v-model="selected1"
          :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
        />
      </doc-example>

      <doc-example
        title="Search Selection"
        description="A selection dropdown can allow a user to search through a large list of choices"
        :code="searchSelectionCode"
      >
        <sui-dropdown
          search
          selection
          fluid
          v-model="selected2"
          :options="searchSelectionOptions"
          placeholder="Select Country"
        />
      </doc-example>

      <doc-example
        title="Clearable Selection"
        description="A clearable selection dropdown can allow a user to cancel to cancel a previous selection"
        :code="clearableSelectionCode"
      >
        <sui-dropdown
          clearable
          selection
          v-model="selected3"
          :options="clearableSelectionOptions"
          placeholder="Select Language"
        />
      </doc-example>

      <doc-example
        title="Multiple Selection"
        description="A selection dropdown can allow multiple selections"
        :code="multipleCode"
      >
        <sui-dropdown
          selection
          multiple
          fluid
          v-model="selected4"
          placeholder="Skills"
          :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
        />
      </doc-example>

      <doc-example :code="multipleCode2">
        <sui-dropdown
          selection
          multiple
          fluid
          search
          v-model="selected5"
          placeholder="Skills"
          :options="[
            { value: 'af', flag: 'af', text: 'Afghanistan' },
            { value: 'ax', flag: 'ax', text: 'Aland Islands' },
            { value: 'al', flag: 'al', text: 'Albania' },
            { value: 'dz', flag: 'dz', text: 'Algeria' },
            { value: 'as', flag: 'as', text: 'American Samoa' }
          ]"
        />
      </doc-example>

      <doc-example
        title="Search Dropdown"
        description="A dropdown can be searchable"
        :code="searchDropdownCode"
      >
        <sui-dropdown
          button
          floating
          labeled
          search
          icon="world"
          v-model="selected6"
          :options="[
            { text: 'Arabic', value: 'Arabic' },
            { text: 'Chinese', value: 'Chinese' },
            { text: 'Danish', value: 'Danish' },
            { text: 'Dutch', value: 'Dutch' },
            { text: 'English', value: 'English' },
            { text: 'French', value: 'French' },
            { text: 'German', value: 'German' },
            { text: 'Greek', value: 'Greek' },
            { text: 'Hungarian', value: 'Hungarian' },
            { text: 'Italian', value: 'Italian' },
            { text: 'Japanese', value: 'Japanese' },
            { text: 'Korean', value: 'Korean' },
            { text: 'Lithuanian', value: 'Lithuanian' },
            { text: 'Persian', value: 'Persian' },
            { text: 'Polish', value: 'Polish' },
            { text: 'Portuguese', value: 'Portuguese' },
            { text: 'Russian', value: 'Russian' },
            { text: 'Spanish', value: 'Spanish' },
            { text: 'Swedish', value: 'Swedish' },
            { text: 'Turkish', value: 'Turkish' },
            { text: 'Vietnamese', value: 'Vietnamese' }
          ]"
          text="Select Language"
        />
      </doc-example>

      <doc-example
        title="Search In-Menu"
        description="A dropdown can include a search prompt inside its menu"
        :code="searchInMenuCode"
      >
        <sui-dropdown
          text="Filter Posts"
          icon="filter"
          floating
          labeled
          button
          searchInMenu
          v-model="selected7"
          :options="[
            {
              text: 'Important',
              value: 'Important',
              label: { color: 'red', empty: true, circular: true },
            },
            {
              text: 'Announcement',
              value: 'Announcement',
              label: { color: 'blue', empty: true, circular: true },
            },
            {
              text: 'Cannot Fix',
              value: 'Cannot Fix',
              label: { color: 'black', empty: true, circular: true },
            },
            {
              text: 'News',
              value: 'News',
              label: { color: 'purple', empty: true, circular: true },
            },
            {
              text: 'Enhancement',
              value: 'Enhancement',
              label: { color: 'orange', empty: true, circular: true },
            },
            {
              text: 'Change Declined',
              value: 'Change Declined',
              label: { empty: true, circular: true },
            },
            {
              text: 'Off Topic',
              value: 'Off Topic',
              label: { color: 'yellow', empty: true, circular: true },
            },
            {
              text: 'Interesting',
              value: 'Interesting',
              label: { color: 'pink', empty: true, circular: true },
            },
            {
              text: 'Discussion',
              value: 'Discussion',
              label: { color: 'green', empty: true, circular: true },
            },
          ]"
        />
      </doc-example>

      <doc-example
        title="Inline"
        description="A dropdown can be formatted to appear inline in other content"
        :code="inlineCode"
      >
        <span>
          Show me posts by <sui-dropdown
            inline
            v-model="selected8"
            :options="[
              {
                text: 'Jenny Hess',
                value: 'Jenny Hess',
                image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
              },
              {
                text: 'Elliot Fu',
                value: 'Elliot Fu',
                image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
              },
              {
                text: 'Stevie Feliciano',
                value: 'Stevie Feliciano',
                image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
              },
              {
                text: 'Christian',
                value: 'Christian',
                image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
              },
            ]"
          />
        </span>
      </doc-example>

      <doc-example
        title="Pointing"
        description="A dropdown can be formatted so that its menu is pointing"
        :code="pointingCode"
      >
        <sui-dropdown
          icon="wrench"
          button
          pointing="top left"
        >
          <sui-dropdown-menu>
            <sui-dropdown-item text="New" />
            <sui-dropdown-item text="Save As" />
            <sui-dropdown-item text="Edit" />
          </sui-dropdown-menu>
        </sui-dropdown>
      </doc-example>

      <doc-example
        title="Floating"
        description="A dropdown menu can appear to be floating below an element"
        :code="floatingCode"
      >
        <sui-button-group color="teal">
          <sui-button>Save</sui-button>
          <sui-dropdown
            floating
            button
            icon="dropdown"
          >
            <sui-dropdown-menu>
              <sui-dropdown-item text="Edit Post" icon="edit" />
              <sui-dropdown-item text="Remove Post" icon="delete" />
              <sui-dropdown-item text="Hide Post" icon="hide" />
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-button-group>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'DropdownDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const dropdownCode = `<sui-dropdown text="File">
  <sui-dropdown-menu>
    <sui-dropdown-item text="New" />
    <sui-dropdown-item text="Open..." description="ctrl + o" />
    <sui-dropdown-item text="Save as..." description="ctrl + s" />
    <sui-dropdown-item text="Rename" description="ctrl + r" />
    <sui-dropdown-item text="Make a copy" />
    <sui-dropdown-item icon="folder" text="Move to folder" />
    <sui-dropdown-item icon="trash" text="Move to trash" />
    <sui-divider />
    <sui-dropdown-item text="Download As..." />
    <sui-dropdown-item text="Publish To Web" />
    <sui-dropdown-item text="E-mail Collaborators" />
  </sui-dropdown-menu>
</sui-dropdown>`

    const selected1 = ref(null)
    const selectionCode = `<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`

    const selected2 = ref(null)
    const searchSelectionOptions = [
      { value: 'af', flag: 'af', text: 'Afghanistan' },
      { value: 'ax', flag: 'ax', text: 'Aland Islands' },
      { value: 'al', flag: 'al', text: 'Albania' },
      { value: 'dz', flag: 'dz', text: 'Algeria' },
      { value: 'as', flag: 'as', text: 'American Samoa' },
      { value: 'ad', flag: 'ad', text: 'Andorra' },
      { value: 'ao', flag: 'ao', text: 'Angola' },
      { value: 'ai', flag: 'ai', text: 'Anguilla' },
      { value: 'ag', flag: 'ag', text: 'Antigua' },
      { value: 'ar', flag: 'ar', text: 'Argentina' },
      { value: 'am', flag: 'am', text: 'Armenia' },
      { value: 'aw', flag: 'aw', text: 'Aruba' },
      { value: 'au', flag: 'au', text: 'Australia' },
      { value: 'at', flag: 'at', text: 'Austria' },
      { value: 'az', flag: 'az', text: 'Azerbaijan' },
      { value: 'bs', flag: 'bs', text: 'Bahamas' },
      { value: 'bh', flag: 'bh', text: 'Bahrain' },
      { value: 'bd', flag: 'bd', text: 'Bangladesh' },
      { value: 'bb', flag: 'bb', text: 'Barbados' },
      { value: 'by', flag: 'by', text: 'Belarus' },
      { value: 'be', flag: 'be', text: 'Belgium' },
      { value: 'bz', flag: 'bz', text: 'Belize' },
      { value: 'bj', flag: 'bj', text: 'Benin' }
    ]
    const searchSelectionCode = `<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`

    const selected3 = ref(null)
    const clearableSelectionOptions = [
      'Arabic',
      'Chinese',
      'Danish',
      'Dutch',
      'English',
      'French',
      'German',
      'Greek',
      'Hungarian',
      'Italian',
      'Japanese',
      'Korean',
      'Lithuanian',
      'Persian',
      'Polish',
      'Portuguese',
      'Russian',
      'Spanish',
      'Swedish',
      'Turkish',
      'Vietnamese'
    ]
    const clearableSelectionCode = `<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`

    const selected4 = ref(null)
    const multipleCode = `<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`

    const selected5 = ref(null)
    const multipleCode2 = `<sui-dropdown
  selection
  multiple
  fluid
  search
  v-model="selected5"
  placeholder="Skills"
  :options="[
    { value: 'af', flag: 'af', text: 'Afghanistan' },
    { value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { value: 'al', flag: 'al', text: 'Albania' },
    { value: 'dz', flag: 'dz', text: 'Algeria' },
    { value: 'as', flag: 'as', text: 'American Samoa' }
  ]"
/>`

    const selected6 = ref(null)
    const searchDropdownCode = `<sui-dropdown
  button
  floating
  labeled
  search
  icon="world"
  v-model="selected6"
  :options="[
    { text: 'Arabic', value: 'Arabic' },
    { text: 'Chinese', value: 'Chinese' },
    { text: 'Danish', value: 'Danish' },
    { text: 'Dutch', value: 'Dutch' },
    { text: 'English', value: 'English' },
    { text: 'French', value: 'French' },
    { text: 'German', value: 'German' },
    { text: 'Greek', value: 'Greek' },
    { text: 'Hungarian', value: 'Hungarian' },
    { text: 'Italian', value: 'Italian' },
    { text: 'Japanese', value: 'Japanese' },
    { text: 'Korean', value: 'Korean' },
    { text: 'Lithuanian', value: 'Lithuanian' },
    { text: 'Persian', value: 'Persian' },
    { text: 'Polish', value: 'Polish' },
    { text: 'Portuguese', value: 'Portuguese' },
    { text: 'Russian', value: 'Russian' },
    { text: 'Spanish', value: 'Spanish' },
    { text: 'Swedish', value: 'Swedish' },
    { text: 'Turkish', value: 'Turkish' },
    { text: 'Vietnamese', value: 'Vietnamese' }
  ]"
  text="Select Language"
/>`

    const selected7 = ref(null)
    const searchInMenuCode = `<sui-dropdown
  text="Filter Posts"
  icon="filter"
  floating
  labeled
  button
  searchInMenu
  v-model="selected7"
  :options="[
    {
      text: 'Important',
      value: 'Important',
      label: { color: 'red', empty: true, circular: true },
    },
    {
      text: 'Announcement',
      value: 'Announcement',
      label: { color: 'blue', empty: true, circular: true },
    },
    {
      text: 'Cannot Fix',
      value: 'Cannot Fix',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      text: 'News',
      value: 'News',
      label: { color: 'purple', empty: true, circular: true },
    },
    {
      text: 'Enhancement',
      value: 'Enhancement',
      label: { color: 'orange', empty: true, circular: true },
    },
    {
      text: 'Change Declined',
      value: 'Change Declined',
      label: { empty: true, circular: true },
    },
    {
      text: 'Off Topic',
      value: 'Off Topic',
      label: { color: 'yellow', empty: true, circular: true },
    },
    {
      text: 'Interesting',
      value: 'Interesting',
      label: { color: 'pink', empty: true, circular: true },
    },
    {
      text: 'Discussion',
      value: 'Discussion',
      label: { color: 'green', empty: true, circular: true },
    },
  ]"
/>`

    const selected8 = ref({
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    })
    const inlineCode = `<span>
  Show me posts by <sui-dropdown
    inline
    v-model="selected8"
    :options="[
      {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
      },
      {
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
      },
      {
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
      },
      {
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
      },
    ]"
  />
</span>`

    const pointingCode = `<sui-dropdown
  icon="wrench"
  button
  pointing="top left"
>
  <sui-dropdown-menu>
    <sui-dropdown-item text="New" />
    <sui-dropdown-item text="Save As" />
    <sui-dropdown-item text="Edit" />
  </sui-dropdown-menu>
</sui-dropdown>`

    const floatingCode = `<sui-button-group color="teal">
  <sui-button>Save</sui-button>
  <sui-dropdown
    floating
    button
    icon="dropdown"
  >
    <sui-dropdown-menu>
      <sui-dropdown-item text="Edit Post" icon="edit" />
      <sui-dropdown-item text="Remove Post" icon="delete" />
      <sui-dropdown-item text="Hide Post" icon="hide" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-button-group>`

    return {
      dropdownCode,
      selected1,
      selectionCode,
      selected2,
      searchSelectionOptions,
      searchSelectionCode,
      selected3,
      clearableSelectionOptions,
      clearableSelectionCode,
      selected4,
      multipleCode,
      selected5,
      multipleCode2,
      selected6,
      searchDropdownCode,
      selected7,
      searchInMenuCode,
      selected8,
      inlineCode,
      pointingCode,
      floatingCode
    }
  }
})
</script>