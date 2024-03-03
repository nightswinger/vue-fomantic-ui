import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiFormTextarea',
  props: {
    label: String,
    placeholder: String,
  },
  render() {
    if (this.label) {
      return (<div class="field">
        <label>{this.label}</label>
        <textarea placeholder={this.placeholder}></textarea>
      </div>)
    }

    return (
      <div class="field">
        <textarea placeholder={this.placeholder}></textarea>
      </div>
    )
  }
})
