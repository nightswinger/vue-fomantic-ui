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

    describe('with content', () => {
      it('does not apply the icon class when the icon prop is true and there is content', async () => {
        const wrapper = mount(Button, {
          props: {
            icon: 'heart',
            content: 'Like',
          }
        });
  
        expect(wrapper.classes()).not.toContain('icon');
      });
  });

  });

  describe('labeled', () => {
    it('applies the labeled class when the labeled prop is true', async () => {
      const wrapper = mount(Button, {
        props: {
          labeled: true,
        }
      });

      expect(wrapper.classes()).toContain('labeled');
    });

    it('applies the labeled class when the labeled prop is left', async () => {
      const wrapper = mount(Button, {
        props: {
          labeled: 'left',
        }
      });

      expect(wrapper.classes()).toContain('left');
      expect(wrapper.classes()).toContain('labeled');
    });

    it('applies the labeled class when the labeled prop is right', async () => {
      const wrapper = mount(Button, {
        props: {
          labeled: 'right',
        }
      });

      expect(wrapper.classes()).toContain('right');
      expect(wrapper.classes()).toContain('labeled');
    });
  });

  describe('loading', () => {
    it('applies the loading class when the loading prop is true', async () => {
      const wrapper = mount(Button, {
        props: {
          loading: true,
        }
      });

      expect(wrapper.classes()).toContain('loading');
    });

    it('applies the loading class when the loading prop is double', async () => {
      const wrapper = mount(Button, {
        props: {
          loading: 'double',
        }
      });

      expect(wrapper.classes()).toContain('loading');
      expect(wrapper.classes()).toContain('double');
    });

    it('applies the loading class when the loading prop is elastic', async () => {
      const wrapper = mount(Button, {
        props: {
          loading: 'elastic',
        }
      });

      expect(wrapper.classes()).toContain('loading');
      expect(wrapper.classes()).toContain('elastic');
    });
  });
});
