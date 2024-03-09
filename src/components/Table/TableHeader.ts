import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    fullWidth: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(computeKeyOnly(props.fullWidth, 'full-width'))
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return h(
        'thead',
        { class: this.computedClass },
        this.$slots.default?.()
      )
    }

    return h('thead', {}, this.$slots.default?.())
  }
})