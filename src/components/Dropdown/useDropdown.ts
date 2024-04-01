import { getCurrentInstance, reactive, watch } from "vue"

export const useDropdown = (props: any) => {
  const vm = getCurrentInstance()
  const state = reactive({
    visible: false,
    animating: false,
    direction: 'down',
    multiple: props.multiple
  })

  watch(() => state.visible, () => {
    state.animating = true
    setTimeout(() => state.animating = false, 200)
  })

  return {
    state,
    show: () => !state.animating && (state.visible = true),
    hide: () => {
      if (state.animating) return

      state.visible = false
    }
  }
}