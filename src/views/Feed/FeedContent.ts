import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedContent',
  render() {
    return h('div', { class: 'content' }, this.$slots.default?.())
  }
})