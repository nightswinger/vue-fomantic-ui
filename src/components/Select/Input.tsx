import { computed, defineComponent, ref, watch, withModifiers } from 'vue'
import clsx from 'clsx'

import LabelGroup from './LabelGroup'

import Image from '../Image/Image'

import type { PropType } from 'vue'
import type { OptionItem } from './Item'

export default defineComponent({
  props: {
    active: Boolean,
    clearable: Boolean,
    placeholder: String,
    search: Boolean,
    searchText: String,
    value: [String, Object] as PropType<OptionItem|OptionItem[]>,
  },
  emits: ['clear', 'remove', 'dropdown', 'update:searchText'],
  setup(props, { emit }) {
    const searchRef = ref<HTMLInputElement>()

    const inputValue = computed(() => {
      if (typeof props.value === 'string') return props.value
      if (Array.isArray(props.value))
        return props.value.map((v) => typeof v === 'string' ? v : v.text).join(', ')

      return props.value?.text
    })

    const showPlaceholder = computed(() => {
      if (props.value === undefined || props.value === null) return true
      if (Array.isArray(props.value) && props.value.length === 0) return true

      return false
    })

    const clearText = () => {
      if (props.search && searchRef.value) {
        searchRef.value.value = ''
        emit('update:searchText', '')
      }
    }

    const onClick = (event: Event) => {
      if (!props.active) return

      event.stopPropagation()
      event.preventDefault()
    }

    const onClear = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
      emit('clear')
    }

    watch(() => props.active, (active) => {
      if (active) return searchRef.value?.focus()

      clearText()
    })

    watch(() => props.value, (newValue, oldValue) => {
      if (!Array.isArray(newValue) || !Array.isArray(oldValue)) return

      if (newValue.length > oldValue.length) {
        searchRef.value?.focus()
        clearText()
      }
    })

    return () => (
      <>
        <input
          type="hidden"
          value={inputValue.value}
        />
        <i
          class="dropdown icon"
          onClick={withModifiers(() => emit('dropdown'), ['stop'])}
        />
        {props.clearable && <i class="remove icon" onClick={onClear}></i>}
        {
          Array.isArray(props.value) &&
          <LabelGroup
            items={props.value}
            onRemove={(item) => emit('remove', item)}
          />
        }
        {
          props.search &&
          <input
            ref={searchRef}
            class="search"
            tabindex={0}
            onInput={(e) => emit('update:searchText', (e.target as HTMLInputElement).value)}
            onClick={onClick}
          />
        }
        <div
          class={clsx(
            showPlaceholder.value && 'default',
            props.searchText && 'filtered',
            'text'
          )}
        >
          {showPlaceholder.value && props.placeholder}
          {typeof props.value === 'string' && props.value}
          {
            !Array.isArray(props.value) &&
            typeof props.value === 'object' &&
            <>
              {props.value?.image && <Image {...props.value.image} />}
              {props.value?.text}
            </>
          }
        </div>
      </>
    )
  }
})
