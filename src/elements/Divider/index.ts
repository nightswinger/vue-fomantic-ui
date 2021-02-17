import { App, Plugin } from 'vue';
import Divider from "./Divider";

export default {
  install(app: App) {
    app.component(Divider.name, Divider);
  }
} as Plugin;

export { Divider };