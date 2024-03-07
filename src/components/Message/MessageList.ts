import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiMessageList',
  render() {
    return h('ul', { class: 'list' }, this.$slots.default?.())
  }
})