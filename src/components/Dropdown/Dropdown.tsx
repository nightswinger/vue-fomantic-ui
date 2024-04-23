import { computed, defineComponent, ref, watchEffect } from 'vue'
import clsx from 'clsx'
import { onClickOutside, useElementBounding, useWindowSize } from '@vueuse/core'

import Select from '../Select/Select'

import Item from './Item'
import ItemGroup from './ItemGroup'
import SearchInput from './SearchInput'
import Text from './Text'

import type { PropType } from 'vue'
import type { OptionItem } from '../Select/Item'
import type { DropdownItem } from './Item'


export default defineComponent({
  props: {
    button: Boolean,
    clearable: Boolean,
    floating: Boolean,
    fluid: Boolean,
    icon: String,
    inline: Boolean,
    item: Boolean,
    labeled: Boolean,
    modelValue: [Object, String, Array],
    multiple: Boolean,
    options: {
      type: Array as PropType<DropdownItem[]|OptionItem[]>,
      default: () => []
    },
    placeholder: String,
    pointing: [String, Boolean] as PropType<boolean|'bottom right'|'top left'|'left'|'right'|'top right'|'bottom right'>,
    search: Boolean,
    searchInMenu: Boolean,
    selection: Boolean,
    selectable: Boolean,
    text: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const el = ref<HTMLDivElement>()
    const active = ref(false)

    const inputText = ref('')

    const direction = ref<'up' | 'down'>('down')

    const text = computed(() => {
      const modelValue = props.modelValue as DropdownItem

      if (!modelValue) return props.text
      if (!props.search && !props.selectable && !props.inline) return props.text

      if (typeof modelValue === 'string') {
        return modelValue
      }

      return modelValue.text
    })

    const options = computed(() => {
      if (!props.search && !props.searchInMenu) return props.options
      return props.options.filter((option) => {
        if (typeof option === 'string') {
          return option.toLowerCase().includes(inputText.value.toLowerCase())
        }

        return option.text?.toLowerCase().includes(inputText.value.toLowerCase())
      })
    })

    const { height } = useWindowSize()
    const { top, bottom } = useElementBounding(el)

    watchEffect(() => {
      const spaceAtTop = top.value
      const spaceAtBottom = height.value - bottom.value

      direction.value = spaceAtTop > 240 && spaceAtBottom < 240 ? 'up' : 'down'
    })

    const classes = computed(() => clsx(
      'ui',
      active.value && 'active',
      direction.value === 'up' && 'upward',
      props.button && 'button',
      props.floating && 'floating',
      props.labeled && 'labeled',
      props.icon && 'icon',
      props.inline && 'inline',
      props.item && 'item',
      props.pointing && `${props.pointing} pointing`,
      props.search && 'search',
      'dropdown',
    ))

    const onClick = () => active.value = !active.value

    const onSelect = (item: DropdownItem) => {
      if (props.search || props.searchInMenu) inputText.value = ''
      emit('update:modelValue', item)
    }

    onClickOutside(el, () => active.value = false)

    return () => (
      <>
        {props.selection ?
          <Select
            modelValue={props.modelValue as OptionItem}
            {...{'onUpdate:modelValue': (value: OptionItem) => emit('update:modelValue', value)}}
            clearable={props.clearable}
            fluid={props.fluid}
            multiple={props.multiple}
            placeholder={props.placeholder}
            search={props.search}
            options={props.options as OptionItem[]}
          /> :
          <div
            ref={el}
            class={classes.value}
            onClick={onClick}
          >
            {
              props.search &&
              <SearchInput v-model={inputText.value} />
            }
            <Text
              icon={props.icon}
              label={typeof props.modelValue === 'object' ? (props.modelValue as any).label : undefined}
              image={typeof props.modelValue === 'object' ? (props.modelValue as any).image : undefined}
              filtered={!props.searchInMenu && inputText.value !== ''}
            >
              {text.value}
            </Text>
            <ItemGroup
              active={active.value}
              direction={direction.value}
            >
              {{
                search: () => <SearchInput inMenu={props.searchInMenu} v-model={inputText.value} />,
                [props.searchInMenu ? 'inMenu' : 'default']: () => (
                  <>
                    {options.value.map((item) =>
                    <Item
                      active={JSON.stringify(item) === JSON.stringify(props.modelValue)}
                      item={item as DropdownItem}
                      onSelect={onSelect}
                    />)}
                  </>
                )
              }}
            </ItemGroup>
          </div>
        }
      </>
    )
  }
})
