import clsx from "clsx";
import { defineComponent, h } from "vue";
import { AttachedProps, useAttachedClass, useAttachedProps } from "../../composables/attached"
import { useSizeProps } from "../../composables/size"

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

export default defineComponent({
  name: 'SuiStepGroup',
  props: {
    fluid: Boolean,
    ordered: Boolean,
    vertical: Boolean,
    widths: Number,
    ...useAttachedProps,
    ...useSizeProps,
  },
  setup(props, { slots }) {
    const { attachedClass } = useAttachedClass(props as AttachedProps)

    const {
      fluid,
      ordered,
      size,
      vertical,
      widths
    } = props

    const computedClass = clsx(
      'ui',
      attachedClass.value,
      fluid && 'fluid',
      ordered && 'ordered',
      widths && numbers[widths - 1],
      size && size,
      vertical && vertical,
      'steps'
    )
    return () => (
      h('div', {
        class: computedClass
      }, slots.default?.())
    )
  }
})