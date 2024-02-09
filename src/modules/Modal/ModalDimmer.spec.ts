import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mount } from '@vue/test-utils';

import ModalDimmer from "./ModalDimmer";

describe('ModalDimmer', () => {
  beforeEach(() => {
    document.body.className = '';
  });

  afterEach(() => {
    document.body.className = '';
  });

  it('applies the inverted class when the inverted prop is true', async () => {
    const wrapper = mount(ModalDimmer, {
      props: { inverted: true }
    });

    expect(wrapper.classes()).toContain('inverted');
  });

  it('does not apply the inverted class when the inverted prop is false', async () => {
    const wrapper = mount(ModalDimmer, {
      props: { inverted: false }
    });

    expect(wrapper.classes()).not.toContain('inverted');
  });

  it('adds blurring class to body when blurring prop is true', async () => {
    const wrapper = mount(ModalDimmer, {
      props: { blurring: true, modelValue: false }
    });

    wrapper.setProps({ modelValue: true });

    await wrapper.vm.$nextTick();
    expect(document.body.className).toContain('blurring');
  });

  it('removes blurring class from body when blurring prop is false', async () => {
    const wrapper = mount(ModalDimmer, {
      props: { blurring: false, modelValue: false }
    });

    wrapper.setProps({ modelValue: true });

    await wrapper.vm.$nextTick();
    expect(document.body.className).not.toContain('blurring');
  });
});
