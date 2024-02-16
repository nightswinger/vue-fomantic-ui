import { defineComponent, PropType, Transition as VTransition } from "vue";

import { AnimationType } from "./useAnimate";
import { useTransition } from "./useTransition";

export default defineComponent({
  name: 'SuiTransition',
  props: {
    animation: {
      type: String as PropType<AnimationType>,
      default: 'fade',
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  setup(props) {
    const { onEnter, onLeave } = useTransition(props);

    return {
      onEnter,
      onLeave,
    };
  },
  render() {
    return (
      <VTransition
        onEnter={this.onEnter}
        onLeave={this.onLeave}
        css={false}
      >
        {this.$slots.default?.()}
      </VTransition>
    )
  } 
});
