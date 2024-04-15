import clsx from 'clsx'
import { computed, defineComponent, ref, watch, watchEffect } from 'vue'
import { useElementBounding, useParentElement, useWindowSize } from '@vueuse/core'

import type { PropType } from 'vue'

export default defineComponent({
  props: {
    active: Boolean,
    direction: {
      type: String as PropType<'up' | 'down'>,
      default: 'down',
    }
  },
  emits: ['update:direction'],
  setup(props, { emit, slots }) {
    const el = ref<HTMLDivElement>()
    const visible = ref(false)

    const parentEl = useParentElement(el)

    const { height } = useWindowSize()
    const { top, bottom } = useElementBounding(parentEl)

    watchEffect(() => {
      const spaceAtTop = top.value
      const spaceAtBottom = height.value - bottom.value

      const direction = spaceAtTop > 240 && spaceAtBottom < 240 ? 'up' : 'down'
      emit('update:direction', direction)
    })

    const classes = computed(() => clsx(
      'scrollhint menu',
    ))

    const styles = computed(() => ({
      display: visible.value ? 'block' : 'none',
      transformOrigin: props.direction === 'up' ? 'bottom center': 'top center',
    }))

    const onShow = () => {
      el.value?.animate([
        { transform: 'scaleY(0)' },
        { transform: 'scaleY(1)' },
      ], 150)
      visible.value = true
    }

    const onHide = () => {
      const animation = el.value?.animate([
        { transform: 'scaleY(1)' },
        { transform: 'scaleY(0)' },
      ], 150)

      if (!animation) return
      animation.onfinish = () => visible.value = false
    }

    watch(() => props.active, (value) => {
      value ? onShow() : onHide()
    })

    return () => (
      <div
        ref={el}
        class={classes.value}
        style={styles.value}
      >
        {slots.default?.()}
      </div>
    )
  },
})
