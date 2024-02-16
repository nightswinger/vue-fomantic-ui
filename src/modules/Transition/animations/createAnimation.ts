import { AnimationOptionsWithOverrides, MotionKeyframesDefinition, animate } from "motion";

export const createAnimation = (
  keyframes: MotionKeyframesDefinition,
  options?: AnimationOptionsWithOverrides
) => {
  return (el: Element, { duration }: { duration?: number | undefined }) => animate(el, keyframes, { autoplay: false, ...options, ...{ duration } });
};
