import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () => (
      <input
        type="text"
        class="search"
        tabindex={0}
        value={props.modelValue}
        onInput={(event) => emit('update:modelValue', (event.target as HTMLInputElement).value)}
      />
    )
  }
})
