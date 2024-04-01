import { defineComponent, h } from "vue";

export default defineComponent({
  render() {
    return h('a', { class: 'user' }, this.$slots.default?.())
  }
})