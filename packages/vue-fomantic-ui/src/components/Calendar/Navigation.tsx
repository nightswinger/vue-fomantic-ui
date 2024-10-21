import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: String,
    onLabelClick: Function,
    onPrev: Function,
    onNext: Function,
  },
  setup(props) {
    return () => (
      <tr>
        <th colspan={7}>
          <span class='link' onClick={() => props.onLabelClick?.()}>
            {props.label}
          </span>
          <span class='prev link' onClick={() => props.onPrev?.()}>
            <i class='chevron left icon'></i>
          </span>
          <span class='next link' onClick={() => props.onNext?.()}>
            <i class='chevron right icon'></i>
          </span>
        </th>
      </tr>
    )
  },
})
