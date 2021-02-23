import clsx from "clsx";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "SuiBreadcrumbDivider",
  props: {
    icon: String,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.icon,
        'icon',
        'divider'
      )
    })

    return { computedClass }
  },
  render() {
    if (this.icon) {
      return (
        <i
          aria-hidden="true"
          class={this.computedClass}
        >
          {this.$slots.default?.()}
        </i>
      )
    }

    return (
      <div class="divider">
        {this.$slots.default?.()}
      </div>
    )
  }
});