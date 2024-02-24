<template>
  <SuiMenu id="navbar" fixed icon inverted size="big">
    <SuiMenuItem @click="onClick">
      <SuiIcon name="hamburger" />
    </SuiMenuItem>
    <SuiMenuItem>{{ label }}</SuiMenuItem>
  </SuiMenu>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router'

defineProps(['onClick'])

const label = ref()

const router = useRouter()

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

watchEffect(() => {
  const route = router.currentRoute.value
  const path = route.path

  const match = path.match(/\/([^/]+)$/)
  if (match) {
    label.value = capitalize(match[1])
  }
})
</script>

<style scoped>
@media only screen and (min-width: 1145px) {
  #navbar {
    display: none;
  }
}
</style>
