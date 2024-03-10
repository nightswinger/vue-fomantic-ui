import clsx from "clsx";
import { computed, defineComponent } from "vue";
import { computeKeyOnly, computeKeyOrKeyValue } from "../../utils/classNameHelper";
import { MessageContent, MessageHeader } from ".";

export default defineComponent({
  props: {
    attached: [Boolean, String],
    color: String,
    compact: Boolean,
    content: String,
    header: String,
    error: Boolean,
    floating: Boolean,
    hidden: Boolean,
    icon: Boolean,
    info: Boolean,
    negative: Boolean,
    positive: Boolean,
    size: String,
    success: Boolean,
    visible: Boolean,
    warning: Boolean,
  },
  setup(props) {
    const computedClass = computed(() => {
      return clsx(
        'ui',
        props.color,
        props.size,
        computeKeyOnly(props.compact, 'compact'),
        computeKeyOnly(props.error, 'error'),
        computeKeyOnly(props.floating, 'floating'),
        computeKeyOnly(props.hidden, 'hidden'),
        computeKeyOnly(props.icon, 'icon'),
        computeKeyOnly(props.info, 'info'),
        computeKeyOnly(props.negative, 'negative'),
        computeKeyOnly(props.positive, 'positive'),
        computeKeyOnly(props.success, 'success'),
        computeKeyOnly(props.visible, 'visible'),
        computeKeyOnly(props.warning, 'warning'),
        computeKeyOrKeyValue(props.attached, 'attached'),
        'message'
      )
    })

    return { computedClass }
  },
  render() {
    return (
      <div class={this.computedClass}>
        {(this.header || this.content) && (
          <MessageContent>
            <MessageHeader>{this.header}</MessageHeader>
            <p>{this.content}</p>
          </MessageContent>
        )}
        {this.$slots.default?.()}
      </div>
    )
  }
})