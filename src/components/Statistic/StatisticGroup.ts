import clsx from "clsx";
import { computed, defineComponent, h, provide } from "vue";
import { computeKeyOnly, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    color: String,
    horizontal: Boolean,
    inverted: Boolean,
    size: String,
    widths: Number
  },
  setup(props) {
    provide('ui', false)

    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeWidthProp(props.widths, ''),
        'statistics'
      )
    })

    return { computedClass }
  },
  render() {
    return h(
      'div',
      { class: this.computedClass },
      this.$slots.default?.()
    )
  }
})