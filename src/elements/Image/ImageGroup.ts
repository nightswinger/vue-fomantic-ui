import clsx from 'clsx'
import { defineComponent, h } from 'vue'
import { useSizeProps } from '../../composables/size'

export default defineComponent({
  name: 'SuiImageGroup',
  props: {
    ...useSizeProps
  },
  setup(props, { slots }) {
    const imageGroupClasses = clsx(
      'ui',
      props.size,
      'images'
    )

    return () => (
      h('div', {
        class: imageGroupClasses,
      }, slots.default?.())
    )
  }
})