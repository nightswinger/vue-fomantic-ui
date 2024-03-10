import { createAnimation } from "./createAnimation";

export const scaleIn = createAnimation({
  transform: ['scale(0.8)', 'scale(1)'],
  opacity: [0, 1],
}, {
  duration: 0.5, offset: [0, 1],
});

export const scaleOut = createAnimation({
  transform: ['scale(1)', 'scale(0.9)'],
  opacity: [1, 0],
}, {
  duration: 0.5, offset: [0, 1],
});
