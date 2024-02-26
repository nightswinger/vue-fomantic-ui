import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue, computeKeyValue } from "../../utils/classNameHelper";

import { Icon } from "@/elements/Icon";

import { makeIconProps, useIcon } from "./composables/icon";
import { makeLabeledProps, useLabeled } from "./composables/labeled";
import { makeLoadingProps, useLoading } from "./composables/loading";

import type { PropType, VNode } from "vue";

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
    content: [String, Array] as PropType<string|VNode[]>,
    disabled: Boolean,
    facebook: Boolean,
    floated: String,
    fluid: Boolean,
    google: Boolean,
    linkedin: Boolean,
    instagram: Boolean,
    inverted: Boolean,
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
    youtube: Boolean,
    ...makeIconProps(),
    ...makeLabeledProps(),
    ...makeLoadingProps(),
  },
  setup(props) {
    const { iconClasses } = useIcon(props);
    const { labeledClasses } = useLabeled(props);
    const { loadingClasses } = useLoading(props);

    const classes = computed(() => {
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
        computeKeyOnly(props.linkedin, 'linkedin'),
        computeKeyOnly(props.instagram, 'instagram'),
        computeKeyOnly(props.inverted, 'inverted'),
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
        computeKeyOrKeyValue(props.animated, 'animated'),
        iconClasses.value,
        labeledClasses.value,
        loadingClasses.value,
        'button'
      )
    })

    return {
      classes
    }
  },
  render() {
    let elementType = this.as || 'div'

    return (
      <elementType
        class={this.classes}
        role="button"
      >
        {typeof this.icon === 'string' && <Icon name={this.icon} />}
        {this.content || this.$slots.default?.()}
      </elementType>
    )
  }
})
