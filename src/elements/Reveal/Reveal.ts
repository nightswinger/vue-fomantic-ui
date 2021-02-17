import clsx from "clsx";
import { defineComponent, h } from "vue";
import { AnimatedProps, useAnimatedClass, useAnimatedProps } from "../../composables/animated";

export default defineComponent({
  name: 'SuiReveal',
  props: {
    active: Boolean,
    disabled: Boolean,
    instant: Boolean,
    ...useAnimatedProps
  },
  setup(props, { slots }) {
    const { animatedClass } = useAnimatedClass(props as AnimatedProps)

    const revealClasses = clsx(
      'ui',
      animatedClass.value,
      props.active && 'active',
      props.disabled && 'disabled',
      props.instant && 'instant',
      'reveal'
    )

    return () => (
      h('div', {
        class: revealClasses,
      }, slots.default?.())
    )
  }
})