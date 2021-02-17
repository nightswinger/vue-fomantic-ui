import { App, Plugin } from 'vue';
import Label from "./Label";
import LabelDetail from "./LabelDetail.vue";
import LabelGroup from "./LabelGroup"

export default {
  install(app: App) {
    app.component(Label.name, Label);
    app.component(LabelDetail.name, LabelDetail)
    app.component(LabelGroup.name, LabelGroup)
  }
} as Plugin;

export { Label, LabelDetail, LabelGroup };