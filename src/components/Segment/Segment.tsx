import clsx from 'clsx'
import { computed, defineComponent } from 'vue'
import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from '../../utils/classNameHelper'

export default defineComponent({
  props: {
    attached: [Boolean, String],
    basic: Boolean,
    circular: Boolean,
    clearing: Boolean,
    color: String,
    compact: Boolean,
    disabled: Boolean,
    fitted: [Boolean, String],
    floated: String,
    inverted: Boolean,
    loading: Boolean,
    padded: [Boolean, String],
    piled: Boolean,
    placeholder: Boolean,
    raised: Boolean,
    secondary: Boolean,
    size: String,
    stacked: Boolean,
    tertiary: Boolean,
    textAlign: String,
    vertical: Boolean,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.clearing, 'clearing'),
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.loading, 'loading'),
        computeKeyOnly(props.piled, 'piled'),
        computeKeyOnly(props.placeholder, 'placeholder'),
        computeKeyOnly(props.raised, 'raised'),
        computeKeyOnly(props.secondary, 'secondary'),
        computeKeyOnly(props.stacked, 'stacked'),
        computeKeyOnly(props.tertiary, 'tertiary'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyValue(props.floated, 'floated'),
        computeKeyValue(props.textAlign, 'aligned'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        computeKeyOrKeyValue(props.fitted, 'fitted'),
        computeKeyOrKeyValue(props.padded, 'padded'),
        'segment'
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