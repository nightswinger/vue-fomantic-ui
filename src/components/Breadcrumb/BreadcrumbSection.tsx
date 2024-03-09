import clsx from 'clsx'
import { computed, ConcreteComponent, defineComponent, resolveComponent } from "vue";
import { computeKeyOnly } from '../../utils/classNameHelper';

export default defineComponent({
  props: {
    active: Boolean,
    href: String,
    link: Boolean,
    to: String
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        computeKeyOnly(props.active, 'active'),
        'section'
      )
    })

    const isLink = props.link || !!props.href

    return { computedClass, isLink }
  },
  render() {
    let elementType: string | ConcreteComponent = 'div'

    if (this.isLink) elementType = 'a'
    else if (this.to) elementType = resolveComponent('router-link')

    const props = {
      href: this.href,
      to: this.to
    }

    return (
      <elementType
        class={this.computedClass}
        {...props}
      >
        {this.$slots.default?.()}
      </elementType>
    )
  }
});