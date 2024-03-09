import clsx from "clsx";
import { computed, defineComponent, h, inject, onMounted, onUnmounted, PropType, ref, Ref, watch, withModifiers } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  emits: ['search'],
  props: {
    search: Boolean,
    onSearch: Function as PropType<(event: InputEvent) => void>
  },
  setup(_, { emit, slots }) {
    const { state } = inject('useDropdown') as any
    const container: Ref<HTMLElement|null> = ref(null)

    const computedClass = computed(() => {
      let animationClass = () => {
        if (state.visible) return `animating slide ${state.direction} in visible`
        else return `animating slide ${state.direction} out visible`
      }

      return clsx(
        'menu',
        'transition',
        computeKeyOnly(state.visible, 'visible'),
        computeKeyOnly(!state.visible && !state.animating, 'hidden'),
        computeKeyOnly(state.animating, animationClass())
      )
    })

    watch(() => state.visible, (newValue) => {
      if (!newValue || !container.value) return

      let parent = container.value.parentElement
      const { top, height } = parent?.getBoundingClientRect() as DOMRect
      const spaceAtTop = top - (items.value.length*37)
      const spaceAtBottom = document.documentElement.clientHeight - top - height - (items.value.length*37)

      state.direction = spaceAtTop > spaceAtBottom ? 'up' : 'down'
    })

    const items = computed(() => {
      let items: any = []
      let defaultSlot = slots.default?.()

      if (defaultSlot) {
        defaultSlot.forEach((child: any) => {
          if (child.type.name === 'SuiSelectItem') items.push(child)
        })
      }

      return items
    })

    const onSearchInput = (event: any) => emit('search', event)

    return {
      container,
      computedClass,
      onSearchInput
    }
  },
  render() {
    const renderSearchInMenu = () => {
      return (
        <>
          <div
            class="ui left icon input"
            onClick={withModifiers(() => {}, ["stop"])}
          >
            <input type="text" onInput={(event) => this.onSearchInput(event as InputEvent)} />
            <i class="search icon"></i>
          </div>
          <div class="ui divider"></div>
        </>
      )
    }

    return (
      <div
        ref={(ref) => this.container = ref as HTMLElement}
        class={this.computedClass}
      >
        {this.$slots.header && <div class="header">{this.$slots.header?.()}</div>}
        {this.$props.search && renderSearchInMenu()}
        {this.$slots.default?.()}
      </div>
    )
  }
})