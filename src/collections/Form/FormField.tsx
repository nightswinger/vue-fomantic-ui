import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiFormField',
  props: {
    error: Boolean,
    inline: Boolean,
    label: String,
    placeholder: String,
    required: Boolean,
    type: String,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.inline, 'inline'),
        computeKeyOnly(props.required, 'required'),
        'field'
      )
    })

    const inputType: string = props.type || 'text'

    return {
      computedClass,
      inputType
    }
  },
  render() {
    if (this.label) {
      return (
        <div class={this.computedClass}>
          <label>{this.label}</label>
          <input type={this.inputType} placeholder={this.placeholder} />
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