import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiCommentMetadata',
  render() {
    return h('div', { class: 'metadata' }, this.$slots.default?.())
  }
})