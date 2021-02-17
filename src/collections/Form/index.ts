import { App, Plugin } from 'vue'
import Form from "./Form"
import FormField from "./FormField"

export default {
  install(app: App) {
    app.component(Form.name, Form)
    app.component(FormField.name, FormField)
  }
} as Plugin

export {
  Form,
  FormField
}