import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    active: Boolean,
    animated: String,
    disabled: Boolean,
    instant: Boolean,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.animated,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.instant, 'instant'),
        'reveal'
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