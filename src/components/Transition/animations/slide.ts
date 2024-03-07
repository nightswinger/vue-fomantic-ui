import { createAnimation } from "./createAnimation";

const slideInY = { transform: ['scaleY(0)', 'scaleY(1)'], opacity: [0, 1] };
const slideInX = { transform: ['scaleX(0)', 'scaleX(1)'], opacity: [0, 1] };
const slideOutY = { transform: ['scaleY(1)', 'scaleY(0)'], opacity: [1, 0] };
const slideOutX = { transform: ['scaleX(1)', 'scaleX(0)'], opacity: [1, 0] };

export const slideIn = createAnimation({
  transformOrigin: 'top center',
  ...slideInY,
}, {
  offset: [0, 1]
});

export const slideInUp = createAnimation({
  transformOrigin: 'bottom center',
  ...slideInY,
}, {
  offset: [0, 1]
});

export const slideInLeft = createAnimation({
  transformOrigin: 'center right',
  ...slideInX,
}, {
  offset: [0, 1]
});

export const slideInRight = createAnimation({
  transformOrigin: 'center left',
  ...slideInX,
}, {
  offset: [0, 1]
});

export const slideOut = createAnimation({
  transformOrigin: 'top center',
  ...slideOutY,
}, {
  offset: [0, 1]
});

export const slideOutUp = createAnimation({
  transformOrigin: 'bottom center',
  ...slideOutY,
}, {
  offset: [0, 1]
});

export const slideOutLeft = createAnimation({
  transformOrigin: 'center right',
  ...slideOutX,
}, {
  offset: [0, 1]
});

export const slideOutRight = createAnimation({
  transformOrigin: 'center left',
  ...slideOutX,
}, {
  offset: [0, 1]
});
