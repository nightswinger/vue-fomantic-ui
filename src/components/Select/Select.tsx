import clsx from 'clsx'
import { computed, defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import Options from './Options'
import Item from './Item'
import Input from './Input'

import type { PropType } from 'vue'

import type { OptionItem } from './Item'

export default defineComponent({
  props: {
    clearable: Boolean,
    fluid: Boolean,
    modelValue: [String, Object, Array] as PropType<OptionItem|OptionItem[]>,
    multiple: Boolean,
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
      props.multiple && 'multiple',
      props.search && 'search',
      'selection dropdown'
    ))

    const options = computed(() => {
      let optionItems = props.options

      if (props.multiple) {
        optionItems = optionItems.filter((option) => {
          if (Array.isArray(props.modelValue)) {
            return !props.modelValue.some((value) => JSON.stringify(value) === JSON.stringify(option))
          }

          return JSON.stringify(option) !== JSON.stringify(props.modelValue)
        })
      }

      if (props.search) {
        return optionItems.filter((option) => {
          if (typeof option === 'string') {
            return option.toLowerCase().includes(searchText.value.toLowerCase())
          }

          return option.text.toLowerCase().includes(searchText.value.toLowerCase())
        })
      }

      return optionItems
    })

    const onClick = () => {
      if (props.multiple && active.value) return
      active.value = !active.value
    }

    const onClear = () => {
      if (active.value) active.value = false
      emit('update:modelValue', undefined)
    }

    const onRemove = (option: OptionItem) => {
      if (!Array.isArray(props.modelValue)) return

      const value = props.modelValue.filter((v) => JSON.stringify(v) !== JSON.stringify(option))
      emit('update:modelValue', value)
    }

    const onSelect = (item: OptionItem) => {
      if (props.search) searchText.value = ''

      if (props.multiple) {
        const value = Array.isArray(props.modelValue) ? [...props.modelValue, item] : [item]

        return emit('update:modelValue', value)
      }
      emit('update:modelValue', item)
    }

    onClickOutside(el, () => active.value = false)

    return () => (
      <div
        ref={el}
        class={classes.value}
        onClick={onClick}
      >
        <Input
          active={active.value}
          clearable={props.clearable}
          placeholder={props.placeholder}
          search={props.search}
          value={props.modelValue}
          v-model:searchText={searchText.value}
          onClear={onClear}
          onRemove={onRemove}
          onDropdown={() => active.value = !active.value}
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
                  onSelect={onSelect}
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
