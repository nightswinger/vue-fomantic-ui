import { defineComponent, h } from "vue";
import { useSizeProps } from "../../composables/size"

export default defineComponent({
  name: "SuiBreadcrumb",
  props: {
    ...useSizeProps
  },
  setup(props, { slots }) {
    return () =>
      h("div", {
          class: [
            'ui',
            props.size ? props.size : null,
            'breadcrumb'
          ]
        }, slots.default?.());
  },
});
