import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    as: String
  },
  render() {
    let elementType = this.$props.as || 'div'

    return h(elementType, { class: 'author' }, this.$slots.default?.())
  }
})