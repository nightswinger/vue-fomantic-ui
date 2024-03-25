import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly, computeKeyOrKeyValue, computeWidthProp } from "@/utils/classNameHelper"

import TableHeader from "./TableHeader"
import TableBody from "./TableBody"

export default defineComponent({
  props: {
    attached: [Boolean, String],
    basic: [Boolean, String],
    celled: Boolean,
    collapsing: Boolean,
    color: String,
    columns: Number,
    compact: [Boolean, String],
    dataSource: Array,
    definition: Boolean,
    fixed: Boolean,
    inverted: Boolean,
    rowActive: Function,
    rowColor: Function,
    rowDisabled: Function,
    rowError: Function,
    rowWarning: Function,
    padded: [Boolean, String],
    selectable: Boolean,
    singleLine: Boolean,
    size: String,
    stackable: Boolean,
    striped: Boolean,
    structured: Boolean,
    unstackable: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.celled, 'celled'),
        computeKeyOnly(props.collapsing, 'collapsing'),
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

    const columns = computed(() => {
      const children = slots.default?.()
      return children?.filter((child: any) => child.type?.name === 'Column')
    })

    return () => {
      if (!columns.value || columns.value.length === 0) {
        return <table class={classes.value}>{slots.default?.()}</table>
      }

      return (
        <table class={classes.value}>
          <TableHeader columns={columns.value} />
          <TableBody
            columns={columns.value}
            rows={props.dataSource}
            rowActive={props.rowActive}
            rowColor={props.rowColor}
            rowDisabled={props.rowDisabled}
            rowError={props.rowError}
            rowWarning={props.rowWarning}
          />
        </table>
      )
    }
  },
})
