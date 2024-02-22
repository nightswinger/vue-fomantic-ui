import { PropType, computed, defineComponent, ref } from "vue";
import clsx from "clsx";
import { useMutationObserver } from "@vueuse/core";

import { Toast } from "./Toast";
import { getDatasetProps } from "./toasts";

import { TransitionGroup } from "../Transition";

import { makeAttachedProps, useAttached } from "../../composables/attached";
import { makePositionProps, usePosition } from "../../composables/position";

export default defineComponent({
  name: 'SuiToastContainer',
  props: {
    horizontal: Boolean,
    ...makeAttachedProps(),
    ...makePositionProps({ defaultValue: 'top right' }),
  },
  setup(props) {
    const el = ref<HTMLElement | null>(null);
    const items = ref<Toast['$props'][]>([]);

    const removeToast = (id: number) => {
      items.value = items.value.filter((item) => item.id !== id);
    };

    const { attachedClasses } = useAttached(props);
    const { positionClasses } = usePosition(props);

    const classes = computed(() => {
      return clsx(
        attachedClasses.value || positionClasses.value,
        'ui toast-container',
        props.horizontal && 'horizontal',
      );
    });

    const enterKeyframes = (el: Element) => {
      if (!(el instanceof HTMLElement)) return {};

      const height = [0, `${el.offsetHeight}px`];
      const marginBottom = [0, `${parseInt(getComputedStyle(el).marginBottom, 10)}px`];

      return {
        height,
        marginBottom,
      };
    };

    const leaveKeyframes = (el: Element) => {
      if (!(el instanceof HTMLElement)) return {};

      const width = [`${el.offsetWidth}px`, 0];
      const height = [`${el.offsetHeight}px`, 0];

      const direction = props.horizontal ? { width } : { height };

      const marginBottom = [`${parseInt(getComputedStyle(el).marginBottom, 10)}px`, 0];

      return {
        ...direction,
        marginBottom,
      };
    };

    useMutationObserver(el, (mutations) => {
      if (mutations[0].addedNodes[0]) {
        const element = mutations[0].addedNodes[0] as HTMLElement;

        const props = getDatasetProps(element);

        if (!props) return;

        element.remove();
        items.value.push(props);
      }
    }, { childList: true });

    const renderToast = (toast: Toast['$props']) => {
      return (
        <Toast
          key={toast.id}
          {...toast}
          onClick={() => removeToast(toast.id!)}
          onClose={() => removeToast(toast.id!)}
        />
      );
    };

    return () => (
      <div
        class={classes.value}
        ref={ref => el.value = ref as HTMLElement}
      >
        <TransitionGroup
          animation="scale"
          enterKeyframes={enterKeyframes}
          leaveKeyframes={leaveKeyframes}  
        >
          {items.value.map((item) => renderToast(item))}
        </TransitionGroup>
      </div>
    );
  },
});
