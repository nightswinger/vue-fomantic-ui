import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiFormGroup',
  props: {
    widths: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyValue(props.widths, 'width'),
        'fields'
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