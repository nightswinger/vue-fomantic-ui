import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedLike',
  render() {
    return h('a', { class: 'like' }, this.$slots.default?.())
  }
})