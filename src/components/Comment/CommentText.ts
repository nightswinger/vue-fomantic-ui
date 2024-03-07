import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiCommentText',
  render() {
    return h('div', { class: 'text' }, this.$slots.default?.())
  }
})