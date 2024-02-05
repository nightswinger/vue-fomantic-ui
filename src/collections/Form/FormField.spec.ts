import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import FormField from "./FormField";

describe('SuiFormField', () => {
  it('applies the disabled class when the disabled prop is true', async () => {
    const wrapper = mount(FormField, {
      props: { disabled: true }
    });

    expect(wrapper.classes()).toContain('disabled');
  });

  it('does not apply the disabled class when the disabled prop is false', async () => {
    const wrapper = mount(FormField, {
      props: { disabled: false }
    });

    expect(wrapper.classes()).not.toContain('disabled');
  });

  it('renders width class based on width prop', async () => {
    const wrapper = mount(FormField, {
      props: { width: 'one' }
    });

    expect(wrapper.classes()).toContain('one');
    expect(wrapper.classes()).toContain('wide');
  });

  it('should emit update:modelValue event when input value is changed', async () => {
    const wrapper = mount(FormField, {
      props: { label: 'submit' }
    });
    const input = wrapper.find('input');
    await input.setValue('new value');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value'])
  })
});
