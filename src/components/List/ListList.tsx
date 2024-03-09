import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div class="list">{this.$slots.default?.()}</div>
    )
  }
})