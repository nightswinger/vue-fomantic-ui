import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiModalActions',
  render() {
    return (
      <div class="actions">
        {this.$slots.default?.()}
      </div>
    )
  }
})