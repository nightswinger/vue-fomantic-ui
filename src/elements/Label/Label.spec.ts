import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Label from "./Label";

describe('SuiLabel', () => {
  describe('icon', () => {
    it('renders an Icon component with the correct name when icon is a string', async () => {
      const wrapper = mount(Label, {
        props: {
          icon: 'cloud',
        }
      });

      const icon = wrapper.find('i.cloud.icon')
      expect(icon.exists()).toBe(true);
    });

    describe('with slot', () => {
      it('does not apply the icon class when the icon prop is true and there is content', async () => {
        const wrapper = mount(Label, {
          props: {
            icon: 'heart',
          },
          slots: {
            default: 'Label'
          }
        });

        expect(wrapper.classes()).not.toContain('icon');
      });
    });

    describe('without slot', () => {
      it('applies the icon class when the icon prop is true and there is no content', async () => {
        const wrapper = mount(Label, {
          props: {
            icon: 'heart',
          }
        });

        expect(wrapper.classes()).toContain('icon');
      });
    });
  });
});
