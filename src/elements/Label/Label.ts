import { computed, defineComponent, h } from 'vue'
import clsx from 'clsx'

import { useColorProps, useColorClass } from "../../composables/color"
import type { ColorProps } from "../../composables/color"

export default defineComponent({
  name: 'SuiLabel',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: (value: string) => ['a', 'div'].includes(value)
    },
    pointing: {
      type: String,
      validator: (value: string) => {
        return ['below', 'left', 'right'].includes(value) || value.length === 0;
      }
    },
    tag: Boolean,
    basic: Boolean,
    image: Boolean,
    prompt: Boolean,
    corner: String,
    horizontal: Boolean,
    floating: Boolean,
    empty: Boolean,
    circular: Boolean,
    ...useColorProps,
    size: String
  },
  setup(props, { slots }) {
    const { colorClass } = useColorClass(props as ColorProps)
    const pointingClass = computed(() => {
      if (!props.pointing) return null
      if (props.pointing.length === 0) return 'pointing'

      if (['below', 'left', 'right'].includes(props.pointing)) {
        return `${props.pointing} pointing`
      }
    })
    const cornerClass = computed(() => {
      if (!props.corner) return null
      if ((props.corner === 'right') || (props.corner === 'left')) {
        return `${props.corner} corner`
      }
    })

    const labelClasses = computed(() => {
      return clsx(
        'ui',
        props.size,
        colorClass.value,
        pointingClass.value,
        cornerClass.value,
        {
          tag: props.tag,
          image: props.image,
          basic: props.basic,
          prompt: props.prompt,
          horizontal: props.horizontal,
          floating: props.floating,
          empty: props.empty,
          circular: props.circular,
        },
        'label'
      )
    })

    return () => (
      h(props.as, {
        class: labelClasses.value
      }, slots.default?.())
    )
  }
})