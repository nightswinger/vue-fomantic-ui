import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiLoader',
  props: {
    active: Boolean,
    color: String,
    disabled: Boolean,
    fast: Boolean,
    indeterminate: Boolean,
    inline: [Boolean, String],
    inverted: Boolean,
    size: String,
    slow: Boolean,
    text: Boolean,
  },
  setup(props, { slots }) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.fast, 'fast'),
        computeKeyOnly(props.indeterminate, 'indeterminate'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.slow, 'slow'),
        computeKeyOnly(props.text || !!slots.default?.(), 'text'),
        computeKeyOrKeyValue(props.inline, 'inline'),
        'loader'
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