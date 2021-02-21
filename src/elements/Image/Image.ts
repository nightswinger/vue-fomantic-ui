import { computed, defineComponent, h, resolveComponent } from 'vue'
import clsx from "clsx"

import { useVerticalAlignProps, useVerticalAlignClass } from "../../composables/verticalAlign"
import { useFloatedProps, useFloatedClass } from "../../composables/floated"

import type { VerticalAlignProps } from "../../composables/verticalAlign"
import type { FloatedProps } from "../../composables/floated"
import { computeKeyOnly, computeKeyOrKeyValue } from '../../utils/classNameHelper'
import { Label } from '../Label'

export default defineComponent({
  name: 'SuiImage',
  props: {
    as: String,
    avatar: Boolean,
    bordered: Boolean,
    centered: Boolean,
    circular: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    hidden: Boolean,
    href: String,
    label: Object,
    target: String,
    wrapped: Boolean,
    rounded: Boolean,
    size: String,
    spaced: [Boolean, String],
    src: String,
    ...useVerticalAlignProps,
    ...useFloatedProps
  },
  setup(props, { slots }) {
    const { verticalAlignClass } = useVerticalAlignClass(props as VerticalAlignProps)
    const { floatedClass } = useFloatedClass(props as FloatedProps)

    const imageClasses = computed(() => {
      return clsx(
        'ui',
        props.size,
        verticalAlignClass.value,
        floatedClass.value,
        computeKeyOnly(props.avatar, 'avatar'),
        computeKeyOnly(props.bordered, 'bordered'),
        computeKeyOnly(props.centered, 'centered'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.hidden, 'hidden'),
        computeKeyOnly(props.rounded, 'rounded'),
        computeKeyOrKeyValue(props.spaced, 'spaced'),
        'image'
      )
    })

    if (props.as === 'a' || props.as === 'router-link') {
      let elementType: any = props.as

      if (props.as === 'router-link') {
        elementType = resolveComponent(props.as)
      }

      return () => (
        h(elementType, {
          class: imageClasses.value,
          href: props.href,
          target: props.target && props.target
        }, h('img', { src: props.src }, slots.default?.()))
      )
    }

    if (props.wrapped) {
      return () => (
        h('div', {
          class: imageClasses.value
        }, h('img', { src: props.src }, slots.default?.()))
      )
    }

    if (props.label) {
      return () => (
        h('div', {
          class: imageClasses.value
        }, [
          h('img', { src: props.src }),
          h(Label, { ...props.label })
        ])
      )
    }

    return () => (
      h('img', {
        class: imageClasses.value,
        src: props.src
      }, slots.default?.())
    )
  }
})