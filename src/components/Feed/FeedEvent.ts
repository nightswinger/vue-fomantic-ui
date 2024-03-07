import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiFeedEvent',
  render() {
    return h('div', { class: 'event' }, this.$slots.default?.())
  }
})