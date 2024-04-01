import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { makeSizeProps, useSize } from "@/composables/size"

export default defineComponent(props => {
  const { sizeClass } = useSize(props)

  const classes = computed(() => clsx(
    sizeClass.value,
    props.name,
    "flag"
  ))

  return () => (
    <i class={classes.value}></i>
  )
}, {
  props: {
    name: String,
    ...makeSizeProps()
  }
})
