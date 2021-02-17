import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiMessageHeader',
  render() {
    return h('div', { class: 'header' }, this.$slots.default?.())
  }
})