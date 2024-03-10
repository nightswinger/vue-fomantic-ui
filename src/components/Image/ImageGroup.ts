import clsx from 'clsx'
import { computed, defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    size: String,
  },
  setup(props, { slots }) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        'images'
      )
    })

    return () => (
      h('div', {
        class: computedClass.value,
      }, slots.default?.())
    )
  }
})