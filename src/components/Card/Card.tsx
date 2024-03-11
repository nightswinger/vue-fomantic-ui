import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent((props, { slots }) => {
  const classes = computed(() => {
    return clsx(
      'ui',
      props.color,
      computeKeyOnly(props.centered, 'centered'),
      computeKeyOnly(props.fluid, 'fluid'),
      computeKeyOnly(props.horizontal, 'horizontal'),
      computeKeyOnly(props.link, 'link'),
      computeKeyOnly(props.raised, 'raised'),
      'card'
    )
  })

  return () => {
    if (props.href || props.link) {
      return <a
        class={classes.value}
        href={props.href}
      >
        {slots.href?.()}
      </a>
    }

    return <div class={classes.value}>
      {slots.default?.()}
    </div>
  }
},
{
  props: {
    centered: Boolean,
    color: String,
    fluid: Boolean,
    horizontal: Boolean,
    href: String,
    link: Boolean,
    raised: Boolean
  },
})
