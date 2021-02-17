import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCheckbox',
  props: {
    disabled: Boolean,
    indeterminate: Boolean,
    label: String,
    modelValue: Boolean,
    readOnly: Boolean,
    slider: Boolean,
    toggle: Boolean
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

    const toggle = () => {
      const newValue = !props.modelValue
      emit('update:modelValue', newValue)
    }

    return { computedClass, toggle }
  },
  render() {
    return h(
      'div',
      {
        class: this.computedClass,
        onClick: this.toggle
      },
      [
        h('input', {
          type: 'checkbox',
          class: 'hidden',
          readonly: '',
          tabindex: 0,
          checked: this.modelValue,
        }),
        h('label', {}, this.label)
      ]
    )
  }
})