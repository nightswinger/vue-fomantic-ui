import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: String,
    placeholder: String,
    rows: [Number, String]
  },
  render() {
    if (this.label) {
      return (
        <div class="field">
          <label>{this.label}</label>
          <textarea
            placeholder={this.placeholder}
            rows={this.rows}
          >
          </textarea>
        </div>
      )
    }

    return (
      <div class="field">
        <textarea
          placeholder={this.placeholder}
          rows={this.rows}
        >
        </textarea>
      </div>
    )
  }
})
