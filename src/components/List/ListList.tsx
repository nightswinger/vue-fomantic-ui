import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiListList',
  render() {
    return (
      <div class="list">{this.$slots.default?.()}</div>
    )
  }
})