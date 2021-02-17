import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCardGroup',
  props: {
    centered: Boolean,
    itemsPerRow: Number
  },
  setup(props) {
    const { centered, itemsPerRow } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(centered, 'centered'),
        computeWidthProp(itemsPerRow, ''),
        'cards'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})