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
    colored: Boolean,
    corner: [Boolean, String],
    disabled: Boolean,
    fitted: Boolean,
    flipped: String,
    inverted: Boolean,
    link: Boolean,
    loading: Boolean,
    name: String,
    primary: Boolean,
    rotated: String,
    secondary: Boolean,
    size: String
  },
  setup(props) {
    const classes = computed(() => {
      return clsx(
        props.color,
        props.name,
        props.size,
        computeKeyOnly(props.primary, 'primary'),
        computeKeyOnly(props.secondary, 'secondary'),
        computeKeyOnly(props.bordered, 'bordered'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.colored, 'colored'),
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

    return { classes }
  },
  render() {
    let elementType = this.$props.as || 'i'

    return h(
      elementType,
      {
        'aria-hidden': true,
        class: this.classes
      }
    )
  }
})
