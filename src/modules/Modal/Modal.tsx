import clsx from "clsx";
import { computed, defineComponent, Teleport } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiModal',
  props: {
    basic: Boolean,
    closeIcon: Boolean,
    modelValue: Boolean,
    size: String
  },
  setup(props, { emit }) {
    const dimmerClass = computed(() => {
      return clsx(
        'ui',
        'page modals dimmer transition',
        computeKeyOnly(props.modelValue, 'active visible')
      )
    })

    const dimmerStyle = computed(() => {
      return { display: props.modelValue ? 'flex !important' : 'none !important' }
    })

    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.basic, 'basic'),
        'modal',
        'transition',
        computeKeyOnly(props.modelValue, 'active visible')
      )
    })

    const close = () => {
      emit('update:modelValue', false)
    }

    return {
      dimmerClass,
      dimmerStyle,
      computedClass,
      close
    }
  },
  render() {
    return (
      <Teleport to="body">
        <div
          class={this.dimmerClass}
          style={this.dimmerStyle}
          onClick={this.close}
        >
          <div
            class={this.computedClass}
            onClick={(e) => e.stopPropagation()}
          >
            {this.closeIcon && (<i aria-hidden="true" class="close icon" onClick={this.close} />)}
            {this.$slots.default?.()}
          </div>
        </div>
      </Teleport>
    )
  }
})