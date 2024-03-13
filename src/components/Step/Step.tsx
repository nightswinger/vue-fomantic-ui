import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent((props, { slots}) => {
  const classes = computed(() => {
    return clsx(
      computeKeyOnly(props.active, 'active'),
      computeKeyOnly(props.completed, 'completed'),
      computeKeyOnly(props.disabled, 'disabled'),
      computeKeyOnly(props.fluid, 'fluid'),
      computeKeyOnly(props.link, 'link'),
      computeKeyOnly(props.vertical, 'vertical'),
      'step'
    )
  })

  return () => {
    if (props.href) {
      return (
        <a
          class={classes.value}
          href={props.href}
        >
          {slots.default?.()}
        </a>
      )
    }

    return (
      <div class={classes.value}>
        {slots.default?.()}
      </div>
    )
  }
},
{
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    href: String,
    link: Boolean,
    vertical: Boolean,
  }
})
