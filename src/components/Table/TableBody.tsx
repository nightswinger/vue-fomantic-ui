import { defineComponent } from "vue"

import TableCell from "./TableCell"

export default defineComponent({
  props: {
    columns: Array,
    definitionClass: String,
    rows: Array,
    rowsGroupBy: String,
    rowActive: Function,
    rowClass: [Boolean, Function],
    rowColor: Function,
    rowDisabled: Function,
    rowError: Function,
    rowNegative: Function,
    rowPositive: Function,
    rowWarning: Function,
  },
  emits: ['row-click', 'cell-click'],
  setup(props, { emit, slots }) {
    const shouldRenderBodyCell = (field: string, index: number) => {
      if (!props.rows || !props.rowsGroupBy) return true
      if (props.rowsGroupBy !== field) return true
      if (index === 0) return true

      const currentRowField = (props.rows[index] as any)[field]
      const previousRowField = (props.rows[index - 1] as any)?.[field]

      return currentRowField !== previousRowField
    }

    const calculateRowGroupSize = (field: string, index: number) => {
      if (!props.rows || !props.rowsGroupBy) return undefined
      if (props.rowsGroupBy !== field) return undefined

      const currentRowField = (props.rows[index] as any)[field]
      let nextRowField = currentRowField

      let groupSize = 0
      while (currentRowField === nextRowField) {
        groupSize++
        nextRowField = (props.rows[index + groupSize] as any)?.[field]

        if (!nextRowField) break
      }

      return groupSize > 1 ? groupSize : undefined
    }

    return () => {
      if (!props.columns || props.columns.length === 0) {
        return (
          <tbody>{slots.default?.()}</tbody>
        )
      }

      return (
        <tbody>
          {
            props.rows?.map((row: any, index: number) => (
              <tr
                key={row.id}
                class={typeof props.rowClass === 'function' ? props.rowClass({ data: row, index }) : props.rowClass}
                onClick={() => emit('row-click', { data: row })}
              >
                {
                  slots.definition &&
                  <TableCell className={props.definitionClass}>
                    {slots.definition?.({ data: row })}
                  </TableCell>
                }
                {props.columns?.map((column: any) => {
                  const {
                    field,
                    header,
                    active,
                    cellClass,
                    collapsing,
                    color,
                    disabled,
                    error,
                    negative,
                    positive,
                    marked,
                    selectable,
                    warning,
                  } = column.props

                  const shouldRender = shouldRenderBodyCell(field, index)
                  const rowspan = calculateRowGroupSize(field, index)

                  return shouldRender && (
                    <TableCell
                      data-label={header}
                      key={field}
                      className={typeof cellClass === 'function' ? cellClass({ data: row, value: row[field], index }) : cellClass}
                      rowspan={rowspan}
                      active={
                        props.rowActive?.({ data: row, index }) ||
                        active?.({ value: row[field], index })
                      }
                      collapsing={collapsing}
                      color={
                        props.rowColor?.({ data: row, index }) ||
                        color?.({ value: row[field], index })
                      }
                      disabled={
                        props.rowDisabled?.({ data: row, index }) ||
                        disabled?.({ value: row[field], index })
                      }
                      error={
                        props.rowError?.({ data: row, index }) ||
                        error?.({ value: row[field], index })
                      }
                      negative={
                        props.rowNegative?.({ data: row, index }) ||
                        negative?.({ value: row[field], index })
                      }
                      positive={
                        props.rowPositive?.({ data: row, index }) ||
                        positive?.({ value: row[field], index })
                      }
                      marked={
                        marked?.({ data: row, value: row[field], index })
                      }
                      selectable={
                        typeof selectable === 'function' ? selectable?.({ data: row, value: row[field], index }) : selectable
                      }
                      warning={
                        props.rowWarning?.({ data: row, index }) ||
                        warning?.({ value: row[field], index })
                      }
                      onClick-cell={() => {
                        emit('cell-click', { data: row, value: row[field], index })
                      }}
                    >
                      {
                        column.children ?
                        column.children.body?.({ data: row }) :
                        row[field]
                      }
                    </TableCell>
                  )
                })}
              </tr>
            ))
          }
        </tbody>
      )
    }
  },
})
