import { createAnimation } from "./createAnimation";

export const dropIn = createAnimation({
  transformOrigin: 'top center',
  animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)',
  transform: ['scale(0)', 'scale(1)'],
  opacity: [0, 1],
}, {duration: 0.4, offset: [0, 1],
});

export const dropOut = createAnimation({
  transformOrigin: 'top center',
  animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)',
  transform: ['scale(1)', 'scale(0)'],
  opacity: [1, 0],
}, {duration: 0.4, offset: [0, 1],
});
