import { computed, defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    active: Boolean,
    disabled: Boolean,
    onClick: Function as PropType<() => void>,
  },
  setup(props, { slots }) {
    const focus = ref(false)
    const classes = computed(() => ([
      props.active && 'active',
      focus.value && !props.disabled && 'focus'
    ]))

    return () => (
      <td
        class={classes.value}
        onClick={props.onClick}
        onFocus={() => focus.value = true}
        onBlur={() => focus.value = false}
        onMouseenter={() => focus.value = true}
        onMouseleave={() => focus.value = false}
      >
        {slots.default?.()}
      </td>
    )
  }
})
