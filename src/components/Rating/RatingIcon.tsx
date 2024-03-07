import clsx from "clsx";
import { computed, ComputedRef, defineComponent, inject, Ref, ref } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiRatingIcon',
  props: {
    icon: String,
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const rating: Ref<number> = inject('rating', ref(0))
    const updateRating: any = inject('updateRating')
    const selectedIndex: Ref<number> = inject('selectedIndex', ref(0))
    const updateSelectedIndex: any = inject('updateSelectedIndex')
    const clearable: boolean = inject('clearable', false)
    const disabled: boolean = inject('disabled', false)

    const handleClick = () => {
      if (disabled) return

      if (clearable && (props.index === rating.value)) {
        updateRating(0)
        updateSelectedIndex(0)
        return
      }

      updateRating(props.index)
    }

    const handleMouseEnter = () => {
      if (disabled) return

      updateSelectedIndex(props.index)
    }

    const isActive: ComputedRef<boolean> = computed(() => {
      return props.index <= rating.value
    })

    const isSelected: ComputedRef<boolean> = computed(() => {
      return props.index <= selectedIndex.value
    })

    const computedClass = computed(() => {
      return clsx(
        props.icon,
        computeKeyOnly(isActive.value, 'active'),
        computeKeyOnly(isSelected.value, 'selected'),
        'icon'
      )
    })

    return () => (
      <i
        class={computedClass.value}
        onClick={() => handleClick()}
        onMouseenter={() => handleMouseEnter()}
      ></i>
    )
  }
})