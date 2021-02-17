import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiHeaderSubheader',
  props: {
    as: String,
  },
  setup(props) {
    const elementType = props.as || 'div'

    return { elementType }
  },
  render() {
    return h(
      this.elementType,
      { class: 'sub header' },
      this.$slots.default?.()
    )
  }
})