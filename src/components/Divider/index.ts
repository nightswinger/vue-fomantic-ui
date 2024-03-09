import { App, Plugin } from 'vue';
import Divider from "./Divider";

export default {
  install(app: App) {
    app.component('SuiDivider', Divider);
  }
} as Plugin;

export { Divider };