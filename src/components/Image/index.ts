import { App, Plugin } from 'vue';
import Image from "./Image";
import ImageGroup from "./ImageGroup";

export default {
  install(app: App) {
    app.component('SuiImage', Image)
    app.component('SuiImageGroup', ImageGroup)
  }
} as Plugin;

export { Image, ImageGroup };