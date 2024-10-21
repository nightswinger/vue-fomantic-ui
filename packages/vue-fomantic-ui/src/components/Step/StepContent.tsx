import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div class="content">
        {this.$slots.default?.()}
      </div>
    )
  }
})