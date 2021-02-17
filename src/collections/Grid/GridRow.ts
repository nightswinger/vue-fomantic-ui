import { defineComponent, h } from "vue";
import { ColorProps, useColorClass, useColorProps } from "../../composables/color";
import { useColumnClass, useColumnProps } from "../../composables/column";
import { OnlyProps, useOnlyClass, useOnlyProps } from "../../composables/only";
import { TextAlignProps, useTextAlignClass, useTextAlignProps } from "../../composables/textAlign";

export default defineComponent({
  name: 'SuiGridRow',
  props: {
    centered: Boolean,
    stretched: Boolean,
    ...useColorProps,
    ...useColumnProps,
    ...useOnlyProps,
    ...useTextAlignProps
  },
  setup(props, { slots }) {
    const { colorClass } = useColorClass(props as ColorProps)
    const { columnClass } = useColumnClass(props)
    const { onlyClass } = useOnlyClass(props as OnlyProps)
    const { textAlignClass } = useTextAlignClass(props as TextAlignProps)

    return () => (
      h('div', {
        class: [
          props.centered && 'centered',
          colorClass.value,
          columnClass.value,
          onlyClass.value,
          textAlignClass.value,
          props.stretched && 'stretched',
          'row'
        ]
      }, slots.default?.())
    )
  }
})