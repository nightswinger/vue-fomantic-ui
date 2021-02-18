<template>
  <div>
    <sidebar />
    <div class="article">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  name: 'Home',
  components: { Sidebar }
})
</script>

<style>
.article {
  margin-left: 250px;
}

.ui.container.main {
  margin-left: 3rem !important;
  width: auto !important;
  max-width: 960px !important;
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

.example {
  padding: 2rem 0rem;
}
</style>
