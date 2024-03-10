import { createAnimation } from "./createAnimation";

export const horizontalFlipIn = createAnimation({
  transform: ['perspective(2000px) rotateY(-90deg)', 'perspective(2000px) rotateY(0deg)'],
  opacity: [0, 1],
}, {
  duration: 0.6, offset: [0, 1],
});

export const horizontalFlipOut = createAnimation({
  transform: ['perspective(2000px) rotateY(0deg)', 'perspective(2000px) rotateY(90deg)'],
  opacity: [1, 0],
}, {
  duration: 0.6, offset: [0, 1],
});

export const verticalFlipIn = createAnimation({
  transform: ['perspective(2000px) rotateX(-90deg)', 'perspective(2000px) rotateX(0deg)'],
  opacity: [0, 1],
}, {
  duration: 0.6, offset: [0, 1],
});

export const verticalFlipOut = createAnimation({
  transform: ['perspective(2000px) rotateX(0deg)', 'perspective(2000px) rotateX(-90deg)'],
  opacity: [1, 0],
}, {
  duration: 0.6, offset: [0, 1],
});
