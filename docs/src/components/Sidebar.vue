<template>
  <div class="sidemenu">
    <div style="flex: 1; overflow-y: scroll;">
      <sui-menu fluid inverted vertical>
        <sui-menu-item>
          <strong>
            Semantic UI Vue Next
          </strong>
        </sui-menu-item>
        <sui-menu-item as="router-link" to="/">
          <b>Getting Started</b>
        </sui-menu-item>
        <sui-menu-item>
          <sui-menu-header content="Elements" />
          <sui-menu-menu>
            <sui-menu-item as="router-link" name="Button" to="/elements/button" :active="isActive('/elements/button')" />
            <sui-menu-item as="router-link" name="Container" to="/elements/container" :active="isActive('/elements/container')" />
            <sui-menu-item as="router-link" name="Divider" to="/elements/divider" :active="isActive('/elements/divider')" />
            <sui-menu-item as="router-link" name="Emoji" to="/elements/emoji" :active="isActive('/elements/emoji')" />
            <sui-menu-item as="router-link" name="Flag" to="/elements/flag" :active="isActive('/elements/flag')" />
            <sui-menu-item as="a" name="Header" />
            <sui-menu-item as="a" name="Icon" />
            <sui-menu-item as="a" name="Image" />
            <sui-menu-item as="a" name="Input" />
            <sui-menu-item as="a" name="Label" />
            <sui-menu-item as="a" name="List" />
            <sui-menu-item as="a" name="Loader" />
            <sui-menu-item as="a" name="Rail" />
            <sui-menu-item as="a" name="Reveal" />
            <sui-menu-item as="a" name="Segment" />
            <sui-menu-item as="a" name="Step" />
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

    return { isActive }
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