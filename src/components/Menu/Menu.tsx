import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    attached: [Boolean, String],
    borderless: Boolean,
    color: Boolean,
    compact: Boolean,
    fixed: Boolean,
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
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.borderless, 'borderless'),
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.fixed, 'fixed'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.pagination, 'pagination'),
        computeKeyOnly(props.pointing, 'pointing'),
        computeKeyOnly(props.secondary, 'secondary'),
        computeKeyOnly(props.stackable, 'stackable'),
        computeKeyOnly(props.text, 'text'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        computeKeyOrKeyValue(props.floated, 'floated'),
        computeKeyOrKeyValue(props.icon, 'icon'),
        computeKeyOrKeyValue(props.tabular, 'tabular'),
        computeWidthProp(props.widths, 'item'),
        'menu'
      )
    })

    return { computedClass }
  },
  render() {
    return (
      <div class={this.computedClass}>
        {this.$slots.default?.()}
      </div>
    )
  }
})