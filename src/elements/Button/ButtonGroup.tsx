import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyValue, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiButtonGroup',
  props: {
    attached: String,
    basic: Boolean,
    color: String,
    icon: Boolean,
    labeled: Boolean,
    size: String,
    vertical: Boolean,
    widths: Number
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.icon, 'icon'),
        computeKeyOnly(props.labeled, 'labeled'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyValue(props.attached, 'attached'),
        computeWidthProp(props.widths, ''),
        'buttons'
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