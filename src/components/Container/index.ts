import { App, Plugin } from 'vue';
import Container from "./Container";

export default {
  install(app: App) {
    app.component(Container.name, Container);
  }
} as Plugin;

export { Container };
