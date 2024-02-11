import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Transition from "./Transition";

describe('Transition', () => {
  it('renders default slot when passed', () => {
    const wrapper = mount(Transition, {
      slots: {
        default: '<div>Test</div>',
      },
      props: { visible: true },
    });

    expect(wrapper.html()).toContain('Test');
  });

  it('throws an error when there are multiple children', async () => {
    expect(
      () => mount(Transition, {
        slots: {
          default: '<div></div><div></div>',
        }
      })
    ).toThrow('Transition component must have exactly one child');
  });
});
