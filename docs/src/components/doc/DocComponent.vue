<template>
  <div>
    <SuiSegment vertical style="border-bottom: 1px solid #DDDDDD;">
      <SuiContainer class="main">
        <div class="intro">
          <SuiHeader as="h1">
            {{ title }}
            <SuiHeaderSubheader>
              {{ description }}
            </SuiHeaderSubheader>
          </SuiHeader>

            <SuiDivider hidden />

            <SuiMenu floated="right">
              <SuiMenuItem as="a" icon>
                <SuiIcon name="edit" />
              </SuiMenuItem>
              <SuiMenuItem as="a" icon>
                <SuiIcon name="github" />
              </SuiMenuItem>
            </SuiMenu>
        </div>
      </SuiContainer>
    </SuiSegment>

    <SuiContainer class="main">
      <SuiSegment basic fitted>
        <DocSections :docs="componentDocs" />
        <DocTableContents />
      </SuiSegment>
    </SuiContainer>
  </div>
</template>

<script setup>
import DocSections from './DocSections.vue';
import DocTableContents from './DocTableContents.vue';

defineProps(['title', 'description', 'componentDocs'])
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
