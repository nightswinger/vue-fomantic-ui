import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    verticalAlign: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyValue(props.verticalAlign, 'aligned'),
        'content'
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
