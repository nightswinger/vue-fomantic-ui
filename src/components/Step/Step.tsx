import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiStep',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    href: String,
    link: Boolean,
    vertical: Boolean,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.completed, 'completed'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.link, 'link'),
        computeKeyOnly(props.vertical, 'vertical'),
        'step'
      )
    })

    return { computedClass }
  },
  render() {
    if (this.href) {
      return (
        <a
          class={this.computedClass}
          href={this.href}
        >
          {this.$slots.default?.()}
        </a>
      )
    }

    return (
      <div class={this.computedClass}>
        {this.$slots.default?.()}
      </div>
    )
  }
})