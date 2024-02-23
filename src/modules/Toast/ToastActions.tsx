import clsx from "clsx";
import { computed, defineComponent } from "vue";

import { ButtonGroup } from "../../elements/Button";
import { makeAttachedProps } from "../../composables/attached";

import type { PropType } from "vue";

export default defineComponent({
  name: 'SuiToastActions',
  props: {
    aligned: String as PropType<'left'|'centered'>,
    basic: Boolean,
    vertical: Boolean,
    ...makeAttachedProps(),
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return clsx(
        'actions',
        props.basic && 'basic',
        props.aligned,
        props.vertical && 'vertical',
      );
    });

    return () => {
      if (props.attached) {
        return (
          <ButtonGroup attached={props.attached} vertical={props.vertical}>
            {slots.default?.()}
          </ButtonGroup>
        );
      }

      return (
        <div class={classes.value}>
          {slots.default?.()}
        </div>
      );
    };
  }
});
