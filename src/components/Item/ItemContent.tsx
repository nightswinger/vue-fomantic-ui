import clsx from "clsx"
import { computed, defineComponent, h } from "vue"

import { computeKeyValue } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    verticalAlign: String
  },
  setup(props, { slots }) {
    const { verticalAlign } = props

    const classes = computed(() => {
      return clsx(
        computeKeyValue(verticalAlign, 'aligned'),
        'content'
      )
    })

    return () => (
      <div class={classes.value}>
        {slots.default?.()}
        {slots.header && <div class="header">{slots.header()}</div>}
        {slots.metadata && <div class="meta">{slots.metadata()}</div>}
        {slots.description && <div class="description">{slots.description()}</div>}
      </div>
    )
  },
})
