import { createAnimation } from "./createAnimation";

export const flyIn = createAnimation({
  transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  transform: [
    'scale3d(.3, .3, .3)',
    'scale3d(1.1, 1.1, 1.1)',
    'scale3d(.9, .9, .9)',
    'scale3d(1.03, 1.03, 1.03)',
    'scale3d(.97, .97, .97)',
    'scale3d(1, 1, 1)',
  ],
  opacity: [0, null, null, 1, null, 1],
}, {
  duration: 0.6, offset: [0, 0.2, 0.4, 0.6, 0.8, 1],
});

export const flyInUp = createAnimation({
  transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  transform: [
    'translate3d(0, 1500px, 0',
    'translate3d(0, -20px, 0)',
    'translate3d(0, 10px, 0)',
    'translate3d(0, -5px, 0)',
    'translate3d(0, 0, 0)',
  ],
  opacity: [0, 1, null, null, null],
}, {
  duration: 0.6, offset: [0, 0.6, 0.75, 0.9, 1],
});

export const flyInDown = createAnimation({
  transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  transform: [
    'translate3d(0, -1500px, 0',
    'translate3d(0, 25px, 0)',
    'translate3d(0, -10px, 0)',
    'translate3d(0, 5px, 0)',
    'none',
  ],
  opacity: [0, 1, null, null, null],
}, {
  duration: 0.6, offset: [0, 0.6, 0.75, 0.9, 1],
});

export const flyInLeft = createAnimation({
  transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  transform: [
    'translate3d(1500px, 0, 0',
    'translate3d(-25px, 0, 0)',
    'translate3d(10px, 0, 0)',
    'translate3d(-5px, 0, 0)',
    'none',
  ],
  opacity: [0, 1, null, null, null],
}, {
  duration: 0.6, offset: [0, 0.6, 0.75, 0.9, 1],
});

export const flyInRight = createAnimation({
  transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  transform: [
    'translate3d(-1500px, 0, 0',
    'translate3d(25px, 0, 0)',
    'translate3d(-10px, 0, 0)',
    'translate3d(5px, 0, 0)',
    'none',
  ],
  opacity: [0, 1, null, null, null],
}, {
  duration: 0.6, offset: [0, 0.6, 0.75, 0.9, 1],
});

export const flyOut = createAnimation({
  transform: [
    'scale3d(.9, .9, .9)',
    'scale3d(1.1, 1.1, 1.1)',
    'scale3d(1.1, 1.1, 1.1)',
    'scale3d(.3, .3, .3)',
  ],
  opacity: [null, 1, 1, 0],
}, {
  duration: 0.6, offset: [0.2, 0.5, 0.55, 1],
});

export const flyOutUp = createAnimation({
  transform: [
    'translate3d(0, 10px, 0)',
    'translate3d(0, -20px, 0)',
    'translate3d(0, -20px, 0)',
    'translate3d(0, 2000px, 0)',
  ],
  opacity: [null, 1, 1, 0],
}, {
  duration: 0.6, offset: [0.2, 0.4, 0.45, 1],
});

export const flyOutDown = createAnimation({
  transform: [
    'translate3d(0, -10px, 0)',
    'translate3d(0, 20px, 0)',
    'translate3d(0, 20px, 0)',
    'translate3d(0, -2000px, 0)',
  ],
  opacity: [null, 1, 1, 0],
}, {
  duration: 0.6, offset: [0.2, 0.4, 0.45, 1],
});

export const flyOutLeft = createAnimation({
  transform: [
    'translate3d(-20px, 0, 0)',
    'translate3d(2000px, 0, 0)',
  ],
  opacity: [1, 0],
}, {
  duration: 0.6, offset: [0.2, 1],
});

export const flyOutRight = createAnimation({
  transform: [
    'translate3d(20px, 0, 0)',
    'translate3d(-2000px, 0, 0)',
  ],
  opacity: [1, 0],
}, {
  duration: 0.6, offset: [0.2, 1],
});
