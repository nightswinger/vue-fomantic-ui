import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiStatisticGroup',
  props: {
    color: String,
    horizontal: Boolean,
    inverted: Boolean,
    size: String,
    widths: Number
  },
  setup(props) {
    const {
      color,
      horizontal,
      inverted,
      size,
      widths
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        color,
        size,
        computeKeyOnly(horizontal, 'horizontal'),
        computeKeyOnly(inverted, 'inverted'),
        computeWidthProp(widths, ''),
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