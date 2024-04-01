import clsx from "clsx";
import { computed, defineComponent, ref, withModifiers } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCalendarDay',
  emits: ['select-day'],
  props: {
    active: Boolean,
    date: null,
    disabled: Boolean,
    onSelectDay: Function
  },
  setup(props, { emit }) {
    const focus = ref(false)
    const onMouseEnter = () => {
      if (!props.disabled) focus.value = true
    }
    const onMouseLeave = () => focus.value = false
    const onClick = () => {
      if (props.disabled) return
      emit('select-day', props.date)
    }

    const isToday = () => {
      let today = new Date()

      return (today.getFullYear() === props.date.year) &&
        (today.getMonth() === props.date.month) &&
        (today.getDate() === props.date.day)
    }

    const computedClass = computed(() => {
      return clsx(
        'link',
        computeKeyOnly(focus.value, 'focus'),
        computeKeyOnly(props.active && !props.disabled, 'active'),
        computeKeyOnly(props.disabled, 'adjacent disabled'),
        computeKeyOnly(isToday(), 'today')
      )
    })

    return {
      onMouseEnter,
      onMouseLeave,
      onClick,
      computedClass
    }
  },
  render() {
    return (
      <td
        class={this.computedClass}
        onMouseenter={this.onMouseEnter}
        onMouseleave={this.onMouseLeave}
        onClick={withModifiers(this.onClick, ['stop'])}
      >
        {this.$slots.default?.()}
      </td>
    )
  }
})