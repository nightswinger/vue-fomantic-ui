<template>
  <div>
    <doc-page-header
      title="Sidebar"
      sub="A sidebar hides additional content beside a page"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Sidebar"
        description="A sidebar"
        :code="sidebarCode"
      >
        <sui-grid :columns="1">
          <sui-grid-column>
            <sui-button @click="visible1 = !visible1" icon>
              <sui-icon name="arrow right" />
            </sui-button>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment class="pushable">
              <sui-sidebar v-model:visible="visible1" dimmed icon="labeled" inverted>
                <sui-menu-item>
                  <sui-icon name="home" />
                  Home
                </sui-menu-item>
                <sui-menu-item>
                  <sui-icon name="gamepad" />
                  Games
                </sui-menu-item>
                <sui-menu-item>
                  <sui-icon name="camera" />
                  Channels
                </sui-menu-item>
              </sui-sidebar>
              <div class="pusher">
                <sui-segment>
                  <sui-header as="h2">Main Header</sui-header>
                  <sui-image src="/images/wireframe/paragraph.png" />
                </sui-segment>
              </div>
            </sui-segment>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <sui-header as="h2" dividing>Properties</sui-header>
      <property-list-table :properties="properties" />

      <sui-header as="h2" dividing>Events</sui-header>
      <sui-table celled>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Name</sui-table-header-cell>
            <sui-table-header-cell>Description</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="e in events" :key="e.name">
            <sui-table-cell>{{ e.name }}</sui-table-cell>
            <sui-table-cell>{{ e.description }}</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue';
import DocExample from '../../components/DocExample.vue';
import PropertyListTable from '../../components/PropertyListTable.vue';

export default defineComponent({
  name: 'SidebarDoc',
  components: { DocPageHeader, DocExample, PropertyListTable },
  setup() {
    const visible1 = ref(false)
    const sidebarCode = `<sui-grid :columns="1">
  <sui-grid-column>
    <sui-button @click="visible1 = !visible1" icon>
      <sui-icon name="arrow right" />
    </sui-button>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment class="pushable">
      <sui-sidebar v-model:visible="visible1" dimmed icon="labeled" inverted>
        <sui-menu-item>
          <sui-icon name="home" />
          Home
        </sui-menu-item>
        <sui-menu-item>
          <sui-icon name="gamepad" />
          Games
        </sui-menu-item>
        <sui-menu-item>
          <sui-icon name="camera" />
          Channels
        </sui-menu-item>
      </sui-sidebar>
      <div class="pusher">
        <sui-segment>
          <sui-header as="h2">Main Header</sui-header>
          <sui-image src="/images/wireframe/paragraph.png" />
        </sui-segment>
      </div>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`

    const properties = [
      { name: 'animation', type: 'string', default: 'overlay', description: 'Specifies the animation of the sidebar.' },
      { name: 'dimmed', type: 'boolean', default: 'false', description: 'When specified, display the dim inside pusher content.' },
      { name: 'direction', type: 'string', default: 'left', description: 'Specifies the direction the sidebar should appear on.' },
      { name: 'visible', type: 'boolean', default: 'false', description: 'Specifies the visibility of the sidebar.' }
    ]

    const events = [
      { name: 'hide', description: 'Callback to invoke when sidebar hide.' },
      { name: 'show', description: 'Callback to invoke when sidebar show.' }
    ]

    return {
      visible1,
      sidebarCode,
      properties,
      events
    }
  }
})
</script>