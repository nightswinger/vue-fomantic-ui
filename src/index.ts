import * as elements from "./elements";
import * as collections from "./collections"
import * as views from "./views"
import * as modules from "./modules"

const FomanticUIVue = {
  install(app: any, options = {}) {
    Object.values({
      ...elements,
      ...collections,
      ...views,
      ...modules
    }).map((component) => app.use(component))
  },
};

export default FomanticUIVue;