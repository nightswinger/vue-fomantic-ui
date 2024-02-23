import { Teleport, computed, defineComponent } from "vue";
import clsx from "clsx";

import { Toast } from "./Toast";

import { useToastController } from "./useToast";

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
    const { items, remove } = useToastController();

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

    return {
      classes,
      items,
      remove,
      enterKeyframes,
      leaveKeyframes,
    };
  },
  render() {
    return (
      <Teleport to="body">
        <div
          class={this.classes}
        >
          <TransitionGroup
            animation="scale"
            enterKeyframes={this.enterKeyframes}
            leaveKeyframes={this.leaveKeyframes}  
          >
            {this.items
              .filter(({ position, attached }) => {
                if (this.attached) return attached === this.attached;
                
                return position === this.position;
              })
              .filter(({ horizontal }) => this.horizontal === !!horizontal)
              .map(({id, ...rest}) => (
                <Toast
                  key={id}
                  {...rest}
                  onClick={() => this.remove(id)}
                  onClose={() => this.remove(id)}
                />
              )
            )}
          </TransitionGroup>
        </div>
      </Teleport>
    );
  }
});
