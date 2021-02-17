import clsx from 'clsx'
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "SuiBreadcrumbSection",
  props: {
    active: Boolean,
    link: Boolean
  },
  setup(props, { slots }) {
    const elementType = props.link ? 'a' : 'div'

    const computedClass = clsx(
      props.active && 'active',
      'section'
    )
    
    return () =>
      h(elementType, {
          class: computedClass
        }, slots.default?.());
  },
});