<template>
  <div>
    <SuiSegment
      id="masthead"
      vertical
      style="border-bottom: 1px solid #DDDDDD;"
    >
      <SuiContainer class="main">
        <div class="intro">
          <SuiHeader as="h1">
            {{ title }}
            <SuiHeaderSubheader>
              {{ description }}
            </SuiHeaderSubheader>
          </SuiHeader>

            <SuiDivider hidden />

            <SuiMenu icon floated="right">
              <SuiMenuItem as="a" icon ref="el" href="https://github.com/nightswinger/vue-fomantic-ui">
                <SuiIcon name="alternate github" />
              </SuiMenuItem>
              <SuiPopup :trigger="el" position="top right">
                View Project on GitHub
              </SuiPopup>
            </SuiMenu>
        </div>
        <Menu
          v-if="componentDocs && apiDocs"
          :items="['Definition', 'API']" :widths="2"
          :style="{ marginTop: '3rem', marginBottom: '2rem' }"
          v-model:active-index="menu"
        />
      </SuiContainer>
    </SuiSegment>

    <SuiContainer class="main">
      <SuiSegment basic fitted>

        <template v-if="componentDocs && menu === 0">
          <DocSections :docs="componentDocs" />
          <DocTableContents :title="title" :links="componentDocs" />
        </template>

        <template v-if="apiDocs && menu === 1">
          <DocApiTable :data="apiDocs" />
        </template>

        <slot></slot>
      </SuiSegment>
    </SuiContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

import DocApiTable from './DocApiTable.vue'
import DocSections from './DocSections.vue'
import DocTableContents from './DocTableContents.vue'

defineProps(['title', 'description', 'componentDocs', 'apiDocs'])

const el = ref()
const menu = ref(0)
</script>

<style scoped>
.ui.container.main {
  flex: 1;
  margin-left: 3rem !important;
  margin-right: 387px !important;
  width: auto !important;
  max-width: 960px !important;
}

@media only screen and (max-width: 1272px) {
  .ui.container.main {
    margin-right: 318px !important;
  }
}

@media only screen and (max-width: 1144px) {
  #masthead {
    padding-top: 3rem;
  }
  .ui.container.main {
    margin-left: 2rem !important;
  }
}

@media only screen and (max-width: 992px) {
  .ui.container.main {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
    max-width: none !important;
  }
}
.intro:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.main > h2 {
  margin: 5rem 0rem 3rem;
}
</style>
