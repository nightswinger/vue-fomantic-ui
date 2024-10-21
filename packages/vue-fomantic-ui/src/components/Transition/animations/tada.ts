import { createAnimation } from "./createAnimation";

export const tada = createAnimation({
  transform: [
    'scale(1)',
    'scale(0.9) rotate(-3deg)',
    'scale(0.9) rotate(-3deg)',
    'scale(1.1) rotate(3deg)',
    'scale(1.1) rotate(-3deg)',
    'scale(1.1) rotate(3deg)',
    'scale(1.1) rotate(-3deg)',
    'scale(1.1) rotate(3deg)',
    'scale(1.1) rotate(-3deg)',
    'scale(1.1) rotate(3deg)',
    'scale(1) rotate(0)'
  ],
}, {
  offset: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
});
