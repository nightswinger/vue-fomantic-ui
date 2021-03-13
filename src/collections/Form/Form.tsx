import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiForm',
  props: {
    error: Boolean,
    inverted: Boolean,
    loading: Boolean,
    reply: Boolean,
    success: Boolean,
    unstackable: Boolean,
    warning: Boolean,
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.loading, 'loading'),
        computeKeyOnly(props.reply, 'reply'),
        computeKeyOnly(props.success, 'success'),
        computeKeyOnly(props.unstackable, 'unstackable'),
        computeKeyOnly(props.warning, 'warning'),
        'form'
      )
    })

    return {
      computedClass
    }
  },
  render() {
    return (
      <form class={this.computedClass}>
        {this.$slots.default?.()}
      </form>
    )
  }
})