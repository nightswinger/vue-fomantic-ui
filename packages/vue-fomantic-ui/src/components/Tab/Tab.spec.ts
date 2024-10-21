import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';

import Tab from "./Tab";
import TabPanel from "./TabPanel";

describe('Tab', () => {
  it('renders tab panels', async () => {
    const wrapper = mount(Tab, {
      slots: {
        default: `
          <TabPanel header="First Tab">
            First Tab Content
          </TabPanel>
          <TabPanel header="Second Tab">
            Second Tab Content
          </TabPanel>
        `
      },
      global: {
        components: { TabPanel }
      }
    });

    const tabPanels = wrapper.findAllComponents(TabPanel);
    expect(tabPanels.length).toBe(2);

    expect(tabPanels[0].text()).toEqual('First Tab Content');
    expect(tabPanels[1].text()).toEqual('Second Tab Content');
  });
});
