import clsx from 'clsx'
import { computed, defineComponent } from 'vue'

import { makeSizeProps, useSize } from '@/composables/size'
import { computeKeyOnly } from '@/utils/classNameHelper'

export default defineComponent((props, { slots }) => {
  const { sizeClass } = useSize(props)

  const classes = computed(() => {
    return clsx(
      'ui',
      sizeClass.value,
      computeKeyOnly(props.basic, 'basic'),
      computeKeyOnly(props.compact, 'compact'),
      computeKeyOnly(props.horizontal, 'horizontal'),
      computeKeyOnly(props.piled, 'piled'),
      computeKeyOnly(props.raised, 'raised'),
      computeKeyOnly(props.stacked, 'stacked'),
      'segments'
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
    basic: Boolean,
    compact: Boolean,
    horizontal: Boolean,
    piled: Boolean,
    raised: Boolean,
    stacked: Boolean,
    ...makeSizeProps(),
  }
})
