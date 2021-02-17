import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiMenu',
  props: {
    attached: [Boolean, String],
    borderless: Boolean,
    color: Boolean,
    compact: Boolean,
    floated: [Boolean, String],
    fluid: Boolean,
    icon: [Boolean, String],
    inverted: Boolean,
    pagination: Boolean,
    pointing: Boolean,
    secondary: Boolean,
    size: String,
    stackable: Boolean,
    tabular: [Boolean, String],
    text: Boolean,
    vertical: Boolean,
    widths: Number
  },
  setup(props) {
    const computedClass = computed(() => {
      const {
        attached,
        borderless,
        color,
        compact,
        floated,
        fluid,
        icon,
        inverted,
        pagination,
        pointing,
        secondary,
        size,
        stackable,
        tabular,
        text,
        vertical,
        widths
      } = props

      return clsx(
        'ui',
        color,
        size,
        computeKeyOnly(borderless, 'borderless'),
        computeKeyOnly(compact, 'compact'),
        computeKeyOnly(fluid, 'fluid'),
        computeKeyOnly(inverted, 'inverted'),
        computeKeyOnly(pagination, 'pagination'),
        computeKeyOnly(pointing, 'pointing'),
        computeKeyOnly(secondary, 'secondary'),
        computeKeyOnly(stackable, 'stackable'),
        computeKeyOnly(text, 'text'),
        computeKeyOnly(vertical, 'vertical'),
        computeKeyOrKeyValue(attached, 'attached'),
        computeKeyOrKeyValue(floated, 'floated'),
        computeKeyOrKeyValue(icon, 'icon'),
        computeKeyOrKeyValue(tabular, 'tabular'),
        computeWidthProp(widths, 'item'),
        'menu'
      )
    })

    return { computedClass }
  },
  render() {
    return h('div', { class: this.computedClass }, this.$slots.default?.())
  }
})