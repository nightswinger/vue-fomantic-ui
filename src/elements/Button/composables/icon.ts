import clsx from "clsx";
import { computed } from "vue";

import type { PropType, VNode } from "vue";

export interface IconProps {
  icon?: string | boolean;
  content?: string | VNode[];
  labeled?: string | boolean;
};

export const makeIconProps = () => {
  return {
    icon: [Boolean, String] as PropType<string | boolean>,
  };
};

export const useIcon = (props: IconProps) => {
  const iconClasses = computed(() => {
    if (typeof props.icon === 'boolean' && props.icon) return 'icon';
    if (props.labeled && props.icon) return 'icon';

    return clsx({ icon: props.icon && !props.content });
  });

  return { iconClasses };
};
