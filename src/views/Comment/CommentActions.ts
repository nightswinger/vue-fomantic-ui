import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiCommentActions',
  render() {
    return h('div', { class: 'actions' }, this.$slots.default?.())
  }
})