import { PropType, cloneVNode, defineComponent } from "vue";
import { AnimationType, useTransition } from "./useTransition";

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
    visible: Boolean,
    looping: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { classes, styles } = useTransition(props);

    return {
      classes,
      styles,
    };
  },
  render() {
    if (this.$slots.default?.().length !== 1) {
      throw new Error('Transition component must have exactly one child');
    }

    return cloneVNode(this.$slots.default?.()[0], {
      class: this.classes,
      style: this.styles,
    });
  }
});
