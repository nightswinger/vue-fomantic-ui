import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyValue, computeTextAlignProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiTableCell',
  props: {
    active: Boolean,
    collapsing: Boolean,
    disabled: Boolean,
    error: Boolean,
    negative: Boolean,
    positive: Boolean,
    selectable: Boolean,
    singleLine: Boolean,
    textAlign: String,
    verticalAlign: String,
    warning: Boolean
  },
  setup(props) {
    const {
      active,
      collapsing,
      disabled,
      error,
      negative,
      positive,
      selectable,
      singleLine,
      textAlign,
      verticalAlign,
      warning
    } = props

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(active, 'active'),
        computeKeyOnly(collapsing, 'collapsing'),
        computeKeyOnly(disabled, 'disabled'),
        computeKeyOnly(error, 'error'),
        computeKeyOnly(negative, 'negative'),
        computeKeyOnly(positive, 'positive'),
        computeKeyOnly(selectable, 'selectable'),
        computeKeyOnly(singleLine, 'single line'),
        computeKeyOnly(warning, 'warning'),
        computeKeyValue(verticalAlign, 'aligned'),
        computeTextAlignProp(textAlign)
      )
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return h(
        'td',
        { class: this.computedClass },
        this.$slots.default?.()
      )
    }

    return h('td', {}, this.$slots.default?.())
  }
})