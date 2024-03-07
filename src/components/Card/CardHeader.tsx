import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCardHeader',
  props: {
    textAlign: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyValue(props.textAlign, 'aligned'),
        'header'
      )
    })

    return { computedClass }
  },
  render() {
    return (
      <div class={this.computedClass}>{this.$slots.default?.()}</div>
    )
  }
})