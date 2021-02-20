import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiLabelDetail',
  render() {
    return (
      <div class="detail">{this.$slots.default?.()}</div>
    )
  }
})