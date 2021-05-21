import clsx from "clsx";
import { computed, defineComponent, h, inject, onMounted, onUnmounted, PropType, ref, Ref, watch, withModifiers } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiDropdownMenu',
  emits: ['search'],
  props: {
    search: Boolean,
    onSearch: Function as PropType<(event: InputEvent) => void>
  },
  setup(_, { emit }) {
    const openState: Ref<boolean> = inject('open', ref(false))
    const upward: Ref<boolean> = inject('upward', ref(false))

    const rootRef: Ref<HTMLElement|null> = ref(null)
    const visualState = ref('closed')

    watch(openState, (newValue) => {
      visualState.value = newValue ? 'opening' : 'closing'
    })

    onMounted(() => {
      rootRef.value?.addEventListener('animationend', onAnimationEnd, false)
    })

    onUnmounted(() => {
      rootRef.value?.removeEventListener('animationend', onAnimationEnd)
    })

    const onAnimationEnd = () => {
      visualState.value = openState.value ? 'open' : 'closed'
    }

    const computedClass = computed(() => {
      return clsx(
        'menu',
        'transition',
        computeKeyOnly(openState.value, 'visible active'),
        animation.value
      )
    })

    const animation = computed(() => {
      switch (visualState.value) {
        case 'opening':
          return `animating slide ${upward.value ? 'up' : 'down'} in visible`
        case 'closing':
          return `animating slide ${upward.value ? 'up' : 'down'} out visible`
        default:
          return ''
      }
    })

    const onSearchInput = (event: any) => emit('search', event)

    return {
      rootRef,
      computedClass,
      onAnimationEnd,
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
        ref={(ref) => this.rootRef = ref as HTMLElement}
        class={this.computedClass}
      >
        {this.$slots.header && <div class="header">{this.$slots.header?.()}</div>}
        {this.$props.search && renderSearchInMenu()}
        {this.$slots.default?.()}
      </div>
    )
  }
})