import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiMessage',
  props: {
    attached: [Boolean, String],
    color: String,
    compact: Boolean,
    error: Boolean,
    floating: Boolean,
    hidden: Boolean,
    icon: Boolean,
    info: Boolean,
    negative: Boolean,
    positive: Boolean,
    size: String,
    success: Boolean,
    visible: Boolean,
    warning: Boolean,
  },
  setup(props) {
    const {
      attached,
      color,
      compact,
      error,
      floating,
      hidden,
      icon,
      info,
      negative,
      positive,
      size,
      success,
      visible,
      warning
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        color,
        size,
        computeKeyOnly(compact, 'compact'),
        computeKeyOnly(error, 'error'),
        computeKeyOnly(floating, 'floating'),
        computeKeyOnly(hidden, 'hidden'),
        computeKeyOnly(icon, 'icon'),
        computeKeyOnly(info, 'info'),
        computeKeyOnly(negative, 'negative'),
        computeKeyOnly(positive, 'positive'),
        computeKeyOnly(success, 'success'),
        computeKeyOnly(visible, 'visible'),
        computeKeyOnly(warning, 'warning'),
        computeKeyOrKeyValue(attached, 'attached'),
        'message'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})