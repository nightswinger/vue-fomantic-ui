import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedDate',
  render() {
    return h('div', { class: 'date' }, this.$slots.default?.())
  }
})