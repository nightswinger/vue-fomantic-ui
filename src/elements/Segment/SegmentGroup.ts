import { defineComponent, h } from 'vue'
import { useSizeProps } from '../../composables/size'

export default defineComponent({
  name: 'SuiSegmentGroup',
  props: {
    compact: Boolean,
    horizontal: Boolean,
    piled: Boolean,
    raised: Boolean,
    stacked: Boolean,
    ...useSizeProps
  },
  setup(props, { slots }) {
    const {
      compact,
      horizontal,
      piled,
      raised,
      size,
      stacked
    } = props

    return () => (
      h('div', {
        class: [
          'ui',
          compact && 'compact',
          horizontal && 'horizontal',
          piled && 'piled',
          raised && 'raised',
          size && size,
          stacked && 'stacked',
          'segments'
        ]
      }, slots.default?.())
    )
  }
})