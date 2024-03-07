import { createAnimation } from "./createAnimation";

export const browseIn = createAnimation({
  transform: [
    'scale(0.8) translateZ(0px)',
    'scale(0.8) translateZ(0px)',
    'scale(1.05) translateZ(0px)',
    'scale(1) translateZ(0px)',
  ],
  opacity: [null, 0.7, 1, null],
  zIndex: [-1, -1, 999, 999],
}, {
  duration: 0.5, offset: [0, 0.1, 0.8, 1],
});
export const browseOutLeft = createAnimation({
  transform: [
    'translateX(0%) rotateY(0deg) rotateX(0deg)',
    'translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)',
    null,
    'translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)',
  ],
  opacity: [null, null, 1, 0],
  zIndex: [999, -1, null, -1],
}, {
  duration: 0.5, offset: [0, 0.5, 0.8, 1],
});
export const browseOutRight = createAnimation({
  transform: [
    'translateX(0%) rotateY(0deg) rotateX(0deg)',
    'translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)',
    null,
    'translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)',
  ],
  opacity: [null, null, 1, 0],
  zIndex: [999, 1, null, 1],
}, {
  duration: 0.5, offset: [0, 0.5, 0.8, 1],
});
