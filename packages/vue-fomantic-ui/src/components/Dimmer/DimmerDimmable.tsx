import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent((props, { slots }) => {
  const classes = computed(() => {
    return clsx(
      'ui',
      computeKeyOnly(props.blurring, 'blurring'),
      'dimmable',
      'segment'
    )
  })

  return () => (
    <div class={classes.value}>
      {slots.default?.()}
    </div>
  )
},
{
  props: {
    blurring: Boolean
  }
})
