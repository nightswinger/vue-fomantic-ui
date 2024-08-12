import { computed, defineComponent } from 'vue'

import type { PropType } from 'vue'

import Icon from '../Icon/Icon'
import Image from '../Image/Image'

export type OptionItem = string | {
  text: string;
  value: string | number;
  flag?: string;
  image?: { avatar?: boolean; src?: string };
  icon?: string;
  disabled?: boolean;
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
      (typeof props.option === 'object' && props.option?.disabled) ? 'disabled' : undefined,
      { active: props.active }
    ])

    const text = computed(() => typeof props.option === 'string' ? props.option : props.option?.text)
    const value = computed(() => typeof props.option === 'string' ? props.option : props.option?.value)

    const flag = computed(() => typeof props.option === 'object' ? props.option?.flag : undefined)
    const image = computed(() => typeof props.option === 'object' ? props.option?.image : undefined)
    const icon = computed(() => typeof props.option === 'object' ? props.option?.icon : undefined)

    return () => (
      <div
        class={classes.value}
        data-value={value.value}
        onClick={() => emit('select', props.option)}
      >
        {icon.value && <Icon name={icon.value} />}
        {flag.value && <i class={`${flag.value} flag`} />}
        {image.value && <Image {...image.value} />}
        {text.value}
      </div>
    )
  }
})
