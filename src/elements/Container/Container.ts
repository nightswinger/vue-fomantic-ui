import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeTextAlignProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiContainer',
  props: {
    fluid: Boolean,
    text: Boolean,
    textAlign: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.text, 'text'),
        computeTextAlignProp(props.textAlign),
        'container'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})