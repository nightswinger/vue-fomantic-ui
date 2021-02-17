import clsx from "clsx";
import { computed, defineComponent, h } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue, computeTextAlignProp } from "../../utils/classNameHelper";
import HeaderSubheader from "./HeaderSubheader"

export default defineComponent({
  name: 'SuiHeader',
  components: { HeaderSubheader },
  props: {
    as: String,
    attached: [Boolean, String],
    block: Boolean,
    color: String,
    content: String,
    disabled: Boolean,
    dividing: Boolean,
    floated: String,
    icon: Boolean,
    image: Boolean,
    inverted: Boolean,
    size: String,
    sub: Boolean,
    subheader: String,
    textAlign: String
  },
  setup(props) {
    const elementType = props.as || 'div'

    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.block, 'block'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.dividing, 'dividing'),
        computeKeyOnly(props.icon, 'icon'),
        computeKeyOnly(props.image, 'image'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.sub, 'sub'),
        computeKeyValue(props.floated, 'floated'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        computeTextAlignProp(props.textAlign),
        'header'
      )
    })

    return { elementType, computedClass }
  },
  render() {
    let children: any = []

    if (this.content) children.push(this.content)

    if (this.subheader) {
      children.push(
        h(HeaderSubheader, {}, this.subheader)
      )
    }

    if (children.length > 0) {
      return h(
        this.elementType,
        { class: this.computedClass },
        children
      )
    }

    return h(
      this.elementType,
      { class: this.computedClass },
      this.$slots.default?.()
    )
  }
})