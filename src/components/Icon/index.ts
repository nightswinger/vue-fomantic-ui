import { App, Plugin } from 'vue';
import Icon from "./Icon";
import IconGroup from "./IconGroup";

export type Icon = InstanceType<typeof Icon>;

export default {
  install(app: App) {
    app.component('SuiIcon', Icon)
    app.component('SuiIconGroup', IconGroup)
  }
} as Plugin;

export {
  Icon,
  IconGroup
};
