import { createAnimation } from "./createAnimation";

export const zoomIn = createAnimation({
  transform: ['scale(0)', 'scale(1)'],
  opacity: [1, 1],
}, {
  offset: [0, 1],
});

export const zoomOut = createAnimation({
  transform: ['scale(1)', 'scale(0)'],
  opacity: [1, 1],
}, {
  offset: [0, 1],
});
