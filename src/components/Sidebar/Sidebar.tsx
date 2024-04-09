import clsx from 'clsx'
import { Teleport, computed, defineComponent, onMounted, ref, watch } from 'vue'
import { onClickOutside, useElementSize, useParentElement } from '@vueuse/core'

import Overlay from '../Overlay/Overlay'
import Menu from '../Menu/Menu'

import type { PropType } from 'vue'

export default defineComponent({
  props: {
    animation: {
      type: String,
      default: 'overlay'
    },
    dimmed: {
      type: Boolean,
      default: true
    },
    icon: [Boolean, String],
    items: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    mountOnBody: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String as PropType<'left' | 'right'>,
      default: 'left'
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  emits: ['update:visible', 'show', 'hide'],
  setup(props, { emit, slots }) {
    const elementRef = ref<HTMLElement>()
    const parentEl = useParentElement()

    const { width } = useElementSize(elementRef)

    const classes = computed(() => clsx(
      'ui',
      'sidebar',
      'animating',
      props.animation,
      props.direction,
      props.visible && 'visible'
    ))

    const close = () => {
      emit('update:visible', false)
    }

    onClickOutside(elementRef, () => props.mountOnBody && close())

    onMounted(() => {
      if (props.mountOnBody || !parentEl.value) return

      parentEl.value.style.overflowX = 'hidden'
      parentEl.value.style.transform = 'translate3d(0, 0, 0)'

      const pusher = parentEl.value.querySelector<HTMLElement>('.pusher')
      if (pusher) {
        pusher.style.position = 'relative'
        pusher.style.transition = 'transform 0.5s ease'
        pusher.style.transform = 'translate3d(0, 0, 0)'
        pusher.style.backfaceVisibility = 'hidden'
        pusher.style.minHeight = '100%'

        pusher.addEventListener('click', close)
      }
    })

    watch(() => props.visible, (value) => {
      emit(value ? 'show' : 'hide')

      if (props.mountOnBody || !parentEl.value) return

      const pusher = parentEl.value.querySelector<HTMLElement>('.pusher')
      if (pusher) {
        const x = props.direction === 'right' ? -width.value : width.value
        pusher.style.transform = value ? `translate3d(${x}px, 0, 0)` : 'translate3d(0, 0, 0)'
      }
    })

    return () => (
      <Teleport to="body" disabled={!props.mountOnBody}>
        <Menu
          ref={elementRef}
          class={classes.value}
          icon={props.icon}
          items={props.items}
          inverted
          vertical
        >
          {slots.default?.()}
        </Menu>
        {
          props.dimmed &&
          <Overlay show={props.visible} onClick={() => !props.mountOnBody && close()} />
        }
      </Teleport>
    )
  }
})
