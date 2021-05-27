<template>
  <div>
    <doc-page-header
      title="Calendar"
      sub="A calendar allows users to select any date or time"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Calendar"
        description="A standard calendar"
        :code="calendarCode"
      >
        <sui-calendar v-model="calendar1" placeholder="Date/Time" />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'CalendarDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const calendar1 = ref(null)
    const calendarCode = `<sui-calendar v-model="calendar1" placeholder="Date/Time" />`

    return {
      calendar1,
      calendarCode
    }
  }
})
</script>