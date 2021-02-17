import { App, Plugin } from 'vue';
import Image from "./Image";
import ImageGroup from "./ImageGroup";

export default {
  install(app: App) {
    app.component(Image.name, Image);
    app.component(ImageGroup.name, ImageGroup);
  }
} as Plugin;

export { Image, ImageGroup };