<template>
  <SuiGridRow>
    <SuiGridColumn>
      <SuiHeader as="h3" class="doc-section-text">
        {{ label }}
        <RouterLink :to="`${currentRoutePath}#${$attrs.id}`" target="_self" @click="handleAnchorLink">
          <SuiIcon name="linkify" color="grey" size="small" link fitted />
        </RouterLink>
      </SuiHeader>
    </SuiGridColumn>
    <SuiGridColumn textAlign="right">
      <SuiIcon name="code" color="grey" link @click="onClick" />
    </SuiGridColumn>
  </SuiGridRow>
  <p>
    <slot></slot>
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { SuiIcon } from 'vue-fomantic-ui'

defineOptions({ inheritAttrs: false })

defineProps(['label', 'onClick'])

const router = useRouter()
const currentRoutePath = computed(() => {
  const path = router.currentRoute.value.path

  if (path.lastIndexOf('/') === path.length - 1) {
    return path.slice(0, -1)
  }

  return path
})

const handleAnchorLink = (e) => {
  e.preventDefault()

  const target = e.target.parentElement
  const href = target.getAttribute('href')
  const id = href.slice(href.indexOf('#') + 1)
  const el = document.getElementById(id)

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.doc-section-text > a {
  margin-left: 0.5rem;
  display: none;
}
.doc-section-text:hover > a {
  display: inline-block;
}
</style>
