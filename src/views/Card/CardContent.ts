import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCardContent',
  props: {
    extra: Boolean
  },
  setup(props) {
    const { extra } = props

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(extra, 'extra'),
        'content'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})