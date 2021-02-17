import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiAccordion',
  props: {
    fluid: Boolean,
    inverted: Boolean,
    styled: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.styled, 'styled'),
        'accordion'
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