import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'SuiCommentAvatar',
  props: {
    as: String,
    src: String
  },
  render() {
    let elementType = this.$props.as || 'div'

    if (this.src) {
      return h(
        elementType,
        { class: 'avatar' },
        h('img', { src: this.$props.src })
      )
    }

    return (
      <div class="avatar">
        {this.$slots.default && this.$slots.default()}
      </div>
    )
  }
})
