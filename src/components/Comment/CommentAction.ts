import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCommentAction',
  props: {
    active: Boolean
  },
  setup(props) {
    const { active } = props

    const computedClass = computed(() => {
      return clsx(computeKeyOnly(active, 'active'))
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return h('a', { class: this.computedClass }, this.$slots.default?.())
    }

    return h('a', {}, this.$slots.default?.())
  }
})