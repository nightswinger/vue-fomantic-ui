import { defineComponent, withModifiers } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
    inMenu: Boolean,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () => 
      props.inMenu ?
        <div
          class="ui icon search input"
        >
          <i class="search icon"></i>
          <input
            type="text"
            value={props.modelValue}
            onClick={withModifiers(() => {}, ['stop'])}
            onInput={(event) => emit('update:modelValue', (event.target as HTMLInputElement).value)}
          />
        </div> :
        <input
          type="text"
          class="search"
          tabindex={0}
          value={props.modelValue}
          onInput={(event) => emit('update:modelValue', (event.target as HTMLInputElement).value)}
        />
    
  }
})
