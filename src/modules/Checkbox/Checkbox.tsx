import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCheckbox',
  emits: ['update:modelValue', 'change', 'click'],
  props: {
    disabled: Boolean,
    indeterminate: Boolean,
    label: String,
    modelValue: null,
    readOnly: Boolean,
    slider: Boolean,
    toggle: Boolean,
    value: null
  },
  setup(props, { emit }) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        !props.label && 'fitted',
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.indeterminate, 'indeterminate'),
        computeKeyOnly(props.readOnly, 'read-only'),
        computeKeyOnly(props.slider, 'slider'),
        computeKeyOnly(props.toggle, 'toggle'),
        'checkbox'
      )
    })

    const checked = computed(() => {
      return Array.isArray(props.modelValue) ? props.modelValue.includes(props.value) : props.modelValue
    })

    const onClick = (event: any) => {
      if (props.disabled || props.readOnly) return

      let newValue
      if (!props.value) newValue = !props.modelValue
      else {
        if (checked.value)
          newValue = props.modelValue.filter((val: any) => props.value !== val)
        else
          newValue = props.modelValue ? [...props.modelValue, props.value] : [props.value]
      }

      emit('change', event)
      emit('click', event)
      emit('update:modelValue', newValue)
    }

    return {
      computedClass,
      checked,
      onClick
    }
  },
  render() {
    return (
      <div
        class={this.computedClass}
        onClick={this.onClick}
      >
        <input
          type="checkbox"
          class="hidden"
          checked={this.checked}
          readonly
        />
        <label>{this.label}</label>
      </div>
    )
  }
})