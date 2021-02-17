import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiItemGroup',
  props: {
    divided: Boolean,
    link: Boolean,
    relaxed: [Boolean, String],
    unstackable: Boolean
  },
  setup(props) {
    const {
      divided,
      link,
      relaxed,
      unstackable
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(divided, 'divided'),
        computeKeyOnly(link, 'link'),
        computeKeyOnly(unstackable, 'unstackable'),
        computeKeyOrKeyValue(relaxed, 'relaxed'),
        'items'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})