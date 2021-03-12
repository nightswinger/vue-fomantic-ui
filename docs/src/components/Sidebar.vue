<template>
  <div class="sidemenu">
    <div style="flex: 1; overflow-y: scroll;">
      <sui-menu fluid inverted vertical>
        <sui-menu-item as="div">
          <strong>
            Fomantic UI Vue
          </strong>
        </sui-menu-item>
        <sui-menu-item as="router-link" to="/">
          <b>Getting Started</b>
        </sui-menu-item>
        <sui-menu-item as="div">
          <sui-menu-header content="Elements" />
          <sui-menu-menu>
            <sui-menu-item
              v-for="el in elements"
              :key="el.name"
              :name="el.name"
              :to="el.path"
              :active="isActive(el.path)"
              as="router-link"
            />
          </sui-menu-menu>
        </sui-menu-item>
        <sui-menu-item as="div">
          <sui-menu-header content="Collections" />
          <sui-menu-menu>
            <sui-menu-item
              v-for="cl in collections"
              :key="cl.name"
              :name="cl.name"
              :to="cl.path"
              :active="isActive(cl.path)"
              as="router-link"
            />
          </sui-menu-menu>
        </sui-menu-item>
        <sui-menu-item as="div">
          <sui-menu-header content="Views" />
          <sui-menu-menu>
            <sui-menu-item
              v-for="v in views"
              :key="v.name"
              :name="v.name"
              :to="v.path"
              :active="isActive(v.path)"
              as="router-link"
            />
          </sui-menu-menu>
        </sui-menu-item>
      </sui-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const route = useRoute()
    const isActive = (path) => {
      return route.path === path
    }

    const elements = [
      { name: 'Button', path: '/elements/button' },
      { name: 'Container', path: '/elements/container' },
      { name: 'Divider', path: '/elements/divider' },
      { name: 'Emoji', path: '/elements/emoji' },
      { name: 'Flag', path: '/elements/flag' },
      { name: 'Header', path: '/elements/header' },
      { name: 'Icon', path: '/elements/icon' },
      { name: 'Image', path: '/elements/image' },
      { name: 'Input', path: '/elements/input' },
      { name: 'Label', path: '/elements/label' },
      { name: 'List', path: '/elements/list' },
      { name: 'Loader', path: '/elements/loader' },
      { name: 'Rail', path: '/elements/rail' },
      { name: 'Reveal', path: '/elements/reveal' },
      { name: 'Segment', path: '/elements/segment' },
      { name: 'Step', path: '/elements/step' }
    ]

    const collections = [
      { name: 'Breadcrumb', path: '/collections/breadcrumb' },
      { name: 'Form', path: '/collections/form' },
      { name: 'Grid', path: '/collections/grid' },
      { name: 'Menu', path: '/collections/menu' },
      { name: 'Message', path: '/collections/message' },
      { name: 'Table', path: '/collections/table' }
    ]

    const views = [
      { name: 'Advertisement', path: '/views/advertisement' },
      { name: 'Card', path: '/views/card' }
    ]

    return { isActive, elements, collections, views }
  }
})
</script>

<style scoped>
.sidemenu {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  background: #1B1C1D;
  overflow-x: hidden;
}
</style>