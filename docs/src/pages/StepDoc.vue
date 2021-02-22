<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Step
            <sui-header-subheader>
              A step shows the completion status of an activity in a series of activities
            </sui-header-subheader>
          </sui-header>

          <sui-divider hidden />

          <sui-menu floated="right">
            <sui-menu-item as="a" icon>
              <sui-icon name="edit"></sui-icon>
            </sui-menu-item>
            <sui-menu-item as="a" icon>
              <sui-icon name="github"></sui-icon>
            </sui-menu-item>
          </sui-menu>
        </div>
      </sui-container>
    </sui-segment>

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Step"
        description="A single step"
        :code="stepCode"
      >
        <sui-step-group>
          <sui-step>Shipping</sui-step>
        </sui-step-group>
      </doc-example>

      <sui-header as="h2" dividing>Groups</sui-header>

      <doc-example
        title="Steps"
        description="A set of steps"
        :code="stepsCode"
      >
        <sui-step-group>
          <sui-step>
            <sui-icon name="truck" />
            <sui-step-content>
              <sui-step-title>Shipping</sui-step-title>
              <sui-step-description>
                Choose your shipping options
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step active>
            <sui-icon name="payment" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step disabled>
            <sui-icon name="info" />
            <sui-step-content>
              <sui-step-title>Confirm Order</sui-step-title>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Ordered"
        description="A step can show a ordered sequence of steps"
        :code="orderedCode"
      >
        <sui-step-group ordered>
          <sui-step completed>
            <sui-step-content>
              <sui-step-title>Shipping</sui-step-title>
              <sui-step-description>
                Choose your shipping options
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step completed>
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step active>
            <sui-step-content>
              <sui-step-title>Confirm Order</sui-step-title>
              <sui-step-description>
                Verify order details
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Vertical"
        description="A step can be displayed stacked vertically"
        :code="verticalCode"
      >
        <sui-step-group vertical>
          <sui-step completed>
            <sui-icon name="truck" />
            <sui-step-content>
              <sui-step-title>Shipping</sui-step-title>
              <sui-step-description>
                Choose your shipping options
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step completed>
            <sui-icon name="credit card" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step active>
            <sui-icon name="info" />
            <sui-step-content>
              <sui-step-title>Confirm Order</sui-step-title>
              <sui-step-description>
                Verify order details
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Description"
        description="A step can contain a description"
        :code="descriptionCode"
      >
        <sui-step-group>
          <sui-step>
            <sui-step-title>Shipping</sui-step-title>
            <sui-step-description>
              Choose your shipping options
            </sui-step-description>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Icon"
        description="A step can contain an icon"
        :code="iconCode"
      >
        <sui-step-group>
          <sui-step>
            <sui-icon name="truck" />
            <sui-step-content>
              <sui-step-title>Shipping</sui-step-title>
              <sui-step-description>
                Choose your shipping options
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Link"
        description="A step can link"
        :code="linkCode"
      >
        <sui-step-group>
          <sui-step link>
            <sui-icon name="truck" />
            <sui-step-content>
              <sui-step-title>Shipping</sui-step-title>
              <sui-step-description>
                Choose your shipping options
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step>
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Active"
        description="A step can be highlighted as active"
        :code="activeCode"
      >
        <sui-step-group>
          <sui-step active>
            <sui-icon name="payment" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Completed"
        description="A step can show that a user has completed it"
        :code="completedCode"
      >
        <sui-step-group>
          <sui-step completed>
            <sui-icon name="payment" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Disabled"
        description="A step can show that it cannot be selected"
        :code="disabledCode"
      >
        <sui-step-group>
          <sui-step disabled>Billing</sui-step>
        </sui-step-group>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Stackable"
        description="A step can stack vertically only on smaller screens"
        :code="stackableCode"
      >
        <sui-step-group stackable="tablet">
          <sui-step>
            <sui-icon name="plane" />
            <sui-step-content>
              <sui-step-title>Shipping</sui-step-title>
              <sui-step-description>
                Choose your shipping options
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step active>
            <sui-icon name="dollar" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step disabled>
            <sui-icon name="info circle" />
            <sui-step-content>
              <sui-step-title>Confirm Order</sui-step-title>
              <sui-step-description>
                Verify order details
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Unstackable"
        description="A step can prevent itself from stacking on mobile"
        :code="unstackableCode"
      >
        <sui-step-group unstackable>
          <sui-step>
            <sui-icon name="plane" />
            <sui-step-content>
              <sui-step-title>Shipping</sui-step-title>
              <sui-step-description>
                Choose your shipping options
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step active>
            <sui-icon name="dollar" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
              <sui-step-description>
                Enter billing information
              </sui-step-description>
            </sui-step-content>
          </sui-step>
          <sui-step disabled>
            <sui-icon name="info circle" />
            <sui-step-content>
              <sui-step-title>Confirm Order</sui-step-title>
              <sui-step-description>
                Verify order details
              </sui-step-description>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Fluid"
        description="A fluid step takes up the width of its container"
        :code="fluidCode"
      >
        <sui-grid :columns="2">
          <sui-grid-column>
            <sui-step-group fluid vertical>
              <sui-step completed>
                <sui-icon name="truck" />
                <sui-step-content>
                  <sui-step-title>Shipping</sui-step-title>
                  <sui-step-description>
                    Choose your shipping options
                  </sui-step-description>
                </sui-step-content>
              </sui-step>
              <sui-step active>
                <sui-icon name="dollar" />
                <sui-step-content>
                  <sui-step-title>Billing</sui-step-title>
                  <sui-step-description>
                    Enter billing information
                  </sui-step-description>
                </sui-step-content>
              </sui-step>
            </sui-step-group>
          </sui-grid-column>

          <sui-grid-column>
            <p>The steps take up the entire column width</p>
          </sui-grid-column>
        </sui-grid>
      </doc-example>

      <doc-example
        title="Attached"
        description="Steps can be attached to other elements"
        :code="attachedCode"
      >
        <div>
          <sui-step-group attached="top">
            <sui-step>
              <sui-icon name="truck" />
              <sui-step-content>
                <sui-step-title>Shipping</sui-step-title>
                <sui-step-description>
                  Choose your shipping options
                </sui-step-description>
              </sui-step-content>
            </sui-step>

            <sui-step active>
              <sui-icon name="payment" />
              <sui-step-content>
                <sui-step-title>Billing</sui-step-title>
                <sui-step-description>
                  Enter billing information
                </sui-step-description>
              </sui-step-content>
            </sui-step>
          </sui-step-group>

          <sui-segment attached>
            <p>Main content</p>
          </sui-segment>

          <sui-step-group attached="bottom">
            <sui-step>
              <sui-icon name="truck" />
              <sui-step-content>
                <sui-step-title>Shipping</sui-step-title>
                <sui-step-description>
                  Choose your shipping options
                </sui-step-description>
              </sui-step-content>
            </sui-step>

            <sui-step active>
              <sui-icon name="payment" />
              <sui-step-content>
                <sui-step-title>Billing</sui-step-title>
                <sui-step-description>
                  Enter billing information
                </sui-step-description>
              </sui-step-content>
            </sui-step>
          </sui-step-group>
        </div>
      </doc-example>

      <doc-example
        title="Evenly Divided"
        description="Steps can be divided evenly inside their parent"
        :code="evenlyDividedCode"
      >
        <sui-step-group :widths="2">
          <sui-step active>
            <sui-icon name="payment" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
            </sui-step-content>
          </sui-step>
          <sui-step disabled>
            <sui-icon name="info" />
            <sui-step-content>
              <sui-step-title>Confirm Order</sui-step-title>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Size"
        description="Steps can have different sizes"
        :code="sizeCode"
      >
        <sui-step-group size="mini">
          <sui-step active>
            <sui-icon name="payment" />
            <sui-step-content>
              <sui-step-title>Billing</sui-step-title>
            </sui-step-content>
          </sui-step>
          <sui-step disabled>
            <sui-icon name="info" />
            <sui-step-content>
              <sui-step-title>Confirm Order</sui-step-title>
            </sui-step-content>
          </sui-step>
        </sui-step-group>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A step's color can be inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-step-group inverted vertical>
            <sui-step completed>
              <sui-icon name="truck" />
              <sui-step-content>
                <sui-step-title>Shipping</sui-step-title>
                <sui-step-description>
                  Choose your shipping options
                </sui-step-description>
              </sui-step-content>
            </sui-step>
            <sui-step completed>
              <sui-icon name="credit card" />
              <sui-step-content>
                <sui-step-title>Billing</sui-step-title>
                <sui-step-description>
                  Enter billing information
                </sui-step-description>
              </sui-step-content>
            </sui-step>
            <sui-step active>
              <sui-icon name="info" />
              <sui-step-content>
                <sui-step-title>Confirm Order</sui-step-title>
                <sui-step-description>
                  Verify order details
                </sui-step-description>
              </sui-step-content>
            </sui-step>
          </sui-step-group>
        </sui-segment>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'StepDoc',
  components: { DocExample },
  setup() {
    const stepCode = `<sui-step-group>
  <sui-step>Shipping</sui-step>
</sui-step-group>`

    const stepsCode = `<sui-step-group>
  <sui-step>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const orderedCode = `<sui-step-group ordered>
  <sui-step completed>
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step completed>
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const verticalCode = `<sui-step-group vertical>
  <sui-step completed>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step completed>
    <sui-icon name="credit card" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const descriptionCode = `<sui-step-group>
  <sui-step>
    <sui-step-title>Shipping</sui-step-title>
    <sui-step-description>
      Choose your shipping options
    </sui-step-description>
  </sui-step>
</sui-step-group>`

    const iconCode = `<sui-step-group>
  <sui-step>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const linkCode = `<sui-step-group>
  <sui-step link>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step>
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const activeCode = `<sui-step-group>
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const completedCode = `<sui-step-group>
  <sui-step completed>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const disabledCode = `<sui-step-group>
  <sui-step disabled>Billing</sui-step>
</sui-step-group>`

    const stackableCode = `<sui-step-group stackable="tablet">
  <sui-step>
    <sui-icon name="plane" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="dollar" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info circle" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const unstackableCode = `<sui-step-group unstackable>
  <sui-step>
    <sui-icon name="plane" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="dollar" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info circle" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const fluidCode = `<sui-grid :columns="2">
  <sui-grid-column>
    <sui-step-group fluid vertical>
      <sui-step completed>
        <sui-icon name="truck" />
        <sui-step-content>
          <sui-step-title>Shipping</sui-step-title>
          <sui-step-description>
            Choose your shipping options
          </sui-step-description>
        </sui-step-content>
      </sui-step>
      <sui-step active>
        <sui-icon name="dollar" />
        <sui-step-content>
          <sui-step-title>Billing</sui-step-title>
          <sui-step-description>
            Enter billing information
          </sui-step-description>
        </sui-step-content>
      </sui-step>
    </sui-step-group>
  </sui-grid-column>

  <sui-grid-column>
    <p>The steps take up the entire column width</p>
  </sui-grid-column>
</sui-grid>`

    const attachedCode = `<div>
  <sui-step-group attached="top">
    <sui-step>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>

    <sui-step active>
      <sui-icon name="payment" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>

  <sui-segment attached>
    <p>Main content</p>
  </sui-segment>

  <sui-step-group attached="bottom">
    <sui-step>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>

    <sui-step active>
      <sui-icon name="payment" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>
</div>`

    const evenlyDividedCode = `<sui-step-group :widths="2">
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const sizeCode = `<sui-step-group size="mini">
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`

    const invertedCode = `<sui-segment inverted>
  <sui-step-group inverted vertical>
    <sui-step completed>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>
    <sui-step completed>
      <sui-icon name="credit card" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
    <sui-step active>
      <sui-icon name="info" />
      <sui-step-content>
        <sui-step-title>Confirm Order</sui-step-title>
        <sui-step-description>
          Verify order details
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>
</sui-segment>`

    return {
      stepCode,
      stepsCode,
      orderedCode,
      verticalCode,
      descriptionCode,
      iconCode,
      linkCode,
      activeCode,
      completedCode,
      disabledCode,
      stackableCode,
      unstackableCode,
      fluidCode,
      attachedCode,
      evenlyDividedCode,
      sizeCode,
      invertedCode
    }
  }
})
</script>