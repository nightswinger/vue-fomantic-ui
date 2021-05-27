import { computed, reactive, Ref, ref } from 'vue'

const getFirstDayOfMonthIndex = (year: number, month: number) => {
  let day = new Date()
  day.setDate(1)
  day.setMonth(month)
  day.setFullYear(year)

  let dayIndex = day.getDay()

  return dayIndex >= 7 ? dayIndex - 7 : dayIndex
}

const getDaysCountInPrevMonth = (year: number, month: number) => {
  let prevMonth
  let prevYear

  if (month === 0) {
    prevMonth = 11
    prevYear = year - 1
  } else {
    prevMonth = month - 1
    prevYear = year
  }

  return 32 - new Date(prevYear, prevMonth, 32).getDate()
}

const getMonthText = (i: number) => {
  return ["January","February","March","April","May","June","July","August","September","October","November","December"][i]
}

export function useCalendar() {
  const visible = ref(false)
  const updateVisible = (bool = false) => visible.value = bool

  const date = new Date()

  function formatCalendarDate(date: Date) {
    if (!date) return

    let year = date.getFullYear()
    let monthText = getMonthText(date.getMonth())
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()

    let hourStr = hour > 11 ? 'PM' : 'AM'
    hour = hour % 12
    if (hour === 0) {
      hour = 12
      hourStr = 'AM'
    }
    let minuteStr = minute.toString().padStart(2, '0')

    return `${monthText} ${day}, ${year} ${hour}:${minuteStr} ${hourStr}`
  }

  const selectType = ref('default')
  function updateSelectType(type: string) {
    selectType.value = type
  }
  const selectMode = ref('day')
  function updateSelectMode(mode: string) {
    selectMode.value = mode
  }

  const selectedDate: Ref<Date|null> = ref(null)
  const setSelectedDate = (newDate: Date) => {
    selectedDate.value = newDate
  }

  const state = reactive({
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  })
  const set = (value: number, key: string) => {
    switch (key) {
      case 'years':
        state.year = value
        break
      case 'months':
        state.month = value
        break
      case 'days':
        state.day = value
        break
      case 'hours':
        state.hour = value
        break
      case 'minutes':
        state.minute = value
    }
  }
  const add = (value: number, key: string) => {
    let newDate = new Date(state.year, state.month, state.day, state.hour)
    switch (key) {
      case 'years':
        newDate.setFullYear(newDate.getFullYear() + value)
        break
      case 'months':
        newDate.setMonth(newDate.getMonth() + value)
        break
      case 'days':
        newDate.setDate(newDate.getDate() + value)
        break
      case 'hours':
        newDate.setHours(newDate.getHours() + value)
        break
      default:
        break
    }
    state.year = newDate.getFullYear()
    state.month = newDate.getMonth()
    state.day = newDate.getDate()
    state.hour = newDate.getHours()
  }
  const subtract = (value: number, key: string) => {
    let newDate = new Date(state.year, state.month, state.day, state.hour)
    switch (key) {
      case 'years':
        newDate.setFullYear(newDate.getFullYear() - value)
        break
      case 'months':
        newDate.setMonth(newDate.getMonth() - value)
        break
      case 'days':
        newDate.setDate(newDate.getDate() - value)
        break
      case 'hours':
        newDate.setHours(newDate.getHours() - value)
        break
      default:
        break
    }
    state.year = newDate.getFullYear()
    state.month = newDate.getMonth()
    state.day = newDate.getDate()
    state.hour = newDate.getHours()
  }
  const formatDate = (format = 'default') => {
    if (format === 'date') return `${getMonthText(state.month)} ${state.year}`

    return `${getMonthText(state.month)} ${state.day}, ${state.year}`
  }

  const calendarDays = computed(() => {
    let month = state.month
    let year = state.year

    if (month > 11) {
      month = month % 11 - 1
      year += 1
    }

    let dates = []
    let firstDay = getFirstDayOfMonthIndex(year, month)
    let daysLength = 32 - new Date(year, month, 32).getDate()
    let prevMonthDaysLength = getDaysCountInPrevMonth(year, month)

    let dayNumber = 1
    for (let i = 0; i < 6; i++) {
      let week = []

      if (i === 0) {
        for (let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
          let prevMonth = month === 0 ? 11 : month - 1
          let prevMonthYear = month === 0 ? year - 1 : year
          week.push({
            day: j,
            month: prevMonth,
            year: prevMonthYear,
            currentMonth: false
          })
        }

        let remainingDaysLength = 7 - week.length
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({day: dayNumber, month, year, currentMonth: true})
          dayNumber++
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNumber > daysLength) {
            let nextMonth = month === 11 ? 0 : month + 1
            let nextMonthYear = month === 11 ? year + 1 : year
            week.push({
              day: dayNumber - daysLength,
              month: nextMonth,
              year: nextMonthYear,
              currentMonth: false
            })
          } else {
            week.push({day: dayNumber, month, year, currentMonth: true})
          }
          dayNumber++
        }
      }
      dates.push(week)
    }

    return dates
  })

  return {
    visible,
    updateVisible,
    calendarDays,
    formatCalendarDate,
    selectMode,
    updateSelectMode,
    selectType,
    selectedDate,
    setSelectedDate,
    state,
    set,
    add,
    subtract,
    formatDate
  }
}

export type useCalendar = ReturnType<typeof useCalendar>
