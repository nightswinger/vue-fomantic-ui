<template>
  <SuiRail id="table-contents" position="right" dividing>
    <div class="sticky">
      <SuiHeader as="h3">{{ title }}</SuiHeader>
      <div class="ui vertical following fluid accordion text large menu">
        <template v-for="category in categories">
          <DocTableLink :id="`${category}_link`" :header="category" :items="links.filter(l => l.category === category)" />
        </template>
      </div>
    </div>
  </SuiRail>
</template>

<script setup>
import DocTableLink from './DocTableLink.vue';

const props = defineProps(['title', 'links'])

const categories = [...new Set(props.links.map(link => link.category))]
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-top: 2rem;
}

#table-contents {
  padding-top: 1.5rem;
}

@media only screen and (max-width: 1272px) {
  #table-contents {
    padding-left: 1.5rem;
    width: 260px;
  }
}

@media only screen and (max-width: 992px) {
  #table-contents {
    display: none;
  }
}
</style>
