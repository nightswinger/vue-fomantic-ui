import clsx from "clsx";
import { defineComponent, h } from "vue";
import { ColorProps, useColorClass, useColorProps } from "../../composables/color";
import { useSizeProps } from "../../composables/size";

export default defineComponent({
  name: 'SuiLabelGroup',
  props: {
    ...useSizeProps,
    ...useColorProps,
    tag: Boolean,
    circular: Boolean
  },
  setup(props, { slots }) {
    const { colorClass } = useColorClass(props as ColorProps)

    const labelGroupClasses = clsx(
      'ui',
      colorClass.value,
      props.size,
      {
        tag: props.tag,
        circular: props.circular
      },
      'labels'
    )

    return () => (
      h('div', {
        class: labelGroupClasses
      }, slots.default?.())
    )
  }
})