import { computed, defineComponent, provide, ref } from 'vue'
import clsx from 'clsx'
import { autoPlacement, autoUpdate, useFloating } from '@floating-ui/vue'
import { onClickOutside } from '@vueuse/core'

import { makeSizeProps, useSize } from '@/composables/size'

import { UseCalendarKey, useCalendar } from './hooks/useCalendar'

import HourView from './HourView'
import DayView from './DayView'
import MonthView from './MonthView'
import YearView from './YearView'
import DecadeView from './DecadeView'

import type { PropType } from 'vue'

import type { View } from './hooks/useCalendar'

export default defineComponent({
  props: {
    activeStartDate: Date,
    defaultView: {
      type: String as PropType<View>,
      default: 'month'
    },
    disabled: Boolean,
    locale: String,
    localeFirstDayOfYear: {
      type: Number,
      default: 0
    },
    modelValue: Date,
    inline: Boolean,
    inverted: Boolean,
    placeholder: String,
    showIcon: {
      type: Boolean,
      default: true
    },
    ...makeSizeProps(),
  },
  emits: ['update:modelValue', 'dateSelected'],
  setup(props, { emit }) {
    const useCalendarInstance = useCalendar(props)
    provide(UseCalendarKey, useCalendarInstance)

    const {
      currentView,
      selectedDate,
      onDateSelected,
      format
    } = useCalendarInstance

    const show = ref(false)

    onDateSelected((newDate) => {
      emit('update:modelValue', newDate)
      emit('dateSelected', newDate)
      show.value = false
    })

    const { sizeClass } = useSize(props)
    const classes = computed(() => clsx(
      'ui',
      props.disabled && 'disabled',
      props.inverted && 'inverted',
      sizeClass.value,
      'calendar',
    ))

    const reference = ref()
    const floating = ref()

    const { floatingStyles, placement } = useFloating(reference, floating, {
      middleware: [autoPlacement({allowedPlacements: ['top-start', 'bottom-start']})],
      whileElementsMounted: autoUpdate,
    })

    onClickOutside(floating, () => show.value = false)

    const renderCalendar = () => {
      const classes = computed(() => clsx(
        !props.inline && 'ui popup visible',
        show.value && 'active',
        'calendar',
        placement.value === 'top-start' && 'top left',
        placement.value === 'bottom-start' && 'bottom left',
      ))

      const styles = computed(() => ({
        display: show.value ? 'block' : 'none',
        maxWidth: '250px',
        minWidth: 'min-content',
        top: placement.value === 'top-start' ? '-1em' : '0',
      }))

      return (
        <div
          ref={floating}
          class={classes.value}
          style={
            !props.inline ?
            {...floatingStyles.value, ...styles.value} :
            undefined
          }
        >
          {currentView.value === 'hour' && <HourView />}
          {currentView.value === 'day' && <DayView />}
          {
            currentView.value === 'month' &&
            <MonthView localeFirstDayOfYear={props.localeFirstDayOfYear} />
          }
          {currentView.value === 'year' && <YearView />}
          {currentView.value === 'decade' && <DecadeView />}
        </div>
      )
    }

    return () => (
      <div class={classes.value}>
        {props.inline && renderCalendar()}
        {!props.inline && (
          <>
            <div
              ref={reference}
              class={['ui input', props.showIcon && 'left icon']}
            >
              {props.showIcon && <i class='calendar icon' />}
              <input
                type="text"
                placeholder={props.placeholder}
                value={selectedDate.value ? format(selectedDate.value, {dateStyle: 'long', timeStyle: 'short', hour12: true}) : ''}
                onClick={() => show.value = !show.value}
              />
            </div>
            {renderCalendar()}
          </>
        )}
      </div>
    )
  }
})
