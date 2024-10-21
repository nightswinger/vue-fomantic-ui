import { App, Plugin } from 'vue'
import Form from "./Form"
import FormField from "./FormField"
import FormGroup from './FormGroup'
import FormTextarea from './FormTextarea'

export default {
  install(app: App) {
    app.component('SuiForm', Form)
    app.component('SuiFormField', FormField)
    app.component('SuiFormGroup', FormGroup)
    app.component('SuiFormTextarea', FormTextarea)
  }
} as Plugin

export {
  Form,
  FormField,
  FormGroup,
  FormTextarea
}