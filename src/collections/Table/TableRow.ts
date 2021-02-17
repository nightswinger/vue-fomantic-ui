import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiTableRow',
  props: {
    active: Boolean,
    disabled: Boolean,
    error: Boolean,
    negative: Boolean,
    positive: Boolean,
    verticalAlign: String,
    warning: Boolean
  },
  setup(props) {
    const {
      active,
      disabled,
      error,
      negative,
      positive,
      verticalAlign,
      warning
    } = props

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(active, 'active'),
        computeKeyOnly(disabled, 'disabled'),
        computeKeyOnly(error, 'error'),
        computeKeyOnly(negative, 'negative'),
        computeKeyOnly(positive, 'positive'),
        computeKeyOnly(warning, 'warning'),
        computeKeyValue(verticalAlign, 'aligned')
      )
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return h('tr', { class: this.computedClass }, this.$slots.default?.())
    }

    return h('tr', {}, this.$slots.default?.())
  }
})