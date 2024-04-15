import { computed, defineComponent } from 'vue'

import type { PropType } from 'vue'

import Image from '../Image/Image'

export type OptionItem = string | {
  text: string;
  value: string | number;
  flag?: string;
  image?: { avatar?: boolean; src?: string };
}

export default defineComponent({
  props: {
    active: Boolean,
    option: [String, Object] as PropType<OptionItem>,
  },
  emits: ['select'],
  setup(props, { emit }) {
    const classes = computed(() => [
      'item',
      { active: props.active }
    ])

    const text = computed(() => typeof props.option === 'string' ? props.option : props.option?.text)
    const value = computed(() => typeof props.option === 'string' ? props.option : props.option?.value)

    const flag = computed(() => typeof props.option === 'object' ? props.option?.flag : undefined)
    const image = computed(() => typeof props.option === 'object' ? props.option?.image : undefined)

    return () => (
      <div
        class={classes.value}
        data-value={value.value}
        onClick={() => emit('select', props.option)}
      >
        {flag.value && <i class={`${flag.value} flag`} />}
        {image.value && <Image {...image.value} />}
        {text.value}
      </div>
    )
  }
})
