import clsx from "clsx";
import { defineComponent, h, resolveComponent } from "vue";
import { useIconPositionClass, useIconPositionProps } from "../../composables/iconPosition";
import { useLabelPositionProps, useLabelPositionClass } from "../../composables/labelPosition"
import { useSizeProps } from "../../composables/size"
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Label } from "../Label";

import type { IconPositionProps } from "../../composables/iconPosition"
import type { LabelPositionProps } from "../../composables/labelPosition"

export default defineComponent({
  name: 'SuiInput',
  components: { Icon, Label },
  props: {
    placeholder: String,
    icon: String,
    label: String,
    action: String,
    focus: Boolean,
    loading: Boolean,
    disabled: Boolean,
    error: Boolean,
    transparent: Boolean,
    inverted: Boolean,
    fluid: Boolean,
    ...useIconPositionProps,
    ...useLabelPositionProps,
    ...useSizeProps
  },
  setup(props, { slots }) {
    const { iconPositionClass } = useIconPositionClass(props as IconPositionProps)
    const { labelPositionClass } = useLabelPositionClass(props as LabelPositionProps)

    const inputClasses = clsx(
      'ui',
      iconPositionClass.value,
      labelPositionClass.value,
      props.size,
      {
        'labeled': props.label && !labelPositionClass.value,
        'disabled': props.disabled,
        'error': props.error,
        'icon': (props.icon || props.loading) && !iconPositionClass.value,
        'action': props.action,
        'focus': props.focus,
        'loading': props.loading,
        'transparent': props.transparent,
        'inverted': props.inverted,
        'fluid': props.fluid
      },
      'input'
    )

    if (props.icon || props.loading) {
      return () => (
        h('div', {
          class: inputClasses,
        }, [
          h('input', {
            type: 'text',
            placeholder: props.placeholder
          }),
          h(resolveComponent(Icon.name), { name: props.icon ||'spinner' })
        ])
      )
    }

    if (props.label) {
      let children = [
        h(resolveComponent(Label.name), {}, props.label),
        h('input', {
          type: 'text',
          placeholder: props.placeholder
        })
      ]

      if (props.labelPosition === 'right') {
        children.reverse()
      }

      return () => (
        h('div', {
          class: inputClasses,
        }, children)
      )
    }

    if (props.action) {
      return () => (
        h('div', {
          class: inputClasses,
        }, [
          h('input', {
            type: 'text',
            placeholder: props.placeholder
          }),
          h(resolveComponent(Button.name), {}, props.action)
        ])
      )
    }

    return () => (
      h('div', {
        class: inputClasses
      }, h('input', {
          type: 'text',
          placeholder: props.placeholder
        }, slots.default?.()))
    )
  }
})