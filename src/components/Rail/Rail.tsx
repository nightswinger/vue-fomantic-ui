import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    attached: Boolean,
    close: [Boolean, String],
    dividing: Boolean,
    internal: Boolean,
    position: String,
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.position,
        props.size,
        computeKeyOnly(props.attached, 'attached'),
        computeKeyOnly(props.dividing, 'dividing'),
        computeKeyOnly(props.internal, 'internal'),
        computeKeyOrKeyValue(props.close, 'close'),
        'rail'
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