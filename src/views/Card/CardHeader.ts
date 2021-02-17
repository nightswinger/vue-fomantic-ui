import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiCardHeader',
  render() {
    return h('div', { class: 'header' }, this.$slots.default?.())
  }
})