import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyValue, computeTextAlignProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiTableCell',
  props: {
    active: Boolean,
    collapsing: Boolean,
    color: String,
    disabled: Boolean,
    error: Boolean,
    marked: String,
    negative: Boolean,
    positive: Boolean,
    selectable: Boolean,
    singleLine: Boolean,
    textAlign: String,
    verticalAlign: String,
    warning: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.color,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.collapsing, 'collapsing'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.negative, 'negative'),
        computeKeyOnly(props.positive, 'positive'),
        computeKeyOnly(props.selectable, 'selectable'),
        computeKeyOnly(props.singleLine, 'single line'),
        computeKeyOnly(props.warning, 'warning'),
        computeKeyValue(props.verticalAlign, 'aligned'),
        computeKeyValue(props.marked, 'marked'),
        computeTextAlignProp(props.textAlign)
      )
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return (
        <td class={this.computedClass}>
          {this.$slots.default?.()}
        </td>
      )
    }

    return (
      <td>{this.$slots.default?.()}</td>
    )
  }
})