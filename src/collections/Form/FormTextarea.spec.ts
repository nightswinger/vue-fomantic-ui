import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import FormTextarea from "./FormTextarea";

describe('SuiFormTextarea', () => {
  describe('label', () => {
    it('renders a label when label prop is present', () => {
      const wrapper = mount(FormTextarea, {
        props: { label: 'label' }
      });

      expect(wrapper.find('label').exists()).toBe(true);
    });

    it('does not render a label when label prop is not present', () => {
      const wrapper = mount(FormTextarea);

      expect(wrapper.find('label').exists()).toBe(false);
    });
  });
});
