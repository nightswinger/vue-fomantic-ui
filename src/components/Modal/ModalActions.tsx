import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div class="actions">
        {this.$slots.default?.()}
      </div>
    )
  }
})