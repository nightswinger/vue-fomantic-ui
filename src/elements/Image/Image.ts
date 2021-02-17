import { defineComponent, h } from 'vue'
import clsx from "clsx"

import { useSizeProps } from "../../composables/size"
import { useVerticalAlignProps, useVerticalAlignClass } from "../../composables/verticalAlign"
import { useFloatedProps, useFloatedClass } from "../../composables/floated"

import type { VerticalAlignProps } from "../../composables/verticalAlign"
import type { FloatedProps } from "../../composables/floated"

export default defineComponent({
  name: 'SuiImage',
  props: {
    as: String,
    href: String,
    target: String,
    src: String,
    wrapped: Boolean,
    hidden: Boolean,
    disabled: Boolean,
    avatar: Boolean,
    bordered: Boolean,
    fluid: Boolean,
    rounded: Boolean,
    circular: Boolean,
    centered: Boolean,
    spaced: Boolean,
    ...useSizeProps,
    ...useVerticalAlignProps,
    ...useFloatedProps
  },
  setup(props, { slots }) {
    const { verticalAlignClass } = useVerticalAlignClass(props as VerticalAlignProps)
    const { floatedClass } = useFloatedClass(props as FloatedProps)

    const imageClasses = clsx(
      'ui',
      props.size,
      props.hidden,
      props.disabled,
      props.avatar,
      props.bordered,
      props.fluid,
      props.rounded,
      props.circular,
      props.centered,
      props.spaced,
      verticalAlignClass.value,
      floatedClass.value,
      'image'
    )

    if (props.as === 'a') {
      return () => (
        h('a', {
          class: imageClasses,
          href: props.href,
          target: props.target && props.target
        }, h('img', { src: props.src }, slots.default?.()))
      )
    }

    if (props.wrapped) {
      return () => (
        h('div', {
          class: imageClasses
        }, h('img', { src: props.src }, slots.default?.()))
      )
    }

    return () => (
      h('img', {
        class: imageClasses,
        src: props.src
      }, slots.default?.())
    )
  }
})