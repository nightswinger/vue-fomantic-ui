import { browseIn, browseOutLeft, browseOutRight } from "./animations/browse";
import { dropIn, dropOut } from "./animations/drop";
import { fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp } from "./animations/fade";
import { flyIn, flyInDown, flyInLeft, flyInRight, flyInUp, flyOut, flyOutDown, flyOutLeft, flyOutRight, flyOutUp } from "./animations/fly";
import { horizontalFlipIn, horizontalFlipOut, verticalFlipIn, verticalFlipOut } from "./animations/flip";
import { scaleIn, scaleOut } from "./animations/scale";
import { slideIn, slideInLeft, slideInRight, slideInUp, slideOut, slideOutRight, slideOutUp } from "./animations/slide";
import { swingInDown, swingInLeft, swingInRight, swingInUp, swingOutDown, swingOutLeft, swingOutRight, swingOutUp } from "./animations/swing";
import { zoomIn, zoomOut } from "./animations/zoom";
import { bounce } from "./animations/bounce";
import { flash } from "./animations/flash";
import { glow } from "./animations/glow";
import { jiggle } from "./animations/jiggle";
import { pulse } from "./animations/pulse";
import { shake } from "./animations/shake";
import { tada } from "./animations/tada";

const directionalAnimation = {
  'browse': [browseIn, browseOutLeft],
  'browse right': [browseIn, browseOutRight],
  'drop': [dropIn, dropOut],
  'fade': [fadeIn, fadeOut],
  'fade up': [fadeInUp, fadeOutUp],
  'fade down': [fadeInDown, fadeOutDown],
  'fade left': [fadeInLeft, fadeOutLeft],
  'fade right': [fadeInRight, fadeOutRight],
  'fly': [flyIn, flyOut],
  'fly up': [flyInUp, flyOutUp],
  'fly down': [flyInDown, flyOutDown],
  'fly left': [flyInLeft, flyOutLeft],
  'fly right': [flyInRight, flyOutRight],
  'horizontal flip': [horizontalFlipIn, horizontalFlipOut],
  'vertical flip': [verticalFlipIn, verticalFlipOut],
  'scale': [scaleIn, scaleOut],
  'slide up': [slideInUp, slideOutUp],
  'slide down': [slideIn, slideOut],
  'slide left': [slideInLeft, slideOutRight],
  'slide right': [slideInRight, slideOutRight],
  'swing up': [swingInUp, swingOutUp],
  'swing down': [swingInDown, swingOutDown],
  'swing left': [swingInLeft, swingOutLeft],
  'swing right': [swingInRight, swingOutRight],
  'zoom': [zoomIn, zoomOut],
};

const staticAnimation = {
  'bounce': [bounce, undefined],
  'flash': [flash, undefined],
  'glow': [glow, undefined],
  'jiggle': [jiggle, undefined],
  'pulse': [pulse, undefined],
  'shake': [shake, undefined],
  'tada': [tada, undefined],
};

export type AnimationType = keyof typeof directionalAnimation | keyof typeof staticAnimation;

export const useAnimate = (type: AnimationType) => {
  return ({...directionalAnimation, ...staticAnimation})[type];
};
