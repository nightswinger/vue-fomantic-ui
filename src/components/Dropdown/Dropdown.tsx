import { defineComponent, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

import Select from '../Select/Select'

import Item from './Item'
import ItemGroup from './ItemGroup'

import type { OptionItem } from '../Select/Item'
import type { DropdownItem } from './Item'

export default defineComponent({
  props: {
    clearable: Boolean,
    fluid: Boolean,
    modelValue: [Object, String, Array],
    multiple: Boolean,
    options: {
      type: Array,
      default: () => []
    },
    placeholder: String,
    search: Boolean,
    selection: Boolean,
    text: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const el = ref<HTMLDivElement>()
    const active = ref(false)
    const modelValue = ref(props.modelValue)

    watch(modelValue, (value) => emit('update:modelValue', value))

    const onClick = () => active.value = !active.value

    onClickOutside(el, () => active.value = false)

    return () => (
      <>
        {props.selection ?
          <Select
            v-model={modelValue.value}
            fluid={props.fluid}
            multiple={props.multiple}
            placeholder={props.placeholder}
            search={props.search}
            options={props.options as OptionItem[]}
          /> :
          <div
            ref={el}
            class="ui dropdown"
            onClick={onClick}
          >
            <div class="text">{props.text}</div>
            <i class="dropdown icon"></i>
            <ItemGroup
              active={active.value}
            >
              {
                props.options.map((item) => <Item item={item as DropdownItem} />)
              }
            </ItemGroup>
          </div>
        }
      </>
    )
  }
})
