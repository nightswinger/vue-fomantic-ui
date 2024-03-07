import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiModalHeader',
  render() {
    return h('div', { class: 'header' }, this.$slots.default?.())
  }
})