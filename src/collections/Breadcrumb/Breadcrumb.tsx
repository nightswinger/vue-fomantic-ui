import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: "SuiBreadcrumb",
  props: {
    inverted: Boolean,
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.inverted, 'inverted'),
        'breadcrumb'
      )
    })

    return { computedClass }
  },
  render() {
    return (
      <div class={this.computedClass}>
        {this.$slots.default?.()}
      </div>
    )
  }
});
