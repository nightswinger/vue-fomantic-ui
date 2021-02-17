import clsx from "clsx";
import { defineComponent, h } from "vue";
import { ColorProps, useColorClass, useColorProps } from "../../composables/color";
import { FloatedProps, useFloatedClass, useFloatedProps } from "../../composables/floated";
import { OnlyProps, useOnlyClass, useOnlyProps } from "../../composables/only";
import { TextAlignProps, useTextAlignClass, useTextAlignProps } from "../../composables/textAlign";
import { useWidthClass, useWidthProps } from "../../composables/width";
import { computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiGridColumn',
  props: {
    ...useColorProps,
    ...useFloatedProps,
    ...useOnlyProps,
    ...useTextAlignProps,
    ...useWidthProps,
    mobile: Number,
    tablet: Number,
    computer: Number,
    largeScreen: Number,
    widescreen: Number
  },
  setup(props, { slots }) {
    const { colorClass } = useColorClass(props as ColorProps)
    const { floatedClass } = useFloatedClass(props as FloatedProps)
    const { onlyClass } = useOnlyClass(props as OnlyProps)
    const { textAlignClass } = useTextAlignClass(props as TextAlignProps)
    const { widthClass } = useWidthClass(props)

    const { mobile, tablet, computer, largeScreen, widescreen } = props

    const computedClass = clsx(
      computeWidthProp(mobile, 'mobile'),
      computeWidthProp(tablet, 'tablet'),
      computeWidthProp(computer, 'computer'),
      computeWidthProp(largeScreen, 'large screen'),
      computeWidthProp(widescreen, 'widescreen'),
      colorClass.value,
      floatedClass.value,
      onlyClass.value,
      textAlignClass.value,
      widthClass.value,
      'column'
    )

    return () => (
      h('div', {
        class: computedClass
      }, slots.default?.())
    )
  }
})