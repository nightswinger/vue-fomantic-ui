import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiFeed',
  props: {
    inverted: Boolean,
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.inverted, 'inverted'),
        'feed'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})