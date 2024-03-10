import { createAnimation } from "./createAnimation";

export const bounce = createAnimation({
  transform: [
    'translateY(0)',
    'translateY(0)',
    'translateY(-30px)',
    'translateY(0)',
    'translateY(-15px)',
    'translateY(0)',
    'translateY(0)',
  ],
}, {
  offset: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
});
