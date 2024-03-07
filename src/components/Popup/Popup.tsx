import clsx from "clsx";
import { computed, defineComponent, onMounted, onUnmounted, ref, Teleport, watch, watchEffect } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";
import usePopup from "./usePopup";

export default defineComponent({
  name: 'SuiPopup',
  props: {
    basic: Boolean,
    content: String,
    flowing: Boolean,
    header: String,
    inverted: Boolean,
    position: { type: String, default: 'top left'},
    size: String,
    trigger: Object,
    wide: [Boolean, String]
  },
  setup(props, { slots }) {
    const {
      show,
      showPopup,
      hidePopup,
      popupRef,
      triggerRef
    } = usePopup(props)

    watchEffect(() => {
      if (!triggerRef.value?.$el) return

      triggerRef.value?.$el.addEventListener('mouseenter', showPopup)
      triggerRef.value?.$el.addEventListener('mouseleave', hidePopup)
    })

    const visualState = ref(show.value ? 'open' : 'close')
    const isVisible = computed(() => visualState.value !== 'closed')

    watch(() => show.value, (newValue) => {
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

    const updateVisualState = () => visualState.value = show.value ? 'open' : 'closed'

    onMounted(() => {
      popupRef.value?.addEventListener('animationend', updateVisualState, true)
    })

    onUnmounted(() => {
      popupRef.value?.removeEventListener('animationend', updateVisualState)
    })

    const popupStyle = {
      position: 'initial' as 'initial',
      animationDuration: '200ms'
    }

    const classes = computed(() => {
      return clsx(
        'ignored ui',
        props.position,
        props.size,
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.flowing, 'flowing'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOrKeyValue(props.wide, 'wide'),
        'popup transition',
        computeAnimationClass(visualState.value, 'scale')
      )
    })

    return () => (
      <Teleport to="body">
        <div
          ref={popupRef}
          style="display: flex; position: absolute; transform: translate(0px, 0px);"
        >
          <div
            class={classes.value} style={popupStyle}
          >
            {props.header && <div class="header">{props.header}</div>}
            <div class="content">{props.content ? props.content : slots.default?.()}</div>
          </div>
        </div>
      </Teleport>
    )
  }
})