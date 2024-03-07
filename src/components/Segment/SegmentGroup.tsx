import clsx from 'clsx'
import { computed, defineComponent } from 'vue'
import { computeKeyOnly } from '../../utils/classNameHelper'

export default defineComponent({
  name: 'SuiSegmentGroup',
  props: {
    compact: Boolean,
    horizontal: Boolean,
    piled: Boolean,
    raised: Boolean,
    size: String,
    stacked: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.horizontal, 'horizontal'),
        computeKeyOnly(props.piled, 'piled'),
        computeKeyOnly(props.raised, 'raised'),
        computeKeyOnly(props.stacked, 'stacked'),
        'segments'
      )
    })

    return {
      computedClass
    }
  },
  render() {
    return (
      <div class={this.computedClass}>{this.$slots.default?.()}</div>
    )
  }
})