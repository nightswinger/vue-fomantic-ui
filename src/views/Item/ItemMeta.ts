import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiItemMeta',
  render() {
    return h('div', { class: 'meta' }, this.$slots.default?.())
  }
})