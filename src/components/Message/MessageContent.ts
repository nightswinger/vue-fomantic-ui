import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiMessageContent',
  render() {
    return h('div', { class: 'content' }, this.$slots.default?.())
  }
})