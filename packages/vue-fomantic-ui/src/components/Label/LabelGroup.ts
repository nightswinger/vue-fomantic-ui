import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    basic: Boolean,
    circular: Boolean,
    color: String,
    size: String,
    tag: Boolean
  },
  setup(props, { slots }) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.tag, 'tag'),
        'labels'
      )
    })

    return () => (
      h('div', {
        class: computedClass.value
      }, slots.default?.())
    )
  }
})