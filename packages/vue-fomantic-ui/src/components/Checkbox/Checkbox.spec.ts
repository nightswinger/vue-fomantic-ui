import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Checkbox from "./Checkbox";

describe('SuiCheckbox', () => {
  it('renders a radio button when the radio prop is true', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        radio: true,
        label: 'Test Radio'
      }
    });

    const radioButton = wrapper.find('input[type="radio"]');
    expect(radioButton.exists()).toBe(true);

    expect(radioButton.attributes('class')).toContain('hidden');
    expect(radioButton.attributes('readonly')).toBeDefined();

    const label = wrapper.find('label');
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('Test Radio');
  });
});
