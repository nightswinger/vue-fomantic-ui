import clsx from 'clsx'
import { computed, defineComponent, h } from 'vue'
import { ColorProps, useColorClass, useColorProps } from '../../composables/color'
import { FloatedProps, useFloatedClass, useFloatedProps } from '../../composables/floated'
import { PaddedProps, usePaddedClass, usePaddedProps } from '../../composables/padded'
import { useSizeProps } from '../../composables/size'
import { TextAlignProps, useTextAlignClass, useTextAlignProps } from '../../composables/textAlign'
import { computeKeyOnly, computeKeyOrKeyValue } from '../../utils/classNameHelper'

export default defineComponent({
  name: 'SuiSegment',
  props: {
    attached: [Boolean, String],
    basic: Boolean,
    clearing: Boolean,
    compact: Boolean,
    disabled: Boolean,
    inverted: Boolean,
    loading: Boolean,
    piled: Boolean,
    placeholder: Boolean,
    raised: Boolean,
    secondary: Boolean,
    stacked: Boolean,
    tertiary: Boolean,
    vertical: Boolean,
    ...useColorProps,
    ...useFloatedProps,
    ...usePaddedProps,
    ...useSizeProps,
    ...useTextAlignProps
  },
  setup(props, { slots }) {
    const { colorClass } = useColorClass(props as ColorProps)
    const { floatedClass } = useFloatedClass(props as FloatedProps)
    const { paddedClass } = usePaddedClass(props as PaddedProps)
    const { textAlignClass } = useTextAlignClass(props as TextAlignProps)

    const {
      basic,
      compact,
      disabled,
      inverted,
      loading,
      placeholder,
      raised,
      secondary,
      size,
      stacked,
      tertiary,
      vertical
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        basic && 'basic',
        compact && 'compact',
        disabled && 'disabled',
        inverted && 'inverted',
        loading && 'loading',
        placeholder && 'placeholder',
        raised && 'raised',
        secondary && 'secondary',
        stacked && 'stacked',
        tertiary && 'tertiary',
        size && size,
        vertical && 'vertical',
        colorClass.value,
        floatedClass.value,
        paddedClass.value,
        textAlignClass.value,
        computeKeyOnly(props.clearing, 'clearing'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        'segment'
      )
    })

    return () => (
      h('div', {
        class: computedClass.value,
      }, slots.default?.())
    )
  }
})