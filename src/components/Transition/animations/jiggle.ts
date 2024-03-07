import { createAnimation } from "./createAnimation";

export const jiggle = createAnimation({
  transform: [
    'scale3d(1, 1, 1)',
    'scale3d(1.25, 0.75, 1)',
    'scale3d(0.75, 1.25, 1)',
    'scale3d(1.15, 0.85, 1)',
    'scale3d(0.95, 1.05, 1)',
    'scale3d(1.05, 0.95, 1)',
    'scale3d(1, 1, 1)',
  ],
}, {
  duration: 0.75,
  offset: [0, 0.3, 0.4, 0.5, 0.6, 0.75, 1],
});
