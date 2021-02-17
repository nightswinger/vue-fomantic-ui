import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiItemContent',
  props: {
    verticalAlign: String
  },
  setup(props) {
    const { verticalAlign } = props

    const computedClass = computed(() => {
      return clsx(
        computeKeyValue(verticalAlign, 'aligned'),
        'content'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})