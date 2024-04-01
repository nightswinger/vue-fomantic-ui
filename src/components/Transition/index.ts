import { App, Plugin } from 'vue';

import Transition from './Transition';
import TransitionGroup from './TransitionGroup';

export default {
  install(app: App) {
    app.component('SuiTransition', Transition);
    app.component('SuiTransitionGroup', TransitionGroup);
  }
} as Plugin;

export {
  Transition,
  TransitionGroup,
};
