import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyValue } from "../../utils/classNameHelper";

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

export default defineComponent({
  name: 'SuiStepGroup',
  props: {
    attached: String,
    fluid: Boolean,
    inverted: Boolean,
    ordered: Boolean,
    size: String,
    stackable: String,
    unstackable: Boolean,
    vertical: Boolean,
    widths: Number,
  },
  setup(props) {
    const {
      widths
    } = props

    const computedClass = computed(() => {
      return clsx(
        'ui',
        widths && numbers[widths - 1],
        props.size,
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.ordered, 'ordered'),
        computeKeyOnly(props.unstackable, 'unstackable'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyValue(props.attached, 'attached'),
        computeKeyValue(props.stackable, 'stackable'),
        'steps'
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