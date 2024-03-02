import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Icon from "./Icon";

describe('SuiIcon', () => {
  describe('primary', () => {
    it('renders the primary class', async () => {
      const wrapper = mount(Icon, {
        props: {
          primary: true,
        }
      });

      expect(wrapper.classes()).toContain('primary');
    });
  })

  describe('secondary', () => {
    it('renders the secondary class', async () => {
      const wrapper = mount(Icon, {
        props: {
          secondary: true,
        }
      });

      expect(wrapper.classes()).toContain('secondary');
    });
  })
});
