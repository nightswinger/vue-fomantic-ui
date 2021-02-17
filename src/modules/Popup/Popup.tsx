import { defineComponent, onMounted, Ref, ref, Teleport } from "vue";
import PopupContainer from "./PopupContainer";

export default defineComponent({
  name: 'Popup',
  props: {
    position: String
  },
  setup(props, { slots }) {
    const trigger: Ref<any> = ref(null)

    
    onMounted(() => {
      trigger.value = slots.trigger?.()[0].el
    })

    return () => (
      <>
        {slots.trigger?.()}
        <Teleport to="body">
          <PopupContainer
            trigger={trigger.value}
            position={props.position}
          >
            {slots.default?.()}
          </PopupContainer>
        </Teleport>
      </>
    )
  }
})