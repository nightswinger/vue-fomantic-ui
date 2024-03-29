import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly, computeKeyOrKeyValue, computeWidthProp } from "@/utils/classNameHelper"
import { makeScrollingProps, useScrolling } from "@/composables/scrolling"

import TableHeader from "./TableHeader"
import TableBody from "./TableBody"
import TableFooter from "./TableFooter"

export default defineComponent({
  props: {
    attached: [Boolean, String],
    basic: [Boolean, String],
    celled: Boolean,
    collapsing: Boolean,
    color: String,
    columns: Number,
    compact: [Boolean, String],
    definition: Boolean,
    definitionClass: String,
    fixed: Boolean,
    hideHeader: Boolean,
    inverted: Boolean,
    items: Array,
    rowActive: Function,
    rowClass: [Boolean, Function],
    rowColor: Function,
    rowDisabled: Function,
    rowError: Function,
    rowNegative: Function,
    rowPositive: Function,
    rowWarning: Function,
    rowsGroupBy: String,
    padded: [Boolean, String],
    selectable: Boolean,
    singleLine: Boolean,
    size: String,
    stackable: Boolean,
    striped: Boolean,
    structured: Boolean,
    unstackable: Boolean,
    ...makeScrollingProps(),
  },
  setup(props, { emit, slots }) {
    const { scrollingClasses } = useScrolling(props)

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
        scrollingClasses.value,
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
          {
            !props.hideHeader &&
            <TableHeader
              columns={columns.value}
              definition={!!slots.definition}
              v-slots={{ default: slots.header }}
            />
          }
          <TableBody
            columns={columns.value}
            definitionClass={props.definitionClass}
            rows={props.items}
            rowsGroupBy={props.rowsGroupBy}
            rowActive={props.rowActive}
            rowClass={props.rowClass}
            rowColor={props.rowColor}
            rowDisabled={props.rowDisabled}
            rowError={props.rowError}
            rowNegative={props.rowNegative}
            rowPositive={props.rowPositive}
            rowWarning={props.rowWarning}
            onRow-click={(event) => props.selectable && emit('row:select', { data: event.data })}
            onCell-click={(event) => emit('cell:select', { data: event.data, value: event.value })}
            v-slots={{ definition: slots.definition }}
          />
          <TableFooter v-slots={slots.footer} />
        </table>
      )
    }
  },
})
