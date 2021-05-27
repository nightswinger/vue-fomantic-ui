import { computed, Ref, ref, watch } from "vue";

export function useAnimation(show: Ref<boolean>, options = {}) {
  const visualState = ref(show.value ? 'open' : 'closed')
  const updateVisualState = () => visualState.value = show.value ? 'open' : 'closed'

  watch(show, (newValue) => {
    visualState.value = newValue ? 'opening' : 'closing'
  })

  const setupAnimation = (el: HTMLElement) => {
    el.addEventListener('animationend', updateVisualState, true)
  }

  const removeAnimation = (el: HTMLElement) => {
    if (!el) return
    el.removeEventListener('animationend', updateVisualState)
  }

  const computeAnimationClass = computed((animationType = 'scale') => {
    switch (visualState.value) {
      case 'opening':
        return `animating ${animationType} in`
      case 'open':
        return 'visible active'
      case 'closing':
        return `visible active animating ${animationType} out`
      case 'closed':
        return 'hidden'
    }
  })

  return {
    setupAnimation,
    removeAnimation,
    computeAnimationClass
  }
}