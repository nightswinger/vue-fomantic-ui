import { defineComponent, h } from "vue";

export default defineComponent({
  render() {
    return h('tbody', {}, this.$slots.default?.())
  }
})