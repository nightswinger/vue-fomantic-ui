import { defineComponent, h } from "vue";

export default defineComponent({
  render() {
    return h('div', { class: 'label' }, this.$slots.default?.())
  }
})