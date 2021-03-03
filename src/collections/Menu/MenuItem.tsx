import clsx from "clsx";
import { computed, defineComponent, resolveComponent } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiMenuItem',
  props: {
    active: Boolean,
    as: String,
    color: Boolean,
    disabled: Boolean,
    fitted: Boolean,
    header: Boolean,
    icon: Boolean,
    index: Number,
    link: Boolean,
    name: String,
    position: String,
    stackable: Boolean,
  },
  setup(props, { slots }) {
    let elementType: any = props.as || 'a'

    if (props.header) {
      elementType = 'div'
    }

    if (props.as === 'router-link') {
      elementType = resolveComponent(props.as)
    }

    const computedClass = computed(() => {
      return clsx(
        props.color,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.fitted, 'fitted'),
        computeKeyOnly(props.header, 'header'),
        computeKeyOnly(props.link, 'link'),
        'item'
      )
    })

    return () => (
      <elementType
        class={computedClass.value}
      >{props.name || slots.default?.()}</elementType>
    )
  }
})