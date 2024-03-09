import { App, Plugin } from 'vue';
import Label from "./Label";
import LabelDetail from "./LabelDetail";
import LabelGroup from "./LabelGroup"

export default {
  install(app: App) {
    app.component('SuiLabel', Label)
    app.component('SuiLabelDetail', LabelDetail)
    app.component('SuiLabelGroup', LabelGroup)
  }
} as Plugin;

export { Label, LabelDetail, LabelGroup };