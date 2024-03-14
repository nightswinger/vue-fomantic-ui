import clsx from "clsx";
import { computed, defineComponent } from "vue";

import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";

import { makeAttachedProps, useAttached } from "../../composables/attached";
import { makeColorProps, useColor } from "../../composables/color";

import type { PropType } from 'vue';

export default defineComponent({
  props: {
    active: Boolean,
    disabled: Boolean,
    error: Boolean,
    indeterminate: [Boolean, String] as PropType<boolean | 'filling' | 'sliding' | 'swinging'| 'slow' | 'fast'>,
    indicating: Boolean,
    inverted: Boolean,
    label: String,
    percent: Number,
    progress: [Boolean, String],
    size: String,
    success: Boolean,
    warning: Boolean,

    ...makeAttachedProps(),
    ...makeColorProps(),
  },
  setup(props) {
    const { attachedClasses } = useAttached(props);
    const { colorClasses } = useColor(props);

    const classes = computed(() => {
      return clsx(
        'ui',
        colorClasses.value,
        props.size,
        computeKeyOnly(props.active || props.indicating, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.indicating, 'indicating'),
        computeKeyOnly(props.success, 'success'),
        computeKeyOnly(props.warning, 'warning'),
        computeKeyOrKeyValue(props.indeterminate, 'indeterminate'),
        attachedClasses.value,
        'progress'
      )
    })

    const barClass = computed(() => {
      return clsx(
        computeKeyOrKeyValue(props.progress, 'progress')
      )
    })

    const barStyle = computed(() => {
      if (props.progress !== 'centered') return {}

      return { right: 0 }
    })

    return () => (
      <div
        class={classes.value}
        data-percent={props.percent}
      >
        <div class="bar" style={`width: ${props.percent}%; transition-duration: 300ms;`}>
          {
            props.progress &&
            <div class={barClass.value} style={barStyle.value}>
              {`${props.percent}%`}
            </div>
          }
        </div>
        {props.label && <div class="label">{props.label}</div>}
      </div>
    )
  }
})