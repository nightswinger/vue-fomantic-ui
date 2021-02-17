import clsx from "clsx";
import { computed, defineComponent, provide, ref } from "vue";
import { computeKeyOnly } from "../../utils/classNameHelper";
import RatingIcon from "./RatingIcon";

export default defineComponent({
  name: 'SuiRating',
  props: {
    clearable: Boolean,
    defaultRating: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    icon: String,
    maxRating: {
      type: Number,
      default: 1
    },
    size: String
  },
  setup(props) {
    const rating = ref(props.defaultRating)
    const selected = ref(false)
    const selectedIndex = ref(0)

    const updateRating = (value: number) => rating.value = value
    const updateSelectedIndex = (value: number) => selectedIndex.value = value

    const handleMouseEnter = () => {
      if (props.disabled) return

      selected.value = true
    }
    const handleMouseLeave = () => {
      if (props.disabled) return

      selected.value = false
      updateSelectedIndex(0)
    }

    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.icon,
        props.size,
        computeKeyOnly(props.disabled, 'disabled'),
        'rating',
        computeKeyOnly(selected.value, 'selected')
      )
    })

    provide('rating', rating)
    provide('updateRating', updateRating)
    provide('selectedIndex', selectedIndex)
    provide('updateSelectedIndex', updateSelectedIndex)
    provide('clearable', props.clearable)
    provide('disabled', props.disabled)

    return () => (
      <div
        class={computedClass.value}
        onMouseenter={() => handleMouseEnter()}
        onMouseleave={() => handleMouseLeave()}
      >
        {[...Array(props.maxRating)].map((_, i) => {
            return <RatingIcon
              icon={props.icon}
              index={i+1}
            />
          }
        )}
      </div>
    )
  }
})
