import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    active: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.active, 'active'),
        'content'
      )
    })

    return { computedClass }
  },
  render() {
    return h(
      'div',
      { class: this.computedClass },
      this.$slots.default?.()
    )
  }
})