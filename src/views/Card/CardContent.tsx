import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCardContent',
  props: {
    extra: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.extra, 'extra'),
        'content'
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