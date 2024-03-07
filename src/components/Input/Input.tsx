import clsx from 'clsx'
import { computed, defineComponent } from 'vue'
import { computeKeyOnly } from '../../utils/classNameHelper'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Label } from '../Label'

export default defineComponent({
  name: 'SuiInput',
  emits: ['update:modelValue'],
  props: {
    action: String,
    disabled: Boolean,
    error: Boolean,
    fluid: Boolean,
    focus: Boolean,
    icon: String,
    iconPosition: String,
    inverted: Boolean,
    label: String,
    labeled: Boolean,
    loading: Boolean,
    modelValue: String,
    placeholder: String,
    size: String,
    transparent: Boolean,
    type: String
  },
  setup (props, { emit }) {
    const hasIcon = computed(() => {
      return ((typeof props.icon === 'string') || props.loading)
    })

    const hasLabel = computed(() => {
      return (!!props.label || props.labeled)
    })

    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.size,
        props.action && 'action',
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.focus, 'focus'),
        props.iconPosition,
        computeKeyOnly(hasIcon.value, 'icon'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.loading, 'loading'),
        computeKeyOnly(props.transparent, 'transparent'),
        computeKeyOnly(hasLabel.value, 'labeled'),
        'input'
      )
    })

    const onInput = (event: any) => emit('update:modelValue', event.target.value)

    return () => (
      <div class={computedClass.value}>
        {props.label && <Label>{props.label}</Label>}
        <input
          type={props.type || 'text'}
          placeholder={props.placeholder}
          value={props.modelValue}
          onInput={(event) => onInput(event)}
        />
        {hasIcon.value && <Icon name={(props.icon || 'spinner')} />}
        {props.action && <Button>{props.action}</Button>}
      </div>
    )
  }
})
