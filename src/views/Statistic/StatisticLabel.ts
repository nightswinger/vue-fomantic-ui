import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiStatisticLabel',
  props: {
    content: String
  },
  render() {
    if (this.$props.content) {
      return h('div', { class: 'label' }, this.$props.content)
    }

    return h('div', { class: 'label' }, this.$slots.default?.())
  }
})