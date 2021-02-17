import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyValue } from "../../utils/classNameHelper";

export default defineComponent({
  name: 'SuiProgress',
  props: {
    active: Boolean,
    attached: String,
    color: String,
    disabled: Boolean,
    error: Boolean,
    indicating: Boolean,
    inverted: Boolean,
    label: String,
    percent: Number,
    progress: Boolean,
    size: String,
    success: Boolean,
    warning: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.indicating, 'indicating'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.success, 'success'),
        computeKeyOnly(props.warning, 'warning'),
        computeKeyValue(props.attached, 'attached'),
        'progress'
      )
    })

    return () => (
      <div
        class={computedClass.value}
        data-percent={props.percent}
      >
        <div class="bar" style={`width: ${props.percent}%;`}>
          {props.progress && <div class="progress">{props.percent}%</div>}
        </div>
        {props.label && <div class="label">{props.label}</div>}
      </div>
    )
  }
})