import clsx from "clsx"
import { computed, defineComponent } from "vue"
import { computeKeyValue } from "../../utils/classNameHelper"

export default defineComponent({
    props: {
      textAlign: String
    },
    setup(props) {
      const computedClass = computed(() => {
        return clsx(
          computeKeyValue(props.textAlign, 'aligned'),
          'description'
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