import clsx from "clsx";
import { computed, defineComponent, onMounted, ref } from "vue";

import { Progress } from "../Progress";

import { makeColorProps, useColor } from "../../composables/color";

import type { PropType, VNode } from "vue";

import type { Color } from "../../composables/color";

const toastTypeValues = ["success", "error", "warning", "info"] as const;
export type ToastType = typeof toastTypeValues[number];
export type ToastActionOptions = {
  close: () => void;
};

export const Toast = defineComponent({
  name: 'SuiToast',
  emits: ['click', 'close'],
  props: {
    id: Number,
    displayTime: {
      type: Number,
      default: 3000,
    },
    type: String as PropType<ToastType>,
    title: String,
    message: {
      type: String,
      required: true,
    },
    centered: Boolean,
    messageStyle: Boolean,
    actions: Function as PropType<(options: ToastActionOptions) => VNode[]>,
    showProgress: {
      type: String as PropType<'top'|'bottom'>,
    },
    showProgressColor: String as PropType<Color>,
    showProgressUp: Boolean,
    inverted: Boolean,
    ...makeColorProps(),
  },
  setup(props, { emit }) {
    const { colorClasses } = useColor(props);

    const classes = computed(() => {
      return clsx(
        props.centered && 'center aligned',
        props.type || 'neutral',
        colorClasses.value,
        'ui',
        props.messageStyle ? 'message' : 'toast',
        'compact'
      );
    });

    const progress = ref(props.showProgressUp ? 0 : 100);

    const animateProgressBar = () => {
      const interval = props.displayTime / 100;

      setTimeout(() => {
        const timer = setInterval(() => {
          if (props.showProgressUp) {
            if (progress.value >= 100) clearInterval(timer);
            progress.value += 1;
            return;
          }
          if (progress.value <= 0) clearInterval(timer);
          progress.value -= 1;
        }, interval);
      }, 500);
    };

    onMounted(() => props.showProgress && animateProgressBar());

    setTimeout(() => props.displayTime > 0 && emit('close'), props.displayTime + 750);

    return {
      classes,
      progress,
    };
  },
  render() {
    return (
      <div
        class={clsx("floating toast-box compact", { 'unclickable': !!this.actions })}
        style="display: block !important;"
      >
        {this.showProgress === 'top' && (
          <Progress
            inverted={!this.inverted}
            color={this.showProgressColor || this.color}
            attached={this.showProgress}
            percent={this.progress}
          />
        )}
        <div
          role="alert"
          class={this.classes}
          onClick={() => !this.actions && this.$emit('click')}
        >
          <div class="content">
            {this.title && <div class="ui header">{this.title}</div>}
            <div class="message">
              {this.message}
            </div>
          </div>
          {this.actions && (
            <div class="actions">
              {this.actions({close: () => this.$emit('close')})}
            </div>
          )}
        </div>
        {this.showProgress === 'bottom' && (
          <Progress
            inverted={!this.inverted}
            color={this.showProgressColor || this.color}
            attached={this.showProgress}
            percent={this.progress}
          />
        )}
      </div>
    )
  },
});

export type Toast = InstanceType<typeof Toast>;
