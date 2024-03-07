import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiItemExtra',
  render() {
    return h('div', { class: 'extra' }, this.$slots.default?.())
  }
})