import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiTableBody',
  render() {
    return h('tbody', {}, this.$slots.default?.())
  }
})