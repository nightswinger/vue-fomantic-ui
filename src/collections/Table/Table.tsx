import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiTable',
  props: {
    attached: [Boolean, String],
    basic: Boolean,
    celled: Boolean,
    color: String,
    columns: Number,
    compact: [Boolean, String],
    definition: Boolean,
    fixed: Boolean,
    inverted: Boolean,
    padded: [Boolean, String],
    selectable: Boolean,
    singleLine: Boolean,
    size: String,
    stackable: Boolean,
    striped: Boolean,
    structured: Boolean,
    unstackable: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.celled, 'celled'),
        computeKeyOnly(props.definition, 'definition'),
        computeKeyOnly(props.fixed, 'fixed'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.selectable, 'selectable'),
        computeKeyOnly(props.singleLine, 'single line'),
        computeKeyOnly(props.stackable, 'stackable'),
        computeKeyOnly(props.striped, 'striped'),
        computeKeyOnly(props.structured, 'structured'),
        computeKeyOnly(props.unstackable, 'unstackable'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        computeKeyOrKeyValue(props.basic, 'basic'),
        computeKeyOrKeyValue(props.compact, 'compact'),
        computeKeyOrKeyValue(props.padded, 'padded'),
        computeWidthProp(props.columns, 'column'),
        'table'
      )
    })

    return { computedClass }
  },
  render() {
    return (
      <table class={this.computedClass}>
        {this.$slots.default?.()}
      </table>
    )
  }
})