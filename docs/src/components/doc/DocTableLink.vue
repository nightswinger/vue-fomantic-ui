<template>
  <details class="item">
    <summary class="title" @click="onClick">
      <i class="dropdown icon"></i>
      <b>{{ header }}</b>
    </summary>
    <div class="content menu active">
      <RouterLink
        v-for="item in items"
        :to="`#${item.id}`"
        class="item"
        @click="(e) => onLinkClick(e, item.id)"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </details>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RouterLink } from 'vue-router';

const { id } = useAttrs()

defineProps(['header', 'items'])

const onClick = (e) => {
  e.preventDefault()

  const el = document.getElementById(id)
  
  if (el.open) {
    close(el)

  } else {
    el.open = true
    open(el)
  }
}

const open = (e) => {
  const title = e.querySelector('.title')
  title.classList.add('active')

  const content = e.querySelector('.content')

  const contentHeight = content.offsetHeight
  content.style.maxHeight = 0

  requestAnimationFrame(() => {
    content.style.maxHeight = `${contentHeight}px`
  })

  const controller = new AbortController()
  content.addEventListener(
    'transitionend',
    () => {
      content.removeAttribute('style')
      controller.abort()
    },
    {signal: controller.signal}
  )
}

const close = (e) => {
  const title = e.querySelector('.title')

  const content = e.querySelector('.content')

  const contentHeight = content.offsetHeight;
  content.style.maxHeight = `${contentHeight}px`;

  requestAnimationFrame(() => {
    content.style.maxHeight = 0;
    title.classList.remove('active')
  })

  const controller = new AbortController()

  content.addEventListener(
    'transitionend',
    () => {
      content.removeAttribute('style')
      e.open = false
      controller.abort()
    },
    {signal: controller.signal}
  )
}

const onLinkClick = (e, id) => {
  e.preventDefault()

  const el = document.getElementById(id.replace('_link', ''))
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
summary ~* {
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
</style>
