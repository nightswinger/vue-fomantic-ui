import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    visible: Boolean,
  },
  setup(props) {
    const zIndex = ref(props.visible ? 101 : -1)

    watch(() => props.visible, (value) => {
      if (!value) return
      zIndex.value = value ? 101 : -1
    })

    return () => (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100%',
          backgroundColor: props.visible ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
          transition: 'background-color 0.5s',
          zIndex: zIndex.value,
        }}
        onTransitionend={() => {
          if (!props.visible) {
            zIndex.value = -1
          }
        }}
      />
    )
  }
})
