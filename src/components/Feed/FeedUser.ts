import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedUser',
  render() {
    return h('a', { class: 'user' }, this.$slots.default?.())
  }
})