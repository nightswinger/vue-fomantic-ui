import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { makeLoadingProps, useLoading } from "@/composables/loading"
import { makeSizeProps, useSize } from "@/composables/size"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent((props, { slots }) => {
  const { loadingClasses } = useLoading(props)
  const { sizeClass } = useSize(props)

  const classes = computed(() => {
    return clsx(
      'ui',
      props.color,
      computeKeyOnly(props.centered, 'centered'),
      computeKeyOnly(props.disabled, 'disabled'),
      computeKeyOnly(props.fluid, 'fluid'),
      computeKeyOnly(props.horizontal, 'horizontal'),
      computeKeyOnly(props.link, 'link'),
      computeKeyOnly(props.raised, 'raised'),
      loadingClasses.value,
      sizeClass.value,
      'card'
    )
  })

  return () => {
    if (props.href || props.link) {
      return <a
        class={classes.value}
        href={props.href}
      >
        {slots.default?.()}
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
    disabled: Boolean,
    fluid: Boolean,
    horizontal: Boolean,
    href: String,
    link: Boolean,
    raised: Boolean,
    ...makeLoadingProps(),
    ...makeSizeProps(),
  },
})
