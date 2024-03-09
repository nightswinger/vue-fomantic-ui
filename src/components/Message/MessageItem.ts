import { defineComponent, h } from "vue";

export default defineComponent({
  render() {
    return h('li', { class: 'content' }, this.$slots.default?.())
  }
})