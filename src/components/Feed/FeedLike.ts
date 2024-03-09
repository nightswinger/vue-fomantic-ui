import { defineComponent, h } from "vue";

export default defineComponent({
  render() {
    return h('a', { class: 'like' }, this.$slots.default?.())
  }
})