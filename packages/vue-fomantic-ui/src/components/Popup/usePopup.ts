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
    const triggerEl = triggerRef.value.$el as HTMLElement

    popupEl.style.transform = `translate(${x}px, ${y}px)`

    const { top, left, width, height } = triggerEl.getBoundingClientRect()
    const popupRect = popupEl.getBoundingClientRect()
    const { pageXOffset, pageYOffset } = window

    if (placement.value.includes('top')) {
      x = pageXOffset + left
      y = pageYOffset + top - popupEl.offsetTop - popupEl.offsetHeight
    } else {
      x = left
      y = (top + height) - popupRect.top
    }

    if (placement.value.includes('right')) {
      const xOffset = width - popupRect.width
      x = left + xOffset
    }

    if (placement.value.includes('center')) {
      const xOffset = (width / 2) - (popupRect.width / 2)
      x = left + xOffset
    }

    if (placement.value === 'right center') {
      x = left + width
      y = (top + (height / 2)) - popupRect.top - (popupRect.height / 2)
    }

    if (placement.value === 'left center') {
      x = left - popupRect.width
      y = (top + (height / 2)) - popupRect.top - (popupRect.height / 2)
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