import { App, Plugin } from 'vue';
import Header from "./Header";
import HeaderContent from './HeaderContent';
import HeaderSubheader from "./HeaderSubheader";

export default {
  install(app: App) {
    app.component(Header.name, Header);
    app.component(HeaderContent.name, HeaderContent)
    app.component(HeaderSubheader.name, HeaderSubheader);
  }
} as Plugin;

export {
  Header,
  HeaderContent,
  HeaderSubheader
};