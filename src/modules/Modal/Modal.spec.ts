import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Modal from './Modal';
import ModalDimmer from "./ModalDimmer";

describe('SuiModal', () => {
  it('closes the modal on outside click when closable', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
        closable: true,
      }
    });
    await wrapper.vm.$nextTick();

    const dimmer = wrapper.getComponent(ModalDimmer);
    await dimmer.find('.dimmer').trigger('click');

    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([false]);
  });

  describe('inverted dimmer', () => {
    it('passes the inverted prop to ModalDimmer when dimmer prop is set to "inverted"', async () => {
      const wrapper = mount(Modal, {
        props: { dimmer: 'inverted' }
      });

      const dimmer = wrapper.findComponent(ModalDimmer);
      expect(dimmer.props('inverted')).toBe(true);
    });
  });
});
