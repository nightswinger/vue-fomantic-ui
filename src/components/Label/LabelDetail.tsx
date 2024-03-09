import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div class="detail">{this.$slots.default?.()}</div>
    )
  }
})