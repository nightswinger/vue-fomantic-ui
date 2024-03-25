import { defineComponent } from "vue"

import TableCell from "./TableCell"

export default defineComponent({
  props: {
    columns: Array,
    rows: Array,
    rowActive: Function,
    rowColor: Function,
    rowDisabled: Function,
    rowError: Function,
    rowWarning: Function,
  },
  emits: ['row-click'],
  setup(props, { emit, slots }) {
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
              <tr key={row.id} onClick={() => emit('row-click', { data: row })}>
                {props.columns?.map((column: any) => {
                  const {
                    field,
                    header,
                    active,
                    color,
                    disabled,
                    error,
                    marked,
                    warning,
                  } = column.props

                  return (
                    <TableCell
                      data-label={header}
                      key={field}
                      active={
                        props.rowActive?.({ data: row, index }) ||
                        active?.({ value: row[field], index })
                      }
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
                      marked={
                        marked?.({ data: row, value: row[field], index })
                      }
                      warning={
                        props.rowWarning?.({ data: row, index }) ||
                        warning?.({ value: row[field], index })
                      }
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
