import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    fullWidth: Boolean
  },
  setup(props) {
    const { fullWidth } = props

    const computedClass = computed(() => clsx(computeKeyOnly(fullWidth, 'full-width')))

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return h(
        'tfoot',
        { class: this.computedClass },
        this.$slots.default?.()
      )
    }

    return h('tfoot', {}, this.$slots.default?.())
  }
})