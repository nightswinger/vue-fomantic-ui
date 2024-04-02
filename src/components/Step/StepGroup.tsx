import clsx from "clsx"
import { computed, defineComponent } from "vue"

import { computeKeyOnly, computeKeyValue } from "@/utils/classNameHelper"

import Step from "./Step"

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

export default defineComponent({
  props: {
    activeStep: {
      type: Number,
      default: 0,
    },
    attached: String,
    evenlyDivided: Boolean,
    fluid: Boolean,
    inverted: Boolean,
    noCompleted: Boolean,
    ordered: Boolean,
    size: String,
    stackable: String,
    steps: Array as () => Array<{ title: string, description?: string, icon?: string }>,
    unstackable: Boolean,
    vertical: Boolean,
    widths: Number,
  },
  setup(props, { slots }) {
    const {
      widths
    } = props

    const classes = computed(() => {
      return clsx(
        'ui',
        widths && numbers[widths - 1],
        props.steps && props.evenlyDivided && numbers[props.steps.length - 1],
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

    return () => {
      if (!props.steps) {
        return (
          <div class={classes.value}>
            {slots.default?.()}
          </div>
        )
      }

      return (
        <div class={classes.value}>
          {
            props.steps.map((step, index) => {
              return (
                <Step
                  key={index}
                  active={index === props.activeStep}
                  completed={props.noCompleted ? false : index < props.activeStep}
                  disabled={index > props.activeStep}
                  {...step}
                />
              )
            })
          }
        </div>
      )
    }
  },
})
