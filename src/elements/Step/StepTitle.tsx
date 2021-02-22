import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiStepTitle',
  render() {
    return (
      <div class="title">
        {this.$slots.default?.()}
      </div>
    )
  }
})