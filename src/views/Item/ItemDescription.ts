import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiItemDescription',
  render() {
    return h('div', { class: 'description' }, this.$slots.default?.())
  }
})