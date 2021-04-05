<template>
  <div>
    <doc-page-header
      title="Item"
      sub="An item view presents large collections of site content for display"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Items"
        description="A group of items"
        :code="itemsCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content>
              <sui-item-header>Header</sui-item-header>
              <sui-item-meta>
                <span>Description</span>
              </sui-item-meta>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                Additional Details
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content>
              <sui-item-header>Header</sui-item-header>
              <sui-item-meta>
                <span>Description</span>
              </sui-item-meta>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                Additional Details
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="Image"
        description="An item can contain an image"
        :code="imageCode"
      >
        <sui-item-group divided>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
          </sui-item>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
          </sui-item>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Content"
        description="An item can contain content"
        :code="contentCode"
      >
        <sui-item-group divided>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content verticalAlign="middle">
              Content A
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content verticalAlign="middle">
              Content B
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content verticalAlign="middle">
              Content C
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Header"
        description="An item can contain a header"
        :code="headerCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content verticalAlign="middle">
              <sui-item-header>12 Years a Slave</sui-item-header>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Metadata"
        description="An item can contain content metadata"
        :code="metadataCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content>
              <sui-item-header>Arrowhead Valley Camp</sui-item-header>
              <sui-item-meta>
                <span class="price">$1200</span>
                <span class="stay">1 Month</span>
              </sui-item-meta>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content>
              <sui-item-header>Buck's Homebrew Stayaway</sui-item-header>
              <sui-item-meta>
                <span class="price">$1000</span>
                <span class="stay">2 Weeks</span>
              </sui-item-meta>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Description"
        description="An item can contain a description with a single or multiple paragraphs"
        :code="descriptionCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content>
              <sui-item-header>Cute Dog</sui-item-header>
              <sui-item-description>
                <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                <p>Many people also have their own barometers for what makes a cute dog.</p>
              </sui-item-description>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Extra Content"
        description="An item can contain extra content meant to be formatted separately from the main content"
        :code="extraContentCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-item-content>
              <sui-item-header>Cute Dog</sui-item-header>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                <sui-icon name="check" color="green" />
                121 Votes
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Divided"
        description="Items can be divided to better distinguish between grouped content"
        :code="dividedCode"
      >
        <sui-item-group divided>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content>
              <sui-item-header>12 Years a Slave</sui-item-header>
              <sui-item-meta>
                <span class="cinema">Union Square 14</span>
              </sui-item-meta>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                <sui-label>IMAX</sui-label>
                <sui-label>
                  <sui-icon name="globe" /> Additional Languages
                </sui-label>
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content>
              <sui-item-header>My Neighbor Totoro</sui-item-header>
              <sui-item-meta>
                <span class="cinema">IFC Cinema</span>
              </sui-item-meta>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                <sui-button floated="right" color="primary">
                  Buy tickets
                  <sui-icon name="right chevron" />
                </sui-button>
                <sui-label>Limited</sui-label>
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-item-image>
              <img src="/images/wireframe/image.png">
            </sui-item-image>
            <sui-item-content>
              <sui-item-header>Watchmen</sui-item-header>
              <sui-item-meta>
                <span class="cinema">IFC</span>
              </sui-item-meta>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                <sui-button floated="right" color="primary">
                  Buy tickets
                  <sui-icon name="right chevron" />
                </sui-button>
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Relaxed"
        description="A group of items can relax its padding to provide more negative space"
        :code="relaxedCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-image size="tiny" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="middle">
              <sui-item-header as="a">12 Years a Slave</sui-item-header>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-image size="tiny" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="middle">
              <sui-item-header as="a">My Neighbor Totoro</sui-item-header>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-image size="tiny" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="middle">
              <sui-item-header as="a">Watchmen</sui-item-header>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Vertical Alignment"
        description="Content can specify its vertical alignment"
        :code="verticalAlignCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content>
              <sui-item-header>Top Aligned</sui-item-header>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="middle">
              <sui-item-header>Middle Aligned</sui-item-header>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="bottom">
              <sui-item-header>Bottom Aligned</sui-item-header>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Floated Content"
        description="Any content element can be floated left or right"
        :code="floatedContentCode"
      >
        <sui-item-group>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="middle">
              <sui-item-header>Content A</sui-item-header>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                <sui-button floated="right">Action</sui-button>
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="middle">
              <sui-item-header>Content B</sui-item-header>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                <sui-button floated="right">Action</sui-button>
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
          <sui-item>
            <sui-image size="small" src="/images/wireframe/image.png" />
            <sui-item-content verticalAlign="middle">
              <sui-item-header>Content C</sui-item-header>
              <sui-item-description>
                <img src="/images/wireframe/short-paragraph.png">
              </sui-item-description>
              <sui-item-extra>
                <sui-button floated="right">Action</sui-button>
              </sui-item-extra>
            </sui-item-content>
          </sui-item>
        </sui-item-group>
      </doc-example>

      <doc-example
        title="Inverted"
        description="An item can be inverted to appear on a dark background"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-item-group inverted>
            <sui-item>
              <sui-image size="small" src="/images/wireframe/image.png" />
              <sui-item-content>
                <sui-item-header>Arrowhead Valley Camp</sui-item-header>
                <sui-item-meta>
                  <span class="price">$1200</span>
                  <span class="stay">1 Month</span>
                </sui-item-meta>
                <sui-item-description>
                  <img src="/images/wireframe/short-paragraph.png">
                </sui-item-description>
              </sui-item-content>
            </sui-item>
            <sui-item>
              <sui-image size="small" src="/images/wireframe/image.png" />
              <sui-item-content>
                <sui-item-header>Buck's Homebrew Stayaway</sui-item-header>
                <sui-item-meta>
                  <span class="price">$1000</span>
                  <span class="stay">2 Weeks</span>
                </sui-item-meta>
                <sui-item-description>
                  <img src="/images/wireframe/short-paragraph.png">
                </sui-item-description>
              </sui-item-content>
            </sui-item>
          </sui-item-group>
        </sui-segment>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'ItemDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const itemsCode = `<sui-item-group>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Header</sui-item-header>
      <sui-item-meta>
        <span>Description</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        Additional Details
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Header</sui-item-header>
      <sui-item-meta>
        <span>Description</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        Additional Details
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const imageCode = `<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
</sui-item-group>`

    const contentCode = `<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content A
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content B
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content C
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const headerCode = `<sui-item-group>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      <sui-item-header>12 Years a Slave</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const metadataCode = `<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Arrowhead Valley Camp</sui-item-header>
      <sui-item-meta>
        <span class="price">$1200</span>
        <span class="stay">1 Month</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Buck's Homebrew Stayaway</sui-item-header>
      <sui-item-meta>
        <span class="price">$1000</span>
        <span class="stay">2 Weeks</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const descriptionCode = `<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Cute Dog</sui-item-header>
      <sui-item-description>
        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
      </sui-item-description>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const extraContentCode = `<sui-item-group>
  <sui-item>
    <sui-item-content>
      <sui-item-header>Cute Dog</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-icon name="check" color="green" />
        121 Votes
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const dividedCode = `<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>12 Years a Slave</sui-item-header>
      <sui-item-meta>
        <span class="cinema">Union Square 14</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-label>IMAX</sui-label>
        <sui-label>
          <sui-icon name="globe" /> Additional Languages
        </sui-label>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>My Neighbor Totoro</sui-item-header>
      <sui-item-meta>
        <span class="cinema">IFC Cinema</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right" color="primary">
          Buy tickets
          <sui-icon name="right chevron" />
        </sui-button>
        <sui-label>Limited</sui-label>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Watchmen</sui-item-header>
      <sui-item-meta>
        <span class="cinema">IFC</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right" color="primary">
          Buy tickets
          <sui-icon name="right chevron" />
        </sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const relaxedCode = `<sui-item-group>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">12 Years a Slave</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">My Neighbor Totoro</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">Watchmen</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const verticalAlignCode = `<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Top Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Middle Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="bottom">
      <sui-item-header>Bottom Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    const floatedContentCode = `<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content A</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content B</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content C</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`

    return {
      itemsCode,
      imageCode,
      contentCode,
      headerCode,
      metadataCode,
      descriptionCode,
      extraContentCode,
      dividedCode,
      relaxedCode,
      verticalAlignCode,
      floatedContentCode
    }
  }
})
</script>