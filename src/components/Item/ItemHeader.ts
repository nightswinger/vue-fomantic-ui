import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiItemHeader',
  props: {
    as: String
  },
  render() {
    let elementType = this.$props.as || 'div'

    return h(elementType, { class: 'header' }, this.$slots.default?.())
  }
})