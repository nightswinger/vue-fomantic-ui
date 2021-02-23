import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiFormGroup',
  render() {
    return (
      <div class="fields">
        {this.$slots.default?.()}
      </div>
    )
  }
})