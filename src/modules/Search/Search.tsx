import { defineComponent } from "vue";

export default defineComponent({
  name: 'SuiSearch',
  props: {
    icon: String,
    placeholder: String
  },
  setup(props) {
    return () => (
      <div class="ui search">
        <div class="ui icon input">
          <input type="text" class="prompt" placeholder={props.placeholder} />
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
    )
  }
})