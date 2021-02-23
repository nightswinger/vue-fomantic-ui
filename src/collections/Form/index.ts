import { App, Plugin } from 'vue'
import Form from "./Form"
import FormField from "./FormField"
import FormGroup from './FormGroup'

export default {
  install(app: App) {
    app.component(Form.name, Form)
    app.component(FormField.name, FormField)
    app.component(FormGroup.name, FormGroup)
  }
} as Plugin

export {
  Form,
  FormField,
  FormGroup
}