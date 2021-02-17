import { defineComponent, h } from "vue";

export default defineComponent({
  name: "SuiBreadcrumbDivider",
  props: {
    icon: String,
  },
  setup(props, { slots }) {
    if (props.icon) {
      return () => (
        h('i', {
        ariaHidden: true,
        class: [props.icon, 'icon', 'divider']
        }, slots.default?.())
      )
    }

    return () =>
      h('div', {
          class: "divider"
        }, '/');
  },
});