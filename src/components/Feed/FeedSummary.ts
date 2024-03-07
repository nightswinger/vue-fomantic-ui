import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedSummary',
  render() {
    return h('div', { class: 'summary' }, this.$slots.default?.())
  }
})