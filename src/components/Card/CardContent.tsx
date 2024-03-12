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
        {props.header && <div class="header">{props.header}</div>}
        {slots.header && <div class="header">{slots.header?.()}</div>}
        {slots.meta && <div class="meta">{slots.meta?.()}</div>}
        {slots.description && <div class="description">{slots.description?.()}</div>}
        {slots.default?.()}
      </div>
    )
  }
},
{
  props: {
    extra: Boolean,
    header: String,
  }
})
