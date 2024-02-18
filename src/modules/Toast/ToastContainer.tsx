import { PropType, computed, defineComponent } from "vue";
import clsx from "clsx";

import { TransitionGroup } from "../Transition";
import { useToastContainer } from "./toasts";
import Toast from "./Toast";

const positionValues = ['top right', 'top center', 'top left', 'bottom right', 'bottom center', 'bottom left', 'centered'];

type Position = typeof positionValues[number];

export default defineComponent({
  name: 'SuiToastContainer',
  props: {
    position: {
      type: String as PropType<Position>,
      default: "top right",
    }
  },
  setup(props) {
    const {
      toastItems,
      removeToast,
    } = useToastContainer();

    const classes = computed(() => {
      return clsx(
        props.position,
        'ui toast-container',
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

      const height = [`${el.offsetHeight}px`, 0];
      const marginBottom = [`${parseInt(getComputedStyle(el).marginBottom, 10)}px`, 0];

      return {
        height,
        marginBottom,
      };
    };

    return {
      toastItems,
      removeToast,
      classes,
      enterKeyframes,
      leaveKeyframes,
    };
  },
  render() {
    return (
      <div class={this.classes}>
        <TransitionGroup
          animation="scale"
          enterKeyframes={this.enterKeyframes}
          leaveKeyframes={this.leaveKeyframes}  
        >
          {this.toastItems.map(({id, ...rest}) => (
            <Toast
              key={id}
              {...rest}
              onClick={() => this.removeToast(id)}
              onClose={() => this.removeToast(id)}
            />
          ))}
        </TransitionGroup>
      </div>
    )
  }
});
