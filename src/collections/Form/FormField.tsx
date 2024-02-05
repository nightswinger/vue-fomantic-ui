import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";
import { useWidthClass } from "../../composables/width";

export default defineComponent({
  name: 'SuiFormField',
  emits: ['update:modelValue'],
  props: {
    disabled: Boolean,
    error: Boolean,
    inline: Boolean,
    label: String,
    modelValue: String,
    placeholder: String,
    required: Boolean,
    type: String,
    width: String || Number
  },
  setup(props, { emit }) {
    const { widthClass } = useWidthClass(props);

    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.inline, 'inline'),
        computeKeyOnly(props.required, 'required'),
        widthClass.value,
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