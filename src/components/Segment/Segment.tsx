import clsx from 'clsx'
import { computed, defineComponent } from 'vue'

import type { PropType } from 'vue'

import { makeColorProps, useColor } from '@/composables/color'
import { makeSizeProps, useSize } from '@/composables/size'
import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from '@/utils/classNameHelper'

export default defineComponent({
  props: {
    attached: [Boolean, String],
    basic: Boolean,
    circular: Boolean,
    clearing: Boolean,
    compact: Boolean,
    disabled: Boolean,
    fitted: [Boolean, String],
    floated: String,
    inverted: Boolean,
    loading: Boolean,
    padded: [Boolean, String],
    piled: Boolean,
    placeholder: Boolean,
    raised: Boolean,
    scrolling: [Boolean, String] as PropType<boolean | 'very long' | 'long' | 'short' | 'very short'>,
    secondary: Boolean,
    stacked: Boolean,
    tertiary: Boolean,
    textAlign: String,
    vertical: Boolean,

    ...makeColorProps(),
    ...makeSizeProps(),
  },
  setup: (props, { slots }) => {
    const { colorClasses } = useColor(props)
    const { sizeClass } = useSize(props)

    const classes = computed(() => {
      return clsx(
        'ui',
        colorClasses.value,
        sizeClass.value,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.clearing, 'clearing'),
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.loading, 'loading'),
        computeKeyOnly(props.piled, 'piled'),
        computeKeyOnly(props.placeholder, 'placeholder'),
        computeKeyOnly(props.raised, 'raised'),
        computeKeyOnly(props.secondary, 'secondary'),
        computeKeyOnly(props.stacked, 'stacked'),
        computeKeyOnly(props.tertiary, 'tertiary'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyValue(props.floated, 'floated'),
        computeKeyValue(props.textAlign, 'aligned'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        computeKeyOrKeyValue(props.fitted, 'fitted'),
        computeKeyOrKeyValue(props.padded, 'padded'),
        computeKeyOrKeyValue(props.scrolling, 'scrolling'),
        'segment'
      )
    })

    return () => (
      <div class={classes.value}>
        {slots.default?.()}
      </div>
    )
  }
})
