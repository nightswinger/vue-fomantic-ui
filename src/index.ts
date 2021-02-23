import * as elements from "./elements";
import * as collections from "./collections"
import * as views from "./views"
import * as modules from "./modules"
import { App } from "vue";

function install(app: App) {
  Object.values({
    ...elements,
    ...collections,
    ...views,
    ...modules
  }).map((component) => app.use(component))
}

export default { install };