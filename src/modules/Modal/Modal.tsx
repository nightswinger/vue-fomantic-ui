import clsx from 'clsx'
import { computed, defineComponent, onMounted, onUnmounted, ref, Teleport, watch } from 'vue'
import { computeKeyOnly } from '../../utils/classNameHelper'

export default defineComponent({
  name: 'SuiModal',
  props: {
    basic: Boolean,
    closeIcon: Boolean,
    modelValue: Boolean,
    size: String
  },
  setup (props, { emit }) {
    const visualState = ref(props.modelValue ? 'open' : 'closed')
    const root = ref<Element | null>(null)

    const isVisible = computed(() => visualState.value !== 'closed')

    watch(() => props.modelValue, (newValue) => {
      visualState.value = newValue ? 'opening' : 'closing'
    })

    const computeAnimationClass = (visualState: string, animationType = 'scale') => {
      switch (visualState) {
        case 'opening':
          return `animating ${animationType} in`
        case 'open':
          return 'visible active'
        case 'closing':
          return `visible active animating ${animationType} out`
        case 'closed':
          return 'hidden'
      }
    }

    const updateVisualState = () => visualState.value = props.modelValue ? 'open' : 'closed'

    onMounted(() => {
      root.value?.addEventListener('animationend', updateVisualState, true)
    })

    onUnmounted(() => {
      root.value?.removeEventListener('animationend', updateVisualState)
    })

    const dimmerClass = computed(() => {
      return clsx(
        'ui',
        'page modals dimmer transition',
        computeAnimationClass(visualState.value, 'fade')
      )
    })

    const dimmerStyle = computed(() => {
      return {
        display: isVisible.value ? 'flex !important' : 'none !important',
        animationDuration: '500ms'
      }
    })

    const modalStyle = computed(() => {
      return {
        display: isVisible.value ? 'block !important' : 'none !important',
        animationDuration: '500ms'
      }
    })

    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.basic, 'basic'),
        'modal',
        'transition',
        computeAnimationClass(visualState.value)
      )
    })

    const close = () => {
      emit('update:modelValue', false)
    }

    return {
      dimmerClass,
      dimmerStyle,
      modalStyle,
      computedClass,
      close,
      root
    }
  },
  render () {
    return (
      <Teleport to="body">
        <div
          class={this.dimmerClass}
          style={this.dimmerStyle}
          onClick={this.close}
          ref={(ref: any) => this.root = ref}
        >
          <div
            class={this.computedClass}
            style={this.modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            {this.closeIcon && (<i aria-hidden="true" class="close icon" onClick={this.close} />)}
            {this.$slots.default?.()}
          </div>
        </div>
      </Teleport>
    )
  }
})
