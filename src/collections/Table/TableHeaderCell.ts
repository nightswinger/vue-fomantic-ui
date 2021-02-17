import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiTableHeaderCell',
  props: {
    singleLine: Boolean,
    width: Number,
  },
  setup(props) {
    const { singleLine, width } = props

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(singleLine, 'single line'),
        computeWidthProp(width, 'wide')
      )
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return h(
        'th',
        { class: this.computedClass },
        this.$slots.default?.()
      )
    }

    return h('th', {}, this.$slots.default?.())
  }
})