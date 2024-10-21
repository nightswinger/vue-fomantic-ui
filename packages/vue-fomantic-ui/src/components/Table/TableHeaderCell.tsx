import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyValue, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    singleLine: Boolean,
    textAlign: String,
    width: Number,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.singleLine, 'single line'),
        computeKeyValue(props.textAlign, 'aligned'),
        computeWidthProp(props.width, 'wide')
      )
    })

    return { computedClass }
  },
  render() {
    if (this.computedClass) {
      return (
        <th class={this.computedClass}>
          {this.$slots.default?.()}
        </th>
      )
    }

    return (
      <th>{this.$slots.default?.()}</th>
    )
  }
})