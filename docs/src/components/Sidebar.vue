<template>
  <div class="sidemenu">
    <div style="flex: 1; overflow-y: scroll;">
      <SidebarMenu />
    </div>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue';
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
  height: 100vh;
  background: #1B1C1D;
  overflow-x: hidden;
}

@media only screen and (max-width: 1144px) {
  .sidemenu {
    display: none;
  }
}
</style>