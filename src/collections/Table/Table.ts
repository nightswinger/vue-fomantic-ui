import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
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
    size: String,
    stackable: Boolean,
    striped: Boolean,
    structured: Boolean,
    unstackable: Boolean
  },
  setup(props) {
    const {
      attached,
      basic,
      celled,
      color,
      columns,
      compact,
      definition,
      fixed,
      inverted,
      padded,
      selectable,
      size,
      stackable,
      striped,
      structured,
      unstackable
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        color,
        size,
        computeKeyOnly(celled, 'celled'),
        computeKeyOnly(definition, 'definition'),
        computeKeyOnly(fixed, 'fixed'),
        computeKeyOnly(inverted, 'inverted'),
        computeKeyOnly(selectable, 'selectable'),
        computeKeyOnly(stackable, 'stackable'),
        computeKeyOnly(striped, 'striped'),
        computeKeyOnly(structured, 'structured'),
        computeKeyOnly(unstackable, 'unstackable'),
        computeKeyOrKeyValue(attached, 'attached'),
        computeKeyOrKeyValue(basic, 'basic'),
        computeKeyOrKeyValue(compact, 'compact'),
        computeKeyOrKeyValue(padded, 'padded'),
        computeWidthProp(columns, 'column'),
        'table'
      )
    })

    return { computedClass }
  },
  render() {
    return h('table', { class: this.computedClass }, this.$slots.default?.())
  }
})