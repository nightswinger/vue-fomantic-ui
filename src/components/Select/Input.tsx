import { defineComponent, ref, watch } from 'vue'

import Image from '../Image/Image'

import type { PropType } from 'vue'

import type { OptionItem } from './Item'
import clsx from 'clsx'

export default defineComponent({
  props: {
    active: Boolean,
    clearable: Boolean,
    placeholder: String,
    search: Boolean,
    searchText: String,
    value: [String, Object] as PropType<OptionItem>,
  },
  emits: ['clear', 'update:searchText'],
  setup(props, { emit }) {
    const searchRef = ref<HTMLInputElement>()

    const onClick = (event: Event) => {
      if (!props.active) return

      event.stopPropagation()
      event.preventDefault()
    }

    const onClear = (event: Event) => {
      if (props.active) return

      event.preventDefault()
      event.stopPropagation()
      emit('clear')
    }

    watch(() => props.active, (active) => {
      if (active) return

      if (props.search && searchRef.value) {
        searchRef.value.value = ''
        emit('update:searchText', '')
      }
    })

    return () => (
      <>
        <input
          type="hidden"
          value={
            typeof props.value === 'string' ?
            props.value :
            props.value?.text
          }
        />
        <i class="dropdown icon"></i>
        {props.clearable && <i class="remove icon" onClick={onClear}></i>}
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
            !props.value && 'default',
            props.searchText && 'filtered',
            'text'
          )}
        >
          {
            props.value === undefined || props.value === null ?
            props.placeholder :
            typeof props.value === 'string' ?
              props.value :
              <>
                {props.value?.image && <Image {...props.value.image} /> }
                {props.value?.text}
              </>
          }
        </div>
      </>
    )
  }
})
