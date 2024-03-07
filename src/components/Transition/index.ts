import { App, Plugin } from 'vue';

import Transition from './Transition';
import TransitionGroup from './TransitionGroup';

export default {
  install(app: App) {
    app.component(Transition.name, Transition);
    app.component(TransitionGroup.name, TransitionGroup);
  }
} as Plugin;

export {
  Transition,
  TransitionGroup,
};
