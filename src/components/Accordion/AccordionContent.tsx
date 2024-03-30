import clsx from "clsx"
import { computed, defineComponent, nextTick, ref, watch } from "vue"

import { computeKeyOnly } from "@/utils/classNameHelper"

export default defineComponent({
  props: {
    active: Boolean,
    compact: Boolean,
    styled: Boolean,
  },
  setup(props, { slots }) {
    const activeClass = ref(props.active)

    const paddingValue = {
      active: props.styled ? '0.5em 1em 1.5em' : props.compact ? '0.25em 0px 0.5em' : '0.5em 0px 1em',
      inactive: props.styled ? '0px 1em' : '0px 0px',
    }

    const body = ref<HTMLDivElement>()
    const height = ref(0)
    const opacity = ref(0)
    const padding = ref(paddingValue.inactive)

    const classes = computed(() => {
      return clsx(
        computeKeyOnly(activeClass.value, 'active'),
        'content'
      )
    })

    const styles = computed(() => {
      return {
        maxHeight: `${height.value}px`,
        opacity: opacity.value,
        padding: padding.value,
        overflow: 'hidden',
        transition: 'all 0.5s ease',
      }
    })

    const getContentHeight = () => {
      if (!body.value) return 0
      const fontSize = window.getComputedStyle(body.value).fontSize
      return body.value.scrollHeight + parseInt(fontSize) * (props.styled ? 2 : 1.5)
    }

    watch(() => props.active, async (newValue) => {
      if (newValue) {
        padding.value = paddingValue.inactive
        activeClass.value = newValue

        await nextTick(() => {
        if (!body.value) return
          padding.value = paddingValue.active
          height.value = getContentHeight()
          opacity.value = 1
        })
      } else {
        padding.value = paddingValue.inactive
        height.value = 0
        opacity.value = 0
      }
    })

    return () => (
      <div
        ref={body}
        class={classes.value}
        style={styles.value}
        onTransitionend={() => {
          if (!props.active) {
            activeClass.value = false
          }
        }}
      >
        {slots.default?.()}
      </div>
    )
  }
})
