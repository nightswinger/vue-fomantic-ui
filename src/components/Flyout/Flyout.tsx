import clsx from 'clsx'
import { Teleport, computed, defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import type { PropType } from 'vue'

import Overlay from './Overlay'

export default defineComponent({
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String as PropType<'left' | 'right' | 'top' | 'bottom'>,
      default: 'left',
    },
    showCloseIcon: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: String as PropType<'very thin' | 'thin' | 'wide' | 'very wide'>,
  },
  emits: ['update:visible'],
  setup(props, { emit, slots }) {
    const elementRef = ref()

    const classes = computed(() => clsx(
      'ui',
      props.fullscreen && 'fullscreen',
      props.visible && 'visible',
      props.position,
      props.width,
      'flyout',
    ))

    const close = () => emit('update:visible', false)

    onClickOutside(elementRef, close)

    return () => (
      <Teleport to="body">
        <div
          ref={elementRef}
          class={classes.value}
          style={{
            transition: 'all 0.5s ease',
          }}
        >
          {props.showCloseIcon && <i class="close icon" onClick={close}></i>}
          {slots.default?.()}
        </div>

        <Overlay visible={props.visible} />
      </Teleport>
    )
  }
})
