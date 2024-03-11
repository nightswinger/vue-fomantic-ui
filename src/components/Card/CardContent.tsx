import clsx from "clsx"
import { computed, defineComponent } from "vue"
import { computeKeyOnly } from "../../utils/classNameHelper"

export default defineComponent((props, { slots}) => {
  const classes = computed(() => {
    return clsx(
      computeKeyOnly(props.extra, 'extra'),
      'content'
    )
  })

  return () => {
    return (
      <div class={classes.value}>
        {slots.default?.()}
      </div>
    )
  }
},
{
  props: {
    extra: Boolean
  }
})
