import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div class="title">
        {this.$slots.default?.()}
      </div>
    )
  }
})