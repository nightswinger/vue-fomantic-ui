import clsx from 'clsx'
import { computed, defineComponent } from "vue";
import { computeKeyOnly } from '../../utils/classNameHelper';

export default defineComponent({
  name: "SuiBreadcrumbSection",
  props: {
    active: Boolean,
    link: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.active, 'active'),
        'section'
      )
    })

    return { computedClass }
  },
  render() {
    const elementType: string = this.link ? 'a' : 'div'

    return (
      <elementType class={this.computedClass}>
        {this.$slots.default?.()}
      </elementType>
    )
  }
});