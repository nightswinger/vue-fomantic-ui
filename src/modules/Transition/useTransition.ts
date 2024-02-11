import clsx from "clsx";
import { ComputedRef, Ref, computed, ref, watch } from "vue";

import { computeKeyOnly } from "../../utils/classNameHelper";

type TransitionState = 'enter' | 'entering' | 'leave' | 'leaving';

const directionalAnimation = [
  'browse',
  'browse right',
  'drop',
  'fade',
  'fade up',
  'fade down',
  'fade left',
  'fade right',
  'fly up',
  'fly down',
  'fly left',
  'fly right',
  'horizontal flip',
  'vertical flip',
  'scale',
  'slide up',
  'slide down',
  'slide left',
  'slide right',
  'swing up',
  'swing down',
  'swing left',
  'swing right',
  'zoom',
] as const;
const staticAnimation = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'] as const;

export type AnimationType = typeof directionalAnimation[number] | typeof staticAnimation[number];

type TransitionProps = {
  animation: AnimationType;
  duration: number;
  visible?: boolean;
};

type UseTransitionReturn = {
  state: Ref<TransitionState>;
  classes: ComputedRef<string>;
  styles: ComputedRef<Record<string, string>>;
};

export function useTransition(props: TransitionProps): UseTransitionReturn {
  const state = ref<TransitionState>(props.visible ? 'enter' : 'leave');
  const setState = (value: TransitionState) => state.value = value;

  const timerId = ref<number | null>(null);

  watch(() => props.visible, (newValue) => {
    state.value = newValue ? 'entering' : 'leaving';
    timerId.value && clearTimeout(timerId.value);
  });

  watch(() => state.value, (newValue) => {
    if (newValue === 'enter' || newValue === 'leave') return;

    if (props.duration > 0) {
      return timerId.value = setTimeout(() => setState(newValue === 'entering' ? 'enter' : 'leave'), props.duration);
    }
    return setState(newValue === 'entering' ? 'enter' : 'leave');
  });

  const classes = computed(() => {
    if (staticAnimation.includes(props.animation as typeof staticAnimation[number])) {
      return clsx(
        computeKeyOnly(state.value === 'entering' || state.value === 'leaving', 'animating transition'),
        props.animation,
      );
    }

    return clsx(
      computeKeyOnly(state.value === 'entering' || state.value === 'leaving', 'animating'),
      computeKeyOnly(state.value === 'entering', 'in'),
      computeKeyOnly(state.value === 'leaving', 'out'),
      computeKeyOnly(state.value === 'entering' || state.value === 'leaving', props.animation),
      computeKeyOnly(state.value !== 'leave', 'visible'),
      computeKeyOnly(state.value === 'leave', 'hidden'),
      'transition',
    );
  });

  const styles = computed(() => ({ animationDuration: `${props.duration}ms` }));

  return {
    state,
    classes,
    styles,
  };
};
