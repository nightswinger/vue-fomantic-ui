import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import FormField from "./FormField";

describe('SuiFormField', () => {
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
