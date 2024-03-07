import { computed } from "vue";
import { AnimationType, useAnimate } from "./useAnimate";

type UseTransitionProps = {
  animation: AnimationType;
  duration?: number;
};

export const useTransition = (props: UseTransitionProps) => {
  const [enter, leave] = useAnimate(props.animation);

  const seconds = computed(() => props.duration ? props.duration / 1000 : 0.5);

  const onEnter = computed(() => {
    return (el: Element, done: () => void) => {
      if (!enter) return done();

      const animation = enter(el, { duration: seconds.value });
      animation.play();
      animation.finished.then(done);
    };
  });

  const onLeave = computed(() => {
    return (el: Element, done: () => void) => {
      if (!leave) return done();

      const animation = leave(el, { duration: seconds.value });
      animation.play();
      animation.finished.then(done);
    };
  });

  return {
    onEnter,
    onLeave,
  };
};
