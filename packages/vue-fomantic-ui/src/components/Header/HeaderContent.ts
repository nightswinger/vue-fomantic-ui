import { defineComponent, h } from "vue";

export default defineComponent({
  render() {
    return h('div', { class: 'content' }, this.$slots.default?.())
  }
})