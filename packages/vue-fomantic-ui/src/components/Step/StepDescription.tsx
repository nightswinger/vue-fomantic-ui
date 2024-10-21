import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div class="description">
        {this.$slots.default?.()}
      </div>
    )
  }
})