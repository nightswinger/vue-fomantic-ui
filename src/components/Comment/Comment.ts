import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiComment',
  render() {
    return h('div', { class: 'comment' }, this.$slots.default?.())
  }
})