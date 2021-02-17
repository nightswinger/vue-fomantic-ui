import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiCommentContent',
  render() {
    return h('div', { class: 'content' }, this.$slots.default?.())
  }
})