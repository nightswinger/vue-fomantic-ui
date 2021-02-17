import clsx from "clsx";
import { defineComponent, h } from "vue";
import { CelledProps, useCelledClass, useCelledProps } from "../../composables/celled";
import { useColumnClass, useColumnProps } from "../../composables/column";
import { DividedProps, useDividedClass, useDividedProps } from "../../composables/divided";
import { PaddedProps, usePaddedClass, usePaddedProps } from "../../composables/padded";
import { RelaxedProps, useRelaxedClass, useRelaxedProps } from "../../composables/relaxed";
import { ReversedProps, useReversedClass, useReversedProps } from "../../composables/reversed";
import { TextAlignProps, useTextAlignClass, useTextAlignProps } from "../../composables/textAlign";
import { useVerticalAlignClass, useVerticalAlignProps, VerticalAlignProps } from "../../composables/verticalAlign";

export default defineComponent({
  name: 'SuiGrid',
  props: {
    centered: Boolean,
    container: Boolean,
    doubling: Boolean,
    inverted: Boolean,
    stackable: Boolean,
    ...useCelledProps,
    ...useDividedProps,
    ...useColumnProps,
    ...usePaddedProps,
    ...useRelaxedProps,
    ...useReversedProps,
    ...useTextAlignProps,
    ...useVerticalAlignProps
  },
  setup(props, { slots }) {
    const { celledClass } = useCelledClass(props as CelledProps)
    const { columnClass } = useColumnClass(props)
    const { dividedClass } = useDividedClass(props as DividedProps)
    const { paddedClass } = usePaddedClass(props as PaddedProps)
    const { relaxedClass } = useRelaxedClass(props as RelaxedProps)
    const { reversedClass } = useReversedClass(props as ReversedProps)
    const { textAlignClass } = useTextAlignClass(props as TextAlignProps)
    const { verticalAlignClass } = useVerticalAlignClass(props as VerticalAlignProps)

    const computedClass = clsx(
      'ui',
      props.container && 'container',
      props.centered && 'centered',
      props.doubling && 'doubling',
      props.inverted && 'inverted',
      props.stackable && 'stackable',
      textAlignClass.value,
      verticalAlignClass.value,
      relaxedClass.value,
      reversedClass.value,
      paddedClass.value,
      celledClass.value,
      columnClass.value,
      dividedClass.value,
      'grid'
    )

    return () => (
      h('div', {
        class: computedClass
      }, slots.default?.())
    )
  }
})