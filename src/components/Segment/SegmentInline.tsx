import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div class="inline">
        {this.$slots.default?.()}
      </div>
    )
  }
})