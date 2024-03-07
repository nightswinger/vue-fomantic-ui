import { App, Plugin } from 'vue';
import Emoji from "./Emoji";

export default {
  install(app: App) {
    app.component(Emoji.name, Emoji);
  }
} as Plugin;

export { Emoji };