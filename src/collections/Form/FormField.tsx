import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiFormField',
  emits: ['update:modelValue'],
  props: {
    error: Boolean,
    inline: Boolean,
    label: String,
    modelValue: String,
    placeholder: String,
    required: Boolean,
    type: String,
  },
  setup(props, { emit }) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.inline, 'inline'),
        computeKeyOnly(props.required, 'required'),
        'field'
      )
    })

    const inputType: string = props.type || 'text'

    const onInput = (event: any) => emit('update:modelValue', event.target.value)

    return {
      computedClass,
      inputType,
      onInput
    }
  },
  render() {
    if (this.label) {
      return (
        <div class={this.computedClass}>
          <label>{this.label}</label>
          <input
            type={this.inputType}
            placeholder={this.placeholder}
            value={this.modelValue}
            onInput={this.onInput}
          />
        </div>
      )
    }

    return (
      <div class={this.computedClass}>
        {this.$slots.default?.()}
      </div>
    )
  }
})