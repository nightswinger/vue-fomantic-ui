import clsx from "clsx";
import { computed, defineComponent, onMounted, onUnmounted, PropType, provide, Ref, ref, watch, withModifiers } from "vue";
import { DropdownMenu, DropdownItem } from ".";
import clickOutside from "../../directives/click-outside";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";
import { pluck } from "../../utils/underscore";
import DropdownText from "./DropdownText";
import { useDropdown } from "./useDropdown";

interface TDropdownItem {
  text: string,
  value?: string | number,
  flag?: string,
  image?: {},
  disabled?: boolean,
  label?: {
    color?: string,
    circular?: boolean,
    empty?: boolean
  }
}

export default defineComponent({
  name: 'SuiDropdown',
  directives: { clickoutside: clickOutside },
  emits: ['update:modelValue'],
  props: {
    button: Boolean,
    clearable: Boolean,
    compact: Boolean,
    floating: Boolean,
    fluid: Boolean,
    icon: String,
    inline: Boolean,
    item: Boolean,
    labeled: Boolean,
    modelValue: [Object, String],
    multiple: Boolean,
    options: Array as PropType<TDropdownItem[]|string[]>,
    placeholder: String,
    pointing: [Boolean, String],
    scrolling: Boolean,
    selection: Boolean,
    search: Boolean,
    searchInMenu: Boolean,
    simple: Boolean,
    text: String,
  },
  setup(props, { emit }) {
    const api = useDropdown(props)
    provide('useDropdown', api)

    const {
      state,
      show,
      hide
    } = api

    const computedClass = computed(() => {
      return clsx(
        'ui',
        computeKeyOnly(props.button, 'button'),
        computeKeyOnly(props.clearable, 'clearable'),
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.floating, 'floating'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(!!props.icon, 'icon'),
        computeKeyOnly(props.inline, 'inline'),
        computeKeyOnly(props.item, 'item'),
        computeKeyOnly(props.labeled, 'labeled'),
        computeKeyOnly(props.multiple, 'multiple'),
        computeKeyOnly(props.scrolling, 'scrolling'),
        computeKeyOnly(props.selection, 'selection'),
        computeKeyOnly(props.search, 'search'),
        computeKeyOnly(props.simple, 'simple'),
        computeKeyOrKeyValue(props.pointing, 'pointing'),
        'dropdown',
        computeKeyOnly(state.visible, 'active visible'),
        computeKeyOnly(state.direction === 'up', 'upward')
      )
    })

    const onClick = () => state.visible ? hide() : show()

    const openMenu = () => {
      if (props.search && inputRef.value) inputRef.value.focus() 

      show()
    }

    const closeMenu = () => hide()

    const filteredText = ref('')
    const filteredOptions = computed(() => {
      return (props.options as (string|TDropdownItem)[]).filter((option) => {
        if (typeof option === 'string') return option.toLowerCase().includes(filteredText.value.toLowerCase())
        if (props.multiple && Array.isArray(props.modelValue)) {
          if (typeof option === 'object') return !pluck(props.modelValue, 'text').includes(option.text)
          return props.modelValue.includes(option)
        }

        return option.text.toLowerCase().includes(filteredText.value.toLowerCase())
      })
    })

    const inputRef: Ref<HTMLElement|null> = ref(null)
    const onInput = (event: InputEvent) => filteredText.value = (event.target as HTMLInputElement).value
    const onSelect = (event: any) => {
      filteredText.value = ''

      if (props.multiple) {
        let result = Array.isArray(props.modelValue) ? [...props.modelValue, event] : [event]
        return emit('update:modelValue', result)
      }

      return emit('update:modelValue', event)
    }
    const removeItem = (value: string) => {
      if (Array.isArray(props.modelValue)) {
        const index = props.modelValue.findIndex((selected) => selected === value)

        if (index > -1) {
          let copy = Object.assign(props.modelValue)
          copy.splice(index, 1)

          emit('update:modelValue', copy)
        }
      } 
    }

    provide('selection', props.selection)

    return {
      computedClass,
      onClick,
      openMenu,
      closeMenu,
      filteredText,
      filteredOptions,
      inputRef,
      onInput,
      onSelect,
      removeItem
    }
  },
  render() {
    const renderMultipleSelect = () => {
      if (Array.isArray(this.$props.modelValue)) {
        return (
          this.$props.modelValue.map((selected) => {
            if (typeof selected === 'object') {
              return <a class="ui label">
                {selected.flag && <i class={`${selected.flag} flag`}></i>}
                {selected.text}
                <i
                  class="delete icon"
                  onClick={withModifiers(() => this.removeItem(selected), ["stop"])}
                ></i>
              </a>
            }

            return <a class="ui label">
              {selected}
              <i
                class="delete icon"
                onClick={withModifiers(() => this.removeItem(selected), ["stop"])}
              ></i>
            </a>
          })
        )
      }
    }

    const renderOptions = () => {
      return this.filteredOptions
        .filter((option) => {
          if (this.$props.multiple && Array.isArray(this.$props.modelValue)) {
            return !this.$props.modelValue.includes(option)
          }
          return true
        })
        .map((option: TDropdownItem | string) => {
          return <DropdownItem
            item={option}
            active={this.$props.modelValue && typeof option === 'object' ? option.text === (this.$props.modelValue as TDropdownItem).text : option === this.$props.modelValue}
            text={typeof option === 'object' ? option.text : option}
            flag={typeof option === 'object'
              ? Object.keys(option as any).includes('flag') ? option.flag : ''
              : ''}
            image={(option as TDropdownItem).image}
            label={(option as TDropdownItem).label}
            disabled={(option as TDropdownItem).disabled}
            onSelect={this.onSelect}
          />
      })
    }

    const renderText = () => {
      let textProps = {
        clearable: this.clearable,
        filtered: this.filteredText.length > 0,
        icon: this.icon,
        item: this.modelValue,
        placeholder: this.placeholder,
        text: this.text
      }

      return (
        <DropdownText
          {...textProps}
          onRemove={() => this.$emit('update:modelValue', null)}
        />
      )
    }

    const renderMenu = () => {
      return (
        <DropdownMenu search={this.$props.searchInMenu} onSearch={this.onInput}>
          {renderOptions()}
        </DropdownMenu>
      )
    }

    return (
      <div
        class={this.computedClass}
        onClick={this.onClick}
        v-clickoutside={this.closeMenu}
      >
        {this.$props.multiple && renderMultipleSelect()}
        {this.search && <input
          ref={(ref) => this.inputRef = ref as HTMLElement}
          type="text"
          class="search"
          autocomplete="off"
          tabindex={0}
          value={this.filteredText}
          onInput={(event) => this.onInput(event as InputEvent)}
        />}
        {this.search && this.multiple && <span class="sizer"></span>}

        {renderText()}
        {this.$slots.default?.() || renderMenu()}
      </div>
    )
  }
})