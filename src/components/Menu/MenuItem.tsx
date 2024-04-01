import clsx from "clsx";
import { computed, defineComponent, resolveComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  props: {
    action: Boolean,
    active: Boolean,
    as: String,
    browse: Boolean,
    color: String,
    disabled: Boolean,
    fitted: [Boolean, String],
    header: Boolean,
    icon: Boolean,
    index: Number,
    link: Boolean,
    name: String,
    position: String,
    stackable: Boolean,
  },
  emits: ['selected'],
  setup(props, { slots, emit }) {
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
        props.position,
        computeKeyOnly(props.action, 'action'),
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.browse, 'browse'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.header, 'header'),
        computeKeyOnly(props.icon, 'icon'),
        computeKeyOnly(props.link, 'link'),
        computeKeyOrKeyValue(props.fitted, 'fitted'),
        'item'
      )
    })

    const isSelectable = computed(() => {
      return !props.header && !props.disabled && props.as !== 'div'
    })

    return () => (
      <elementType
        class={computedClass.value}
        onClick={() => isSelectable.value && emit('selected', props.index)}
      >
        {props.name || slots.default?.()}
      </elementType>
    )
  }
})
