import { createAnimation } from "./createAnimation";

export const pulse = createAnimation({
  transform: ['scale(1)', 'scale(0.9)', 'scale(1)'],
  opacity: [1, 0.7, 1],
}, {
  offset: [0, 0.5, 1],
});
