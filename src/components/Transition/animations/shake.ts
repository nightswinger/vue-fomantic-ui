import { createAnimation } from "./createAnimation";

export const shake = createAnimation({
  transform: [
    'translateX(0)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(0)',
  ],
});
