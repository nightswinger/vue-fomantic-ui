import { App, Plugin } from 'vue';
import Button from "./Button";
import ButtonContent from './ButtonContent';
import ButtonGroup from "./ButtonGroup";

export default {
  install(app: App) {
    app.component(Button.name, Button);
    app.component(ButtonContent.name, ButtonContent);
    app.component(ButtonGroup.name, ButtonGroup)
  },
} as Plugin;

export {
  Button,
  ButtonContent,
  ButtonGroup
};