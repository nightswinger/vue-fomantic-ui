import clsx from "clsx";
import { computed, defineComponent, watchEffect } from "vue";
import usePopup from "./usePopup";

export default defineComponent({
  name: 'SuiPopupContainer',
  props: {
    position: { type: String, default: 'top left'},
    trigger: HTMLElement
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
      if (!triggerRef.value) return

      triggerRef.value.addEventListener('mouseenter', showPopup)
      triggerRef.value.addEventListener('mouseleave', hidePopup)
    })

    const classes = computed(() => {
      return clsx(
        'ignored ui',
        props.position,
        'popup transition',
        show.value && 'visible'
      )
    })

    return () => (
      <div
        ref={popupRef}
        style="display: flex; position: absolute; transform: translate(0px, 0px);"
      >
        <div
          class={classes.value} style="position: initial;"
        >
          <div class="content">{slots.default?.()}</div>
        </div>
      </div>
      
    )
  }
})