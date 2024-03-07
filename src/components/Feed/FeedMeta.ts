import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedMeta',
  render() {
    return h('div', { class: 'meta' }, this.$slots.default?.())
  }
})