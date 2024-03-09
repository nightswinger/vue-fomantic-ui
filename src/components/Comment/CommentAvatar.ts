import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    as: String,
    src: String
  },
  render() {
    let elementType = this.$props.as || 'div'

    return h(
      elementType,
      { class: 'avatar' },
      h('img', { src: this.$props.src })
    )
  }
})