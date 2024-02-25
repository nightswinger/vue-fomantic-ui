<template>
  <SuiSegment class="pushable" :style="{border: 'none'}">
    <Drawer :visible="visible" />
    <div class="pusher" :style="{height: '100vh'}">
      <Sidebar />
      <Navbar :on-click="onClick" />
      <div class="article">
        <router-view />
      </div>
    </div>
  </SuiSegment>
</template>

<script setup>
import { ref } from "vue"

import Navbar from "../components/Navbar.vue"
import Sidebar from "../components/Sidebar.vue"
import Drawer from "../components/Drawer.vue";
import { onBeforeRouteUpdate } from "vue-router";

const visible = ref(false)
const onClick = () => visible.value = !visible.value

onBeforeRouteUpdate(() => {
  visible.value = false
})
</script>

<style scoped>
.article {
  margin-left: 250px;
  max-height: 100vh;
  overflow-y: auto;
}
.ui.container.main {
  flex: 1;
  margin-left: 3rem !important;
  margin-right: 3rem !important;
  width: auto !important;
  max-width: 960px !important;
}

@media only screen and (max-width: 1272px) {
  .article {
    margin-left: 200px;
  }
}

@media only screen and (max-width: 1144px) {
  .article {
    margin-left: 0;
    padding-top: 3rem;
  }
  .ui.container.main {
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  }
}

.intro:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.main {
  padding: 2rem 0rem;
}
.main > h2 {
  margin: 5rem 0rem 3rem;
}
</style>
