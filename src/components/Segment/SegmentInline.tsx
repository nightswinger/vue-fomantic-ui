import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiSegmentInline',
  render() {
    return (
      <div class="inline">
        {this.$slots.default?.()}
      </div>
    )
  }
})