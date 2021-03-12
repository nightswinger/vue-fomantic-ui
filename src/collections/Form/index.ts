import { App, Plugin } from 'vue'
import Form from "./Form"
import FormField from "./FormField"
import FormGroup from './FormGroup'
import FormTextarea from './FormTextarea'

export default {
  install(app: App) {
    app.component(Form.name, Form)
    app.component(FormField.name, FormField)
    app.component(FormGroup.name, FormGroup)
    app.component(FormTextarea.name, FormTextarea)
  }
} as Plugin

export {
  Form,
  FormField,
  FormGroup,
  FormTextarea
}