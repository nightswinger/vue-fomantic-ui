import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiIcon',
  props: {
    as: String,
    bordered: Boolean,
    circular: Boolean,
    color: String,
    corner: [Boolean, String],
    disabled: Boolean,
    fitted: Boolean,
    flipped: String,
    inverted: Boolean,
    link: Boolean,
    loading: Boolean,
    name: String,
    rotated: String,
    size: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.color,
        props.name,
        props.size,
        computeKeyOnly(props.bordered, 'bordered'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.fitted, 'fitted'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.link, 'link'),
        computeKeyOnly(props.loading, 'loading'),
        computeKeyValue(props.flipped, 'flipped'),
        computeKeyValue(props.rotated, 'rotated'),
        computeKeyOrKeyValue(props.corner, 'corner'),
        'icon'
      )
    })

    return { computedClass }
  },
  render() {
    let elementType = this.$props.as || 'i'

    return h(
      elementType,
      {
        'aria-hidden': true,
        class: this.computedClass
      }
    )
  }
})