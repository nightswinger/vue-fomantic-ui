import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    hidden: Boolean,
    visible: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.hidden, 'hidden'),
        computeKeyOnly(props.visible, 'visible'),
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