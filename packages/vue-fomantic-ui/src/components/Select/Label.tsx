import { computed, defineComponent, onMounted, ref, withModifiers } from 'vue'

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

    const flag = computed(() => typeof props.option === 'object' ? props.option?.flag : undefined)

    onMounted(() => {
      if (!el.value) return

      el.value.animate([
        { transform: 'scale(0)' },
        { transform: 'scale(1)' },
      ], {
        duration: 100,
        easing: 'ease-out',
      })
    })

    return () => (
      <a
        ref={el}
        class={classes.value}
        style="display: inline-block !important;"
        data-value={value.value}
        onClick={withModifiers(() => props.onClick && props.onClick(props.option), ['stop'])}
      >
        {flag.value && <i class={`${flag.value} flag`} />}
        {text.value}
        <i
          class="delete icon"
          onClick={withModifiers(() => emit('remove', props.option), ['stop'])}
        />
      </a>
    )
  }
})
