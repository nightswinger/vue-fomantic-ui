import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import { h } from "vue";

import Button from "./Button";

describe('SuiButton', () => {
  describe('content', () => {
    it('renders the content prop', async () => {
      const wrapper = mount(Button, {
        props: {
          content: 'Button',
        }
      });

      expect(wrapper.text()).toBe('Button');
    });

    it('renders the content prop as vnode array', async () => {
      const wrapper = mount(Button, {
        props: {
          content: [
            h('span', 'Hello'),
            h('span', 'World')
          ],
        }
      });

      expect(wrapper.text()).toBe('HelloWorld');
    });
  });

  describe('icon', () => {
    it('applies the icon class when the icon prop is true', async () => {
      const wrapper = mount(Button, {
        props: {
          icon: true,
        }
      });

      expect(wrapper.classes()).toContain('icon');
    });

    it('renders an Icon component with the correct name when icon is a string', async () => {
      const wrapper = mount(Button, {
        props: {
          icon: 'cloud',
        }
      });

      const icon = wrapper.find('i.cloud.icon')
      expect(icon.exists()).toBe(true);
    });
  });
});
