import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiItem',
  render() {
    return h('div', { class: 'item' }, this.$slots.default?.())
  }
})