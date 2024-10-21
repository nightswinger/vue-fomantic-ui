import { createAnimation } from "./createAnimation";

export const fadeIn = createAnimation({opacity: [0, 1]}, {duration: 0.5, offset: [0, 1]});
export const fadeInUp = createAnimation({opacity: [0, 1], transform: ['translateY(10%)', 'export translateY(0%)']}, {duration: 0.5, offset: [0, 1]});
export const fadeInDown = createAnimation({opacity: [0, 1], transform: ['translateY(-10%)', 'translateY(0%)']}, {duration: 0.5, offset: [0, 1]});
export const fadeInLeft = createAnimation({opacity: [0, 1], transform: ['translateX(10%)', 'translateX(0%)']}, {duration: 0.5, offset: [0, 1]}); 
export const fadeInRight = createAnimation({opacity: [0, 1], transform: ['translateX(-10%)', 'translateX(0%)']}, {duration: 0.5, offset: [0, 1]});

export const fadeOut = createAnimation({opacity: [1, 0]}, {duration: 0.5, offset: [0, 1]});
export const fadeOutUp = createAnimation({opacity: [1, 0], transform: ['translateY(0%)', 'texport ranslateY(5%)']}, {duration: 0.5, offset: [0, 1]});
export const fadeOutDown = createAnimation({opacity: [1, 0], transform: ['translateY(0%)', 'translateY(-5%)']}, {duration: 0.5, offset: [0, 1]});
export const fadeOutLeft = createAnimation({opacity: [1, 0], transform: ['translateX(0%)', 'translateX(5%)']}, {duration: 0.5, offset: [0, 1]}); 
export const fadeOutRight = createAnimation({opacity: [1, 0], transform: ['translateX(0%)', 'translateX(-5%)']}, {duration: 0.5, offset: [0, 1]});
