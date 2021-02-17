import clsx from "clsx";
import { defineComponent, h } from "vue";
import { InlineProps, useInlineClass, useInlineProps } from "../../composables/inline";
import { useSizeProps } from "../../composables/size";

export default defineComponent({
  name: 'SuiLoader',
  props: {
    active: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    inverted: Boolean,
    ...useSizeProps,
    ...useInlineProps,
    ...useSizeProps
  },
  setup(props, { slots }) {
    const { inlineClass } = useInlineClass(props as InlineProps)

    const loaderClasses = clsx(
      'ui',
      props.size,
      props.active && 'active',
      props.disabled && 'disabled',
      props.indeterminate && 'indeterminate',
      props.inverted && 'inverted',
      slots.default?.() && 'text',
      inlineClass.value,
      'loader'
    )

    return () => (
      h('div', {
        class: loaderClasses,
      }, slots.default?.())
    )
  }
})