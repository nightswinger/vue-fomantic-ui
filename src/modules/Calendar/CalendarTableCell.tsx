import clsx from "clsx";
import { computed, defineComponent, ref, withModifiers } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCalendarTableCell',
  emits: ['click-cell'],
  props: {
    active: Boolean,
    today: Boolean,
    value: null,
    onClickCell: Function
  },
  setup(props) {
    const focus = ref(false)
    const onMouseEnter = () => focus.value = true
    const onMouseLeave = () => focus.value = false

    const computedClass = computed(() => {
      return clsx(
        'link',
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.today, 'today'),
        computeKeyOnly(focus.value, 'focus')
      )
    })

    return {
      onMouseEnter,
      onMouseLeave,
      computedClass
    }
  },
  render() {
    return (
      <td
        class={this.computedClass}
        onMouseenter={this.onMouseEnter}
        onMouseleave={this.onMouseLeave}
        onClick={withModifiers(() => this.$emit('click-cell', this.value), ['stop'])}
      >
        {this.$slots.default?.()}
      </td>
    )
  }
})