import clsx from "clsx";
import { defineComponent, h } from "vue";
import { CloseProps, useCloseClass, useCloseProps } from "../../composables/close";
import { PositionProps, usePositionClass, usePositionProps } from "../../composables/position";
import { useSizeProps } from "../../composables/size";

export default defineComponent({
  name: 'SuiRail',
  props: {
    attached: Boolean,
    dividing: Boolean,
    internal: Boolean,
    ...usePositionProps,
    ...useCloseProps,
    ...useSizeProps
  },
  setup(props, { slots }) {
    const { positionClass } = usePositionClass(props as PositionProps)
    const { closeClass } = useCloseClass(props as CloseProps)

    const railClasses = clsx(
      'ui',
      props.internal && 'internal',
      props.size,
      positionClass.value,
      props.attached && 'attached',
      closeClass.value,
      props.dividing && 'dividing',
      'rail'
    )

    return () => (
      h('div', {
        class: railClasses,
      }, slots.default?.())
    )
  }
})