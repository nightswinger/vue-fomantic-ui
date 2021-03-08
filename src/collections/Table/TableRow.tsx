import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiTableRow',
  props: {
    active: Boolean,
    color: String,
    disabled: Boolean,
    error: Boolean,
    negative: Boolean,
    positive: Boolean,
    textAlign: String,
    verticalAlign: String,
    warning: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.color,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.negative, 'negative'),
        computeKeyOnly(props.positive, 'positive'),
        computeKeyOnly(props.warning, 'warning'),
        computeKeyValue(props.textAlign, 'aligned'),
        computeKeyValue(props.verticalAlign, 'aligned')
      )
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return (
        <tr class={this.computedClass}>
          {this.$slots.default?.()}
        </tr>
      )
    }

    return (
      <tr>{this.$slots.default?.()}</tr>
    )
  }
})