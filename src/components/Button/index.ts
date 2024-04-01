import { App, Plugin } from 'vue';
import Button from "./Button";
import ButtonContent from './ButtonContent';
import ButtonGroup from "./ButtonGroup";

export default {
  install(app: App) {
    app.component('SuiButton', Button);
    app.component('SuiButtonContent', ButtonContent);
    app.component('SuiButtonGroup', ButtonGroup)
  },
} as Plugin;

export {
  Button,
  ButtonContent,
  ButtonGroup
};