import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue, computeTextAlignProp, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    celled: [Boolean, String],
    centered: Boolean,
    columns: [Number, String],
    compact: Boolean,
    container: Boolean,
    divided: [Boolean, String],
    doubling: Boolean,
    inverted: Boolean,
    padded: [Boolean, String],
    relaxed: [Boolean, String],
    reversed: String,
    stackable: Boolean,
    textAlign: String,
    verticalAlign: String,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.container && 'container',
        computeKeyOnly(props.centered, 'centered'),
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.doubling, 'doubling'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.stackable, 'stackable'),
        computeKeyValue(props.reversed, 'reversed'),
        computeKeyValue(props.verticalAlign, 'aligned'),
        computeKeyOrKeyValue(props.celled, 'celled'),
        computeKeyOrKeyValue(props.divided, 'divided'),
        computeKeyOrKeyValue(props.padded, 'padded'),
        computeKeyOrKeyValue(props.relaxed, 'relaxed'),
        computeTextAlignProp(props.textAlign),
        computeWidthProp(props.columns, 'column'),
        'grid'
      )
    })

    return {
      computedClass
    }
  },
  render() {
    return (
      <div class={this.computedClass}>
        {this.$slots.default?.()}
      </div>
    )
  }
})