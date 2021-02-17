import { nextTick, ref, Ref, toRef } from "vue"

export default (props: any) => {
  const show: Ref<boolean> = ref(false)
  const placement: Ref<string> = toRef(props, 'position')

  const popupRef: Ref<any> = ref(null)
  const triggerRef: Ref<any> = toRef(props, 'trigger')

  const showPopup = () => {
    show.value = true
    nextTick(() => setPopupPosition())
  }

  const hidePopup = () => {
    show.value = false
  }

  const setPopupPosition =() => {
    if (!popupRef.value || !triggerRef.value) return

    let x: number = 0
    let y: number = 0

    const popupEl = popupRef.value! as HTMLElement
    const triggerEl = triggerRef.value! as HTMLElement

    if (placement.value.includes('top')) {
      x = triggerEl.offsetLeft
      y = triggerEl.offsetTop - popupEl.offsetTop - popupEl.offsetHeight
    } else {
      x = triggerEl.offsetLeft
      y = (triggerEl.offsetTop + triggerEl.offsetHeight) - popupEl.offsetTop
    }

    if (placement.value.includes('right')) {
      const xOffset = triggerEl.offsetWidth - popupEl.offsetWidth
      x = triggerEl.offsetLeft + xOffset
    }

    if (placement.value.includes('center')) {
      const xOffset = (triggerEl.offsetWidth / 2) - (popupEl.offsetWidth / 2)
      x = triggerEl.offsetLeft + xOffset
    }

    popupEl.style.display = 'flex'
    popupEl.style.position = 'absolute'
    popupEl.style.transform = `translate(${x}px, ${y}px)`
  }

  return {
    show,
    showPopup,
    hidePopup,
    placement,
    popupRef,
    triggerRef
  }
}