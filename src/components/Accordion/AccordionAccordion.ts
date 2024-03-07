import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiAccordionAccordion',
  render() {
    return h('div', { class: 'accordion' }, this.$slots.default?.())
  }
})