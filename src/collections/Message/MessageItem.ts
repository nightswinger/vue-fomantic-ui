import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiMessageItem',
  render() {
    return h('li', { class: 'content' }, this.$slots.default?.())
  }
})