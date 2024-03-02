import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Header from "./Header";

describe('SuiHeader', () => {
  describe('primary', () => {
    it('renders the primary class', async () => {
      const wrapper = mount(Header, {
        props: {
          primary: true,
        }
      });

      expect(wrapper.classes()).toContain('primary');
    });
  })

  describe('secondary', () => {
    it('renders the secondary class', async () => {
      const wrapper = mount(Header, {
        props: {
          secondary: true,
        }
      });

      expect(wrapper.classes()).toContain('secondary');
    });
  })
})
