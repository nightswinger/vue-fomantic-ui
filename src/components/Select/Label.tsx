import { computed, defineComponent, ref, withModifiers } from 'vue'

import type { PropType } from 'vue'
import type { OptionItem } from './Item'

export default defineComponent({
  props: {
    active: Boolean,
    option: {
      type: [String, Object] as PropType<OptionItem>,
      required: true,
    },
    onClick: Function as PropType<(option: OptionItem) => void>,
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const el = ref<HTMLElement>()

    const classes = computed(() => [
      'ui label',
      { active: props.active }
    ])

    const text = computed(() => typeof props.option === 'string' ? props.option : props.option?.text)
    const value = computed(() => typeof props.option === 'string' ? props.option : props.option?.value)

    return () => (
      <a
        ref={el}
        class={classes.value}
        style="display: inline-block !important;"
        data-value={value.value}
        onClick={withModifiers(() => props.onClick && props.onClick(props.option), ['stop'])}
      >
        {text.value}
        <i
          class="delete icon"
          onClick={withModifiers(() => emit('remove', props.option), ['stop'])}
        />
      </a>
    )
  }
})
