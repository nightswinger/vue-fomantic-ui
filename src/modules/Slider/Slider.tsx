import clsx from "clsx";
import { computed, defineComponent, Ref, ref } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";
import DomHandler from "../../utils/domHandler";

export default defineComponent({
  name: 'SuiSlider',
  emits: ['change', 'slideend', 'update:modelValue'],
  props: {
    color: String,
    disabled: Boolean,
    inverted: Boolean,
    labeled: [Boolean, String],
    labels: Array,
    max: { type: Number, default: 10 },
    min: { type: Number, default: 0 },
    modelValue: { type: [Number, Array], default: 0 },
    range: Boolean,
    reversed: Boolean,
    size: String,
    step: { type: Number, default: 1 },
    vertical: Boolean,
    verticalHeight: { type: [Number, String], default: 200 }
  },
  setup(props, { emit }) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.reversed, 'reversed'),
        computeKeyOnly(props.vertical, 'vertical'),
        computeKeyOrKeyValue(props.labeled, 'labeled'),
        'slider'
      )
    })

    const trackStartPosPercent = () => 100 * ((props.modelValue as number[])[0] - props.min) / (props.max - props.min)
    const trackEndPosPercent = () => 100 * ((props.modelValue as number[])[1] - props.min) / (props.max - props.min)

    const trackFillStyle = computed(() => {
      if (props.range) {
        if (props.reversed && !props.vertical) {
          return { right: trackStartPosPercent() + '%', width: (trackEndPosPercent() - trackStartPosPercent() + '%') }
        }

        if (props.vertical) {
          if (props.reversed) {
            return {
              bottom: trackStartPosPercent() + '%', height: (trackEndPosPercent() - trackStartPosPercent() + '%')
            }
          }
          return { top: trackStartPosPercent() + '%', height: (trackEndPosPercent() - trackStartPosPercent() + '%') }
        }

        return { left: trackStartPosPercent() + '%', width: (trackEndPosPercent() - trackStartPosPercent() + '%') }
      }

      let value = (props.modelValue as number) > props.max ? props.max : (props.modelValue as number)

      if (props.reversed) {
        if (props.vertical) {
          return {
            bottom: '0%',
            top: `${100 - (value - props.min) / (props.max - props.min) * 100}%`
          }
        }

        return {
          right: '0%',
          left: `${100 - (value - props.min) / (props.max - props.min) * 100}%`
        }
      }

      if (props.vertical) {
        return {
          top: '0%',
          bottom: `${100 - (value - props.min) / (props.max - props.min) * 100}%`
        }
      }

      return {
        left: '0%',
        right: `${100 - (value - props.min) / (props.max - props.min) * 100}%`
      }
    })

    const thumbStyle = computed(() => {
      let value = props.range
        ? (props.modelValue as number[])[0]
        : props.modelValue as number > props.max ? props.max : props.modelValue as number

      if (!props.reversed && props.vertical) {
        return {
          top: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`,
          bottom: 'auto'
        }
      }

      if (props.reversed && props.vertical) {
        return {
          top: 'auto',
          bottom: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`,
        }
      }

      if (props.reversed && !props.vertical) {
        return {
          left: 'auto',
          right: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`
        }
      }

      return {
        left: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`,
        right: 'auto'
      }
    })

    const thumbSecondStyle = computed(() => {
      let value = (props.modelValue as number[])[1] > props.max ? props.max : (props.modelValue as number[])[1]

      if (props.reversed && !props.vertical) {
        return {
          left: 'auto',
          right: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`
        }
      } else if (props.vertical) {
        if (props.reversed) {
          return {
            top: 'auto',
            bottom: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`,
          }
        }
        return {
          top: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`,
          bottom: 'auto'
        }
      }
 
      return {
        left: `calc(${(value - props.min) * 100 / (props.max - props.min)}% - 10.5px)`,
        right: 'auto'
      }
    })

    const labels = computed(() => {
      if (!props.labels) {
        return [...Array(props.max - props.min + 1)].map((_, i) => (i * props.step) + props.min)
      }

      return props.labels
    })

    const gapRatio = () => {
      let gapRatio = 1

      let numLabels = getNumLabels()
      let trackLength = (props.vertical ? trackRef.value?.clientHeight : trackRef.value?.clientWidth) || 0
      let gapCounter = 1

      if (trackLength > 0) {
        while ((trackLength / numLabels) * gapCounter < 100) {
          if (!(numLabels % gapCounter)) gapRatio = gapCounter

          gapCounter += 1
        }
      }

      return gapRatio
    }

    const getNumLabels = () => Math.round((props.max - props.min) / props.step)

    const rootRef: Ref<HTMLElement | null> = ref(null)
    const trackRef: Ref<HTMLElement | null> = ref(null)
    const initX = ref(0)
    const initY = ref(0)
    const barWidth = ref(0)
    const barHeight = ref(0)

    const updateDomData = () => {
      if (!rootRef.value) return

      let rect = rootRef.value.getBoundingClientRect()

      initX.value = rect.left + DomHandler.getWindowScrollLeft()
      initY.value = rect.top + DomHandler.getWindowScrollTop()
      barWidth.value = rootRef.value.offsetWidth
      barHeight.value = rootRef.value.offsetHeight
    }

    const rangeIndex = ref(0)

    const setValue = (event: any) => {
      let { pageX, pageY } = event.touches ? event.touches[0] : event
      let handleValue
      let newValue

      if (props.vertical) {
        handleValue = (((initY.value + barHeight.value) - pageY) * 100) / barHeight.value
      } else {
        handleValue = ((pageX - initX.value) * 100) / barWidth.value
      }

      newValue = (props.max - props.min) * (handleValue / 100) + props.min

      const oldValue = props.range ? (props.modelValue as number[])[rangeIndex.value] : ((props.modelValue as number) || 0)
      newValue = oldValue + Math.round((newValue / props.step) - (oldValue / props.step)) * props.step

      if (props.reversed) newValue = props.max - newValue + props.min
      if (props.vertical) newValue = props.max - newValue + props.min

      updateModel(newValue)
    }

    const updateModel = (value: number) => {
      let newValue = value
      let modelValue

      if (props.range) {
        modelValue = props.modelValue ? [...(props.modelValue as number[])] : []

        if (rangeIndex.value === 0) {
          let maxValue = props.modelValue ? (props.modelValue as number[])[1] : props.max

          if (newValue < props.min) newValue = props.min
          else if (newValue > maxValue) newValue = maxValue

          modelValue[0] = newValue
          modelValue[1] = modelValue[1] || props.max
        } else {
          let minValue = props.modelValue ? (props.modelValue as number[])[0] : props.min

          if (newValue > props.max) newValue = props.max
          else if (newValue < minValue) newValue = minValue

          modelValue[0] = modelValue[0] || props.min
          modelValue[1] = newValue
        }
      } else {
        if (newValue < props.min) newValue = props.min
        if (newValue > props.max) newValue = props.max

        modelValue = newValue
      }

      emit('update:modelValue', modelValue)
      emit('change', modelValue)
    }

    const dragging = ref(false)
    const updateDragging = (bool: boolean) => dragging.value = bool

    const onDragStart = (event: Event, index = 0) => {
      updateDragging(true)
      updateDomData()
      rangeIndex.value = index

      event.preventDefault()
    }

    const onDragEnd = (event: Event) => {
      if (dragging.value) {
        updateDragging(false)

        document.removeEventListener('mousemove', onDrag)
        emit('slideend', { event, value: props.modelValue })
      }
    }

    const onDrag = (event: MouseEvent | TouchEvent) => {
      if (dragging.value) {
        setValue(event)
        event?.preventDefault()
      }
    }

    const onMouseDown = (event: MouseEvent, index = 0) => {
      if (props.disabled) return

      onDragStart(event, index)
      document.addEventListener('mousemove', onDrag)
      document.addEventListener('mouseup', onDragEnd)
      event.preventDefault()
    }

    const onKeyDown = (event: KeyboardEvent, index = 0) => {
      rangeIndex.value = index
      switch (event.code) {
        case "ArrowUp":
          if (props.vertical) props.reversed ? increment() : decrement()
          event.preventDefault()
          break
        case "ArrowDown":
          if (props.vertical) props.reversed ? decrement() : increment()
          event.preventDefault()
          break
        case "ArrowRight":
          props.reversed ? decrement() : increment()
          event.preventDefault()
          break
        case "ArrowLeft":
          props.reversed ? increment() : decrement()
          event.preventDefault()
          break
        default:
          break
      }
    }

    const increment = () => {
      let newValue = 0

      if (props.range) newValue = (props.modelValue as number[])[rangeIndex.value] + props.step
      else newValue = props.modelValue as number + props.step

      updateModel(newValue)
    }

    const decrement = () => {
      let newValue = 0

      if (props.range) newValue = (props.modelValue as number[])[rangeIndex.value] - props.step
      else newValue = props.modelValue as number - props.step

      updateModel(newValue)
    }

    const onClick = (event: any) => {
      if (props.disabled) return

      if (!DomHandler.hasClass(event.target, 'thumb')) {
        if (props.range) {
          let clickPosition = (props.vertical ? event.offsetY / event.target.clientHeight : event.offsetX / event.target.clientWidth) * 100
          let centerPosition = (trackStartPosPercent() + trackEndPosPercent()) / 2

          if (clickPosition < centerPosition) rangeIndex.value = props.reversed ? 1 : 0
          else rangeIndex.value = props.reversed ? 0 : 1
        }

        updateDomData()
        setValue(event)
      }
    }

    return () => (
      <div
        ref={(ref) => rootRef.value = ref as HTMLElement}
        class={computedClass.value}
        style={props.vertical ? `height: ${props.verticalHeight}px;` : ''}            
      >
        <div class="inner" onClick={onClick}>
          <div class="track" ref={(ref) => trackRef.value = ref as HTMLElement}></div>
          <div class="track-fill" style={trackFillStyle.value}></div>
          <div class="thumb"
            style={thumbStyle.value}
            onMousedown={(event) => onMouseDown(event)}
            onTouchstart={(event) => onDragStart(event)}
            onTouchmove={(event) => onDrag(event)}
            onTouchend={(event) => onDragEnd(event)}
            onKeydown={(event) => onKeyDown(event)}
            tabindex={0}
          ></div>
          {props.range && 
            <div
              class="thumb second"
              style={thumbSecondStyle.value}
              onMousedown={(event) => onMouseDown(event, 1)}
              onTouchstart={(event) => onDragStart(event, 1)}
              onTouchmove={(event) => onDrag(event)}
              onTouchend={(event) => onDragEnd(event)}
              onKeydown={(event) => onKeyDown(event, 1)}
              tabindex={0}
            >
            </div>}
        </div>
        {props.labeled &&
          <ul class="auto labels">
            {[...Array(getNumLabels()+1)].map((_, i) => {
              let ratio = i / (getNumLabels())
              if (!(i % gapRatio())) {
                return <li
                  class="label"
                  style={`${props.vertical
                    ? props.reversed ? 'bottom' : 'top'
                    : 'left'}: calc(((100% - 7px) - 7px) * ${ratio} + 7px);`
                  }
                >
                  {props.reversed && !props.vertical
                    ? props.labels ? props.labels[getNumLabels() - i] : labels.value[getNumLabels() - i]
                    : props.labels ? props.labels[i] : labels.value[i]}
                </li>
              } else {
                return <li
                  class="halftick label"
                  style={`${props.vertical
                    ? props.reversed ? 'bottom' : 'top'
                    : 'left'}: calc(((100% - 7px) - 7px) * ${ratio} + 7px);`
                  }
                ></li>
              }
            })}
          </ul>
        }
      </div>
    )
  }
})