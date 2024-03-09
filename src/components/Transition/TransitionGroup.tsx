import { computed, defineComponent, PropType, TransitionGroup as VTransitionGroup } from "vue";

import { AnimationType, useAnimate } from "./useAnimate";
import { MotionKeyframesDefinition } from "motion";

export default defineComponent({
  props: {
    tag: String,
    animation: {
      type: String as PropType<AnimationType>,
      default: 'fade',
    },
    enterKeyframes: {
      type: Function as PropType<(el: Element) => MotionKeyframesDefinition>,
      default: () => ({}),
    },
    leaveKeyframes: {
      type: Function as PropType<(el: Element) => MotionKeyframesDefinition>,
      default: () => ({}),
    },
  },
  setup(props) {
    const [enter, leave] = useAnimate(props.animation);

    const onEnter = computed(() => {
      return (el: Element, done: () => void) => {
        if (!enter) return done();

        const duration = 0.5;
  
        const animation = enter(el, {duration, keyframesOverride: props.enterKeyframes(el)});
        animation.play();
        animation.finished.then(done);
      };
    });
  
    const onLeave = computed(() => {
      return (el: Element, done: () => void) => {
        if (!leave) return done();

        const duration = 0.5;
  
        const animation = leave(el, {duration, keyframesOverride: props.leaveKeyframes(el)});
        animation.play();
        animation.finished.then(done);
      };
    });

    return {
      onEnter,
      onLeave,
    };
  },
  render() {
    return (
      <VTransitionGroup
        tag={this.tag}
        onEnter={this.onEnter}
        onLeave={this.onLeave}
        css={false}
      >
        {this.$slots.default?.()}
      </VTransitionGroup>
    )
  }
});
