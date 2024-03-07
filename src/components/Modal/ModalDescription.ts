import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiModalDescription',
  render() {
    return h('div', { class: 'description' }, this.$slots.default?.())
  }
})