import clsx from 'clsx'
import { computed, defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import Options from './Options'
import Item from './Item'

import type { PropType } from 'vue'

import type { OptionItem } from './Item'
import Input from './Input'

export default defineComponent({
  props: {
    clearable: Boolean,
    fluid: Boolean,
    modelValue: [String, Object] as PropType<OptionItem>,
    options: {
      type: Array as PropType<OptionItem[]>,
      default: () => [],
    },
    placeholder: String,
    search: Boolean,
  },
  setup(props, { emit }) {
    const el = ref<HTMLDivElement>()
    const active = ref(false)

    const searchText = ref('')

    const direction = ref<'up' | 'down'>('down')

    const classes = computed(() => clsx(
      'ui',
      active.value && 'active',
      direction.value === 'up' && 'upward',
      props.clearable && 'clearable',
      props.fluid && 'fluid',
      props.search && 'search',
      'selection dropdown'
    ))

    const options = computed(() => {
      if (!props.search) return props.options

      return props.options.filter((option) => {
        if (typeof option === 'string') {
          return option.toLowerCase().includes(searchText.value.toLowerCase())
        }

        return option.text.toLowerCase().includes(searchText.value.toLowerCase())
      })
    })

    onClickOutside(el, () => active.value = false)

    return () => (
      <div
        ref={el}
        class={classes.value}
        onClick={() => active.value = !active.value}
      >
        <Input
          active={active.value}
          clearable={props.clearable}
          placeholder={props.placeholder}
          search={props.search}
          value={props.modelValue}
          v-model:searchText={searchText.value}
          onClear={() => emit('update:modelValue', undefined)}
        />
        {
          options.value.length > 0 &&
          <Options
            active={active.value}
            v-model:direction={direction.value}
          >
            {
              options.value.map((option, i) => (
                <Item
                  key={typeof option === 'string' ? option : option.text}
                  active={JSON.stringify(props.modelValue) === JSON.stringify(option)}
                  option={option}
                  onSelect={(v) => {
                    if (props.search) searchText.value = ''
                    emit('update:modelValue', v)
                  }}
                >
                </Item>
              ))
            }
          </Options>
        }
      </div>
    )
  },
})
