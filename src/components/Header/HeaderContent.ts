import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiHeaderContent',
  render() {
    return h('div', { class: 'content' }, this.$slots.default?.())
  }
})