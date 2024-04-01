import clsx from "clsx"
import { computed, defineComponent, h } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent((props, { slots }) => {
  const classes = computed(() => {
    return clsx(
      computeKeyOnly(props.active, 'active'),
      computeKeyOnly(props.disabled, 'disabled'),
      'item'
    )
  })

  let elementType = props.as || 'div'

  return () => (
    h(elementType, {
      class: classes.value
    }, slots.default?.())
  )
},{
  props: {
    active: Boolean,
    as: String,
    disabled: Boolean
  }
})
