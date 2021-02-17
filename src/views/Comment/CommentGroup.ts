import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCommentGroup',
  props: {
    collapsed: Boolean,
    minimal: Boolean,
    size: String,
    threaded: Boolean
  },
  setup(props) {
    const {
      collapsed,
      minimal,
      size,
      threaded
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        size,
        computeKeyOnly(collapsed, 'collapsed'),
        computeKeyOnly(minimal, 'minimal'),
        computeKeyOnly(threaded, 'threaded'),
        'comments'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})