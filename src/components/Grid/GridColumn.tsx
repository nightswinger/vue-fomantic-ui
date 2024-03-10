import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyValue, computeResponsiveProp, computeTextAlignProp, computeWidthProp } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    color: String,
    computer: Number,
    floated: String,
    largeScreen: Number,
    mobile: Number,
    only: String,
    tablet: Number,
    textAlign: String,
    width: Number,
    widescreen: Number

  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        props.color,
        computeKeyValue(props.floated, 'floated'),
        computeKeyValue(props.only, 'only'),
        computeTextAlignProp(props.textAlign),
        computeWidthProp(props.width, 'wide'),
        computeResponsiveProp(props.mobile, 'mobile'),
        computeResponsiveProp(props.tablet, 'tablet'),
        computeResponsiveProp(props.computer, 'computer'),
        computeResponsiveProp(props.largeScreen, 'large screen'),
        computeResponsiveProp(props.widescreen, 'widescreen'),
        'column'
      )
    })

    return {
      computedClass
    }
  },
  render() {
    return (
      <div class={this.computedClass}>
        {this.$slots.default?.()}
      </div>
    )
  }
})