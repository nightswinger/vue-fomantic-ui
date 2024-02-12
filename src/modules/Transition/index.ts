import { App, Plugin } from 'vue';
import Transition from './Transition';

export default {
  install(app: App) {
    app.component(Transition.name, Transition);
  }
} as Plugin;

export {
  Transition
};
