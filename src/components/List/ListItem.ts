import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    active: Boolean,
    as: String,
    disabled: Boolean
  },
  setup(props, { slots }) {
    let elementType = props.as || 'div'

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        'item'
      )
    })

    return () => (
      h(elementType, {
        class: computedClass.value
      }, slots.default?.())
    )
  }
})