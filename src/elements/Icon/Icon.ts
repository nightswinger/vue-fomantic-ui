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
    const {
      bordered,
      circular,
      color,
      corner,
      disabled,
      fitted,
      flipped,
      inverted,
      link,
      loading,
      name,
      rotated,
      size
    } = props

    const computedClass = computed(() => {
      return clsx(
        name,
        color,
        size,
        computeKeyOnly(bordered, 'bordered'),
        computeKeyOnly(circular, 'circular'),
        computeKeyOnly(disabled, 'disabled'),
        computeKeyOnly(fitted, 'fitted'),
        computeKeyOnly(inverted, 'inverted'),
        computeKeyOnly(link, 'link'),
        computeKeyOnly(loading, 'loading'),
        computeKeyValue(flipped, 'flipped'),
        computeKeyValue(rotated, 'rotated'),
        computeKeyOrKeyValue(corner, 'corner'),
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