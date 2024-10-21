import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    columns: Array,
    definition: Boolean,
    fullWidth: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return clsx(computeKeyOnly(props.fullWidth, 'full-width'))
    })

    return () => {
      if (!props.columns) {
        return <thead class={classes.value}>{slots.default?.()}</thead>
      }

      return (
        <thead class={classes.value}>
          {
            slots.default ? slots.default() :
            <tr>
              {props.definition && <th></th>}
              {props.columns.map((column: any) => {
                const { header, field } = column.props

                return <th key={field}>{header}</th>
              })}
            </tr>
          }
        </thead>
      )
    }
  },
})
