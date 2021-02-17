import clsx from "clsx";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiStep',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    href: String,
    link: Boolean,
    vertical: Boolean,
  },
  setup(props, { slots }) {
    const {
      active,
      completed,
      disabled,
      fluid,
      href,
      link,
      vertical
    } = props

    const computedClass = clsx(
      active && 'active',
      completed && 'completed',
      disabled && 'disabled',
      fluid && 'fluid',
      link && 'link',
      vertical && 'vertical',
      'step'
    )

    if (typeof href === 'string' && href.length > 0) {
      return () => (
        h('a', {
          class: computedClass,
          href,
        }, slots.default?.())
      )
    }

    return () => (
      h('div', {
        class: computedClass
      }, slots.default?.())
    )
  }
})