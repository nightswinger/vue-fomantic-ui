import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedLabel',
  render() {
    return h('div', { class: 'label' }, this.$slots.default?.())
  }
})