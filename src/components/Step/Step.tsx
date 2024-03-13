import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"
import { Icon } from "../Icon"

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
        {props.icon && <Icon name={props.icon} />}
        {(props.title || props.description) && <div class="content">
          {props.title && <div class="title">{props.title}</div>}
          {props.description && <div class="description">{props.description}</div>}
        </div>}
        {slots.default?.()}
      </div>
    )
  }
},
{
  props: {
    active: Boolean,
    completed: Boolean,
    description: String,
    disabled: Boolean,
    fluid: Boolean,
    href: String,
    icon: String,
    link: Boolean,
    title: String,
    vertical: Boolean,
  }
})
