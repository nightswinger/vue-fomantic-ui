import clsx from 'clsx'
import { computed, defineComponent, PropType, ref, Teleport } from 'vue'
import { onClickOutside } from '@vueuse/core'

import { computeKeyOnly } from '@/utils/classNameHelper'

import { useModalAnimation } from './hooks/useModalAnimation'
import ModalDimmer from './ModalDimmer'

export default defineComponent({
  props: {
    basic: Boolean,
    closeIcon: Boolean,
    dimmer: String as PropType<'inverted' | 'blurring' | undefined>,
    modelValue: Boolean,
    size: String,
    closable: {
      type: Boolean,
      default: true
    },
    overlay: Boolean,
    fullscreen: Boolean,
  },
  setup (props, { emit, slots }) {
    const modalRef = ref<HTMLElement>()

    const {
      animationClasses,
      isClosed,
    } = useModalAnimation(props);

    const classes = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.overlay, 'overlay'),
        computeKeyOnly(props.fullscreen, 'fullscreen'),
        'modal',
        'transition',
        animationClasses.value,
      )
    })

    const style = computed(() => {
      return {
        display: isClosed.value ? 'none !important' : 'block !important',
        animationDuration: '500ms'
      }
    })

    const close = () => emit('update:modelValue', false)

    onClickOutside(modalRef, () => props.closable && emit('update:modelValue', false))

    return () => (
      <Teleport to="body">
        <ModalDimmer
          blurring={props.dimmer === 'blurring'}
          inverted={props.dimmer === 'inverted'}
          modelValue={props.modelValue}
        >
          <div
            class={classes.value}
            style={style.value}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            {props.closeIcon && (<i aria-hidden="true" class="close icon" onClick={close} />)}
            {slots.header && <div class="header">{slots.header?.()}</div>}
            {slots.content && <div class="content">{slots.content?.()}</div>}
            {slots.actions && <div class="actions">{slots.actions?.()}</div>}
            {slots.default?.()}
          </div>
        </ModalDimmer>
      </Teleport>
    )
  },
})
