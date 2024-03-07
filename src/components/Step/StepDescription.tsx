import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiStepDescription',
  render() {
    return (
      <div class="description">
        {this.$slots.default?.()}
      </div>
    )
  }
})