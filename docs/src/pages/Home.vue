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

<style scoped>
.article {
  margin-left: 250px;
}
</style>