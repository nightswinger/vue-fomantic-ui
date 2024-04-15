import { computed, defineComponent, ref, watch } from 'vue'

import type { PropType } from 'vue'

export default defineComponent({
  props: {
    active: Boolean,
    direction: {
      type: String as PropType<'up' | 'down'>,
      default: 'down',
    }
  },
  setup(props, { slots }) {
    const el = ref<HTMLDivElement>()
    const visible = ref(false)

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
        class="menu"
        style={styles.value}
      >
        {slots.default?.()}
      </div>
    )
  }
})
