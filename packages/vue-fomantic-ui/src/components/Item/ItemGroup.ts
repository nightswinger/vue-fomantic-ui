import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    divided: Boolean,
    inverted: Boolean,
    link: Boolean,
    relaxed: [Boolean, String],
    unstackable: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.divided, 'divided'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.link, 'link'),
        computeKeyOnly(props.unstackable, 'unstackable'),
        computeKeyOrKeyValue(props.relaxed, 'relaxed'),
        'items'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})