import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiDivider',
  props: {
    clearing: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    horizontal: Boolean,
    inverted: Boolean,
    section: Boolean,
    textAlign: String,
    vertical: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.clearing, 'clearing'),
        computeKeyOnly(props.fitted, 'fitted'),
        computeKeyOnly(props.hidden, 'hidden'),
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.section, 'section'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyValue(props.textAlign, 'aligned'),
        'divider'
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