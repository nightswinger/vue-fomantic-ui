import clsx from "clsx";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: 'SuiToastBox',
  props: {
    unclickable: Boolean,
    verticalAttached: Boolean,
  },
  setup(props, { slots }) {
    const classes = computed(() => clsx(
      'floating toast-box compact',
      props.unclickable && 'unclickable',
    ));

    return () => {
      if (props.verticalAttached) {
        return (
          <div
            class={classes.value}
            style="display: block !important;"
          >
            <div class="vertical attached compact right">
              {slots.default?.()}
            </div>
          </div>
        );
      }
      return (
        <div
          class={classes.value}
          style="display: block !important;"
        >
          {slots.default?.()}
        </div>
      )
    }
  }
});
