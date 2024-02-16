import { createAnimation } from "./createAnimation";

const duration = 0.8;

const swingInX = {
  transform: [
    'perspective(1000px) rotateX(90deg)',
    'perspective(1000px) rotateX(-30deg)',
    'perspective(1000px) rotateX(15deg)',
    'perspective(1000px) rotateX(-7.5deg)',
    'perspective(1000px) rotateX(0deg)',
  ],
  opacity: [0, 1, null, null, null],
  offset: [0, 0.4, 0.6, 0.8, 1],
};

const swingInY = {
  transform: [
    'perspective(1000px) rotateY(-90deg)',
    'perspective(1000px) rotateY(30deg)',
    'perspective(1000px) rotateY(-17.5deg)',
    'perspective(1000px) rotateY(7.5deg)',
    'perspective(1000px) rotateY(0deg)',
  ],
  opacity: [0, 1, null, null, null],
  offset: [0, 0.4, 0.6, 0.8, 1],
};

const swingOutX = {
  transform: [
    'perspective(1000px) rotateX(0deg)',
    'perspective(1000px) rotateX(-7.5deg)',
    'perspective(1000px) rotateX(17.5deg)',
    'perspective(1000px) rotateX(-30deg)',
    'perspective(1000px) rotateX(90deg)',
  ],
  opacity: [null, null, null, 1, 0],
  offset: [0, 0.4, 0.6, 0.8, 1],
};

const swingOutY = {
  transform: [
    'perspective(1000px) rotateY(0deg)',
    'perspective(1000px) rotateY(7.5deg)',
    'perspective(1000px) rotateY(-10deg)',
    'perspective(1000px) rotateY(30deg)',
    'perspective(1000px) rotateY(-90deg)',
  ],
  opacity: [null, null, null, 1, 0],
  offset: [0, 0.4, 0.6, 0.8, 1],
};

export const swingInDown = createAnimation({
  transformOrigin: 'top center',
  transform: swingInX.transform,
  opacity: swingInX.opacity,
}, {
  duration, offset: swingInX.offset,
});

export const swingInUp = createAnimation({
  transformOrigin: 'bottom center',
  transform: swingInX.transform,
  opacity: swingInX.opacity,
}, {
  duration, offset: swingInX.offset,
});

export const swingInLeft = createAnimation({
  transformOrigin: 'center right',
  transform: swingInY.transform,
  opacity: swingInY.opacity,
}, {
  duration, offset: swingInY.offset,
});

export const swingInRight = createAnimation({
  transformOrigin: 'center left',
  transform: swingInY.transform,
  opacity: swingInY.opacity,
}, {
  duration, offset: swingInY.offset,
});

export const swingOutDown = createAnimation({
  transformOrigin: 'top center',
  transform: swingOutX.transform,
  opacity: swingOutX.opacity,
}, {
  duration, offset: swingOutX.offset,
});

export const swingOutUp = createAnimation({
  transformOrigin: 'bottom center',
  transform: swingOutX.transform,
  opacity: swingOutX.opacity,
}, {
  duration, offset: swingOutX.offset,
});

export const swingOutLeft = createAnimation({
  transformOrigin: 'center right',
  transform: swingOutY.transform,
  opacity: swingOutY.opacity,
}, {
  duration, offset: swingOutY.offset,
});

export const swingOutRight = createAnimation({
  transformOrigin: 'center left',
  transform: swingOutY.transform,
  opacity: swingOutY.opacity,
}, {
  duration, offset: swingOutY.offset,
});
