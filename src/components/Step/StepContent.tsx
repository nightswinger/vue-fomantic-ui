import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiStepContent',
  render() {
    return (
      <div class="content">
        {this.$slots.default?.()}
      </div>
    )
  }
})