import { createAnimation } from "./createAnimation";

export const flash = createAnimation({
  opacity: [1, 0, 1, 0, 1],
}, {
  offset: [0, 0.25, 0.5, 0.75, 1],
});
