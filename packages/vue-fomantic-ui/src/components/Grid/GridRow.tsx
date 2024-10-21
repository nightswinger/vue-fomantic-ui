import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyValue, computeTextAlignProp, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    centered: Boolean,
    color: String,
    columns: Number,
    only: String,
    stretched: Boolean,
    textAlign: String,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.color,
        computeKeyOnly(props.centered, 'centered'),
        computeKeyOnly(props.stretched, 'stretched'),
        computeKeyValue(props.only, 'only'),
        computeWidthProp(props.columns, 'column'),
        computeTextAlignProp(props.textAlign),
        'row'
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