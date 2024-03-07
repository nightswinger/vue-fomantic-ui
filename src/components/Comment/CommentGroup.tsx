import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiCommentGroup',
  props: {
    collapsed: Boolean,
    inverted: Boolean,
    minimal: Boolean,
    size: String,
    threaded: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        computeKeyOnly(props.collapsed, 'collapsed'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.minimal, 'minimal'),
        computeKeyOnly(props.threaded, 'threaded'),
        'comments'
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
})