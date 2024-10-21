import { onMounted, onUnmounted, unref } from "vue"
import type { MaybeRef } from "vue"

export const useClickOutside = (elementRef: MaybeRef<HTMLElement | undefined>, cb: (el: HTMLElement) => void) => {
  const listener = (event: MouseEvent) => {
    const target = event.target as HTMLElement

    const isInsideClicked = () => {
      const el = unref(elementRef)

      if (!el) return false

      return el.contains(target)
    }

    if (!isInsideClicked()) { cb(target) }
  }

  onMounted(() => window.addEventListener("mousedown", listener))
  onUnmounted(() => window.removeEventListener("mousedown", listener))
}
