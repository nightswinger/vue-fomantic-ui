import clsx from 'clsx'
import { computed, defineComponent, PropType, ref, Teleport } from 'vue'
import { onClickOutside } from '@vueuse/core';

import { computeKeyOnly } from '../../utils/classNameHelper'
import { useModalAnimation } from './hooks/useModalAnimation';
import ModalDimmer from './ModalDimmer';

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
  setup (props, { emit }) {
    const modalRef = ref<HTMLElement>()

    const {
      animationClasses,
      isClosed,
    } = useModalAnimation(props);

    const computedClass = computed(() => {
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

    return {
      computedClass,
      style,
      close,
      modalRef,
    }
  },
  render () {
    return (
      <Teleport to="body">
        <ModalDimmer
          blurring={this.dimmer === 'blurring'}
          inverted={this.dimmer === 'inverted'}
          modelValue={this.modelValue}
        >
          <div
            class={this.computedClass}
            style={this.style}
            onClick={(e) => e.stopPropagation()}
            ref={(ref: any) => this.modalRef = ref}
          >
            {this.closeIcon && (<i aria-hidden="true" class="close icon" onClick={this.close} />)}
            {this.$slots.default?.()}
          </div>
        </ModalDimmer>
      </Teleport>
    )
  }
})
