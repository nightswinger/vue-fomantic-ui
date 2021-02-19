import clsx from "clsx";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiIconGroup',
  props: {
    as: String,
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.size,
        'icons'
      )
    })

    return { computedClass }
  },
  render() {
    let elementType = this.$props.as || 'i'

    return h(
      elementType,
      { class: this.computedClass },
      this.$slots.default?.()
    )
  }
})