import { defineComponent, h } from "vue";

export default defineComponent({
  render() {
    return h('ul', { class: 'list' }, this.$slots.default?.())
  }
})