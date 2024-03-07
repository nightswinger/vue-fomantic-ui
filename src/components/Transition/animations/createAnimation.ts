import { AnimationOptionsWithOverrides, MotionKeyframesDefinition, animate } from "motion";

export const createAnimation = (
  keyframes: MotionKeyframesDefinition,
  options?: AnimationOptionsWithOverrides
) => {
  return (
    el: Element,
    {
      duration,
      keyframesOverride = {},
    }: {
      duration?: number | undefined;
      keyframesOverride?: MotionKeyframesDefinition | undefined;
    }
  ) => animate(
    el,
    {
      ...keyframes,
      ...keyframesOverride
    },
    {
      autoplay: false,
      ...options,
      ...{ duration }
    }
  );
};
