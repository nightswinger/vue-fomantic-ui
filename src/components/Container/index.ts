import { App, Plugin } from 'vue';
import Container from "./Container";

export default {
  install(app: App) {
    app.component('SuiContainer', Container);
  }
} as Plugin;

export { Container };
