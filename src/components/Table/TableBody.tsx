import { defineComponent } from "vue"

import TableCell from "./TableCell"

export default defineComponent({
  props: {
    columns: Array,
    rows: Array,
    rowActive: Function,
    rowDisabled: Function,
    rowError: Function,
    rowWarning: Function,
  },
  setup(props, { slots }) {
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
              <tr key={row.id}>
                {props.columns?.map((column: any) => {
                  const {
                    field,
                    header,
                    active,
                    disabled,
                    error,
                    warning
                  } = column.props

                  return (
                    <TableCell
                      data-label={header}
                      key={field}
                      active={
                        props.rowActive?.({ data: row, index }) ||
                        active?.({ value: row[field] })
                      }
                      disabled={
                        props.rowDisabled?.({ data: row, index }) ||
                        disabled?.({ value: row[field] })
                      }
                      error={
                        props.rowError?.({ data: row, index }) ||
                        error?.({ value: row[field] })
                      }
                      warning={
                        props.rowWarning?.({ data: row, index }) ||
                        warning?.({ value: row[field] })
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
