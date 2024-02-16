import { createAnimation } from "./createAnimation";

export const glow = createAnimation({
  animationTimingFunction: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
  backgroundColor: ['#FCFCFD', '#FFF6CD', 'FCFCFD'],
}, { duration: 2, offset: [0, 0.3, 1] });
