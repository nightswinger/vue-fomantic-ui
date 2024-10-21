import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    show: Boolean,
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const zIndex = ref(props.show ? 101 : -1)

    watch(() => props.show, (value) => {
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
          backgroundColor: props.show ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
          transition: 'background-color 0.5s',
          zIndex: zIndex.value,
        }}
        onClick={() => props.onClick()}
        onTransitionend={() => {
          if (!props.show) {
            zIndex.value = -1
          }
        }}
      />
    )
  }
})
