import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from "../../utils/classNameHelper";

import { Icon } from "@/elements/Icon";

export default defineComponent({
  name: 'SuiButton',
  props: {
    active: Boolean,
    animated: [Boolean, String],
    as: { type: String, default: 'button'},
    attached: String,
    basic: Boolean,
    circular: Boolean,
    color: String,
    compact: Boolean,
    disabled: Boolean,
    facebook: Boolean,
    floated: String,
    fluid: Boolean,
    google: Boolean,
    labeled: [Boolean, String],
    labelPosition: String,
    icon: [Boolean, String],
    linkedin: Boolean,
    instagram: Boolean,
    inverted: Boolean,
    loading: Boolean,
    negative: Boolean,
    positive: Boolean,
    primary: Boolean,
    secondary: Boolean,
    size: String,
    telegram: Boolean,
    tertiary: Boolean,
    toggle: Boolean,
    twitter: Boolean,
    vk: Boolean,
    whatsapp: Boolean,
    youtube: Boolean
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.active, 'active'),
        computeKeyOnly(props.basic, 'basic'),
        computeKeyOnly(props.circular, 'circular'),
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.disabled, 'disabled'),
        computeKeyOnly(props.facebook, 'facebook'),
        computeKeyOnly(props.fluid, 'fluid'),
        computeKeyOnly(props.google, 'google'),
        computeKeyOnly(!!props.icon, 'icon'),
        computeKeyOnly(props.linkedin, 'linkedin'),
        computeKeyOnly(props.instagram, 'instagram'),
        computeKeyOnly(props.inverted, 'inverted'),
        computeKeyOnly(props.loading, 'loading'),
        computeKeyOnly(props.negative, 'negative'),
        computeKeyOnly(props.positive, 'positive'),
        computeKeyOnly(props.primary, 'primary'),
        computeKeyOnly(props.secondary, 'secondary'),
        computeKeyOnly(props.telegram, 'telegram'),
        computeKeyOnly(props.tertiary, 'tertiary'),
        computeKeyOnly(props.toggle, 'toggle'),
        computeKeyOnly(props.twitter, 'twitter'),
        computeKeyOnly(props.vk, 'vk'),
        computeKeyOnly(props.whatsapp, 'whatsapp'),
        computeKeyOnly(props.youtube, 'youtube'),
        computeKeyValue(props.attached, 'attached'),
        computeKeyValue(props.floated, 'floated'),
        computeKeyValue(props.labelPosition, 'labeled'),
        computeKeyOrKeyValue(props.animated, 'animated'),
        computeKeyOrKeyValue(props.labeled, 'labeled'),
        'button'
      )
    })

    return {
      computedClass
    }
  },
  render() {
    let elementType = this.as || 'div'

    return (
      <elementType
        class={this.computedClass}
        role="button"
      >
        {typeof this.icon === 'string' && <Icon name={this.icon} />}
        {this.$slots.default?.()}  
      </elementType>
    )
  }
})
