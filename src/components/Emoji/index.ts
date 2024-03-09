import { App, Plugin } from 'vue';
import Emoji from "./Emoji";

export default {
  install(app: App) {
    app.component('SuiEmoji', Emoji);
  }
} as Plugin;

export { Emoji };