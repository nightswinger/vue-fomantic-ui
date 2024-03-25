import { defineComponent } from "vue"

export default defineComponent({
  props: {
    columns: Array,
    rows: Array,
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
            props.rows?.map((row: any) => (
              <tr key={row.id}>
                {props.columns?.map((column: any) => {
                  const { field, header } = column.props

                  return (
                    <td
                      data-label={header}
                      key={field}
                    >
                      {
                        column.children ?
                        column.children.body?.({ data: row }) :
                        row[field]
                      }
                    </td>
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
