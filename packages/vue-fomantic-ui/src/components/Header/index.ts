import { App, Plugin } from 'vue';
import Header from "./Header";
import HeaderContent from './HeaderContent';
import HeaderSubheader from "./HeaderSubheader";

export default {
  install(app: App) {
    app.component('SuiHeader', Header)
    app.component('SuiHeaderContent', HeaderContent)
    app.component('SuiHeaderSubheader', HeaderSubheader)
  }
} as Plugin;

export {
  Header,
  HeaderContent,
  HeaderSubheader
};