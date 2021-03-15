<template>
  <div>
    <doc-page-header
      title="Comment"
      sub="A comment displays user feedback to site content"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Comments"
        description="A basic list of comments"
        :code="commentsCode"
      >
        <sui-comment-group>
          <sui-header as="h3" dividing>Comments</sui-header>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Matt</sui-comment-author>
              <sui-comment-metadata>
                <span>Today at 5:42PM</span>
              </sui-comment-metadata>
              <sui-comment-text>How artistic!</sui-comment-text>
              <sui-comment-actions>
                <a>Reply</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Elliot Fu</sui-comment-author>
              <sui-comment-metadata>
                <span>Yesterday at 12:30AM</span>
              </sui-comment-metadata>
              <sui-comment-text>This has been very useful for my research. Thanks as well!</sui-comment-text>
              <sui-comment-actions>
                <a>Reply</a>
              </sui-comment-actions>
            </sui-comment-content>
            <div class="comments">
              <sui-comment>
                <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
                <sui-comment-content>
                  <sui-comment-author as="a">Jenny Hess</sui-comment-author>
                  <sui-comment-metadata>
                    <span>Just now</span>
                  </sui-comment-metadata>
                  <sui-comment-text>Elliot you are always so right :)</sui-comment-text>
                  <sui-comment-actions>
                    <a>Reply</a>
                  </sui-comment-actions>
                </sui-comment-content>
              </sui-comment>
            </div>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Joe Henderson</sui-comment-author>
              <sui-comment-metadata>
                <span>5 days ago</span>
              </sui-comment-metadata>
              <sui-comment-text>Dude, this is awesome. Thanks so much</sui-comment-text>
              <sui-comment-actions>
                <a>Reply</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <sui-header as="h2" dividing>Content</sui-header>

      <doc-example
        title="avatar"
        description="A comment can contain an image or avatar"
        :code="avatarCode"
      >
        <sui-comment-group>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
            <sui-comment-content>
              <sui-comment-author>Elliot Fu</sui-comment-author>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <doc-example
        title="Metadata"
        description="A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined"
        :code="metadataCode"
      >
        <sui-comment-group>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/stevie.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Stevie Feliciano</sui-comment-author>
              <sui-comment-metadata>
                <div class="date">2 days ago</div>
                <div class="rating">
                  <i class="star icon"></i>
                  5 Faves
                </div>
              </sui-comment-metadata>
              <sui-comment-text>
                Hey guys, I hope this example comment is helping you read this documentation.
              </sui-comment-text>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <doc-example
        title="Actions"
        description="A comment can contain an list of actions a user may perform related to this comment"
        :code="actionsCode"
      >
        <sui-comment-group>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Tom Lukic</sui-comment-author>
              <sui-comment-text>
                This will be great for business reports. I will definitely download this.
              </sui-comment-text>
              <sui-comment-actions>
                <a>Reply</a>
                <a>Save</a>
                <a>Hide</a>
                <a>
                  <i class="expand icon"></i>
                  Full-screen
                </a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <doc-example
        title="Reply Form"
        description="A comment can contain a form to reply to a comment. This may have arbitrary content"
        :code="replyFormCode"
      >
        <sui-comment-group>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/steve.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Steve Jobs</sui-comment-author>
              <sui-comment-metadata>2 days ago</sui-comment-metadata>
              <sui-comment-text>Revolutionary!</sui-comment-text>
              <sui-comment-actions>
                <a>Reply</a>
              </sui-comment-actions>
              <sui-form reply>
                <sui-form-textarea />
                <sui-button color="primary" icon labelPosition="left">
                  <sui-icon name="edit" />
                  Add Reply
                </sui-button>
              </sui-form>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Collapsed"
        description="Comments can be collapsed, or hidden from view"
        :code="collapsedCode"
      >
        <sui-comment-group>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/christian.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Christian Rocha</sui-comment-author>
              <sui-comment-metadata>2 days ago</sui-comment-metadata>
              <sui-comment-text>
                I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
              </sui-comment-text>
              <sui-comment-actions>
                <a>Reply</a>
              </sui-comment-actions>
            </sui-comment-content>
            <sui-comment-group collapsed>
              <sui-comment>
                <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
                <sui-comment-content>
                  <sui-comment-author>Elliot Fu</sui-comment-author>
                  <sui-comment-metadata>1 days ago</sui-comment-metadata>
                  <sui-comment-text>No, it wont</sui-comment-text>
                  <sui-comment-actions>
                    <a>Replay</a>
                  </sui-comment-actions>
                </sui-comment-content>
              </sui-comment>
            </sui-comment-group>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Threaded"
        description="A comment list can be threaded to showing the relationship between conversations"
        :code="threadedCode"
      >
        <sui-comment-group threaded>
          <sui-header as="h3" dividing>Comments</sui-header>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Matt</sui-comment-author>
              <sui-comment-metadata>
                <span>Today at 5:42PM</span>
              </sui-comment-metadata>
              <sui-comment-text>
                How artistic!
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Elliot Fu</sui-comment-author>
              <sui-comment-metadata>
                <span>Yesterday at 12:30AM</span>
              </sui-comment-metadata>
              <sui-comment-text>
                This has been very useful for my research. Thanks as well!
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
            <sui-comment-group>
              <sui-comment>
                <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
                <sui-comment-content>
                  <sui-comment-author as="a">Jenny Hess</sui-comment-author>
                  <sui-comment-metadata>
                    <span>Just now</span>
                  </sui-comment-metadata>
                  <sui-comment-text>
                    Elliot you are always so right :)
                  </sui-comment-text>
                  <sui-comment-actions>
                    <a href="#">Replay</a>
                  </sui-comment-actions>
                </sui-comment-content>
              </sui-comment>
            </sui-comment-group>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Joe Henderson</sui-comment-author>
              <sui-comment-metadata>
                <span>5 days ago</span>
              </sui-comment-metadata>
              <sui-comment-text>
                Dude, this is awesome. Thanks so much
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <doc-example
        title="Minimal"
        description="Comments can hide extra information unless a user shows intent to interact with a comment"
        :code="minimalCode"
      >
        <sui-comment-group minimal>
          <sui-header as="h3" dividing>Comments</sui-header>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Matt</sui-comment-author>
              <sui-comment-metadata>
                <span>Today at 5:42PM</span>
              </sui-comment-metadata>
              <sui-comment-text>
                How artistic!
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Elliot Fu</sui-comment-author>
              <sui-comment-metadata>
                <span>Yesterday at 12:30AM</span>
              </sui-comment-metadata>
              <sui-comment-text>
                This has been very useful for my research. Thanks as well!
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
            <sui-comment-group>
              <sui-comment>
                <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
                <sui-comment-content>
                  <sui-comment-author as="a">Jenny Hess</sui-comment-author>
                  <sui-comment-metadata>
                    <span>Just now</span>
                  </sui-comment-metadata>
                  <sui-comment-text>
                    Elliot you are always so right :)
                  </sui-comment-text>
                  <sui-comment-actions>
                    <a href="#">Replay</a>
                  </sui-comment-actions>
                </sui-comment-content>
              </sui-comment>
            </sui-comment-group>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Joe Henderson</sui-comment-author>
              <sui-comment-metadata>
                <span>5 days ago</span>
              </sui-comment-metadata>
              <sui-comment-text>
                Dude, this is awesome. Thanks so much
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <doc-example
        title="Size"
        description="Comments can have different sizes"
        :code="sizeCode"
      >
        <sui-comment-group size="small">
          <sui-header as="h3" dividing>Comments</sui-header>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Matt</sui-comment-author>
              <sui-comment-metadata>
                <span>Today at 5:42PM</span>
              </sui-comment-metadata>
              <sui-comment-text>
                How artistic!
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Elliot Fu</sui-comment-author>
              <sui-comment-metadata>
                <span>Yesterday at 12:30AM</span>
              </sui-comment-metadata>
              <sui-comment-text>
                This has been very useful for my research. Thanks as well!
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
            <sui-comment-group>
              <sui-comment>
                <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
                <sui-comment-content>
                  <sui-comment-author as="a">Jenny Hess</sui-comment-author>
                  <sui-comment-metadata>
                    <span>Just now</span>
                  </sui-comment-metadata>
                  <sui-comment-text>
                    Elliot you are always so right :)
                  </sui-comment-text>
                  <sui-comment-actions>
                    <a href="#">Replay</a>
                  </sui-comment-actions>
                </sui-comment-content>
              </sui-comment>
            </sui-comment-group>
          </sui-comment>
          <sui-comment>
            <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
            <sui-comment-content>
              <sui-comment-author as="a">Joe Henderson</sui-comment-author>
              <sui-comment-metadata>
                <span>5 days ago</span>
              </sui-comment-metadata>
              <sui-comment-text>
                Dude, this is awesome. Thanks so much
              </sui-comment-text>
              <sui-comment-actions>
                <a href="#">Replay</a>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
      </doc-example>

      <doc-example
        title="Inverted"
        description="Comments's colors can be inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-comment-group inverted>
            <sui-header as="h3" inverted dividing>Comments</sui-header>
            <sui-comment>
              <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
              <sui-comment-content>
                <sui-comment-author as="a">Matt</sui-comment-author>
                <sui-comment-metadata>
                  <span>Today at 5:42PM</span>
                </sui-comment-metadata>
                <sui-comment-text>
                  How artistic!
                </sui-comment-text>
                <sui-comment-actions>
                  <a href="#">Replay</a>
                </sui-comment-actions>
              </sui-comment-content>
            </sui-comment>
            <sui-comment>
              <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
              <sui-comment-content>
                <sui-comment-author as="a">Elliot Fu</sui-comment-author>
                <sui-comment-metadata>
                  <span>Yesterday at 12:30AM</span>
                </sui-comment-metadata>
                <sui-comment-text>
                  This has been very useful for my research. Thanks as well!
                </sui-comment-text>
                <sui-comment-actions>
                  <a href="#">Replay</a>
                </sui-comment-actions>
              </sui-comment-content>
              <sui-comment-group>
                <sui-comment>
                  <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
                  <sui-comment-content>
                    <sui-comment-author as="a">Jenny Hess</sui-comment-author>
                    <sui-comment-metadata>
                      <span>Just now</span>
                    </sui-comment-metadata>
                    <sui-comment-text>
                      Elliot you are always so right :)
                    </sui-comment-text>
                    <sui-comment-actions>
                      <a href="#">Replay</a>
                    </sui-comment-actions>
                  </sui-comment-content>
                </sui-comment>
              </sui-comment-group>
            </sui-comment>
            <sui-comment>
              <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
              <sui-comment-content>
                <sui-comment-author as="a">Joe Henderson</sui-comment-author>
                <sui-comment-metadata>
                  <span>5 days ago</span>
                </sui-comment-metadata>
                <sui-comment-text>
                  Dude, this is awesome. Thanks so much
                </sui-comment-text>
                <sui-comment-actions>
                  <a href="#">Replay</a>
                </sui-comment-actions>
              </sui-comment-content>
            </sui-comment>
          </sui-comment-group>
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
  name: 'CommentDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const commentsCode = `<sui-comment-group>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>How artistic!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>This has been very useful for my research. Thanks as well!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
    <div class="comments">
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>Elliot you are always so right :)</sui-comment-text>
          <sui-comment-actions>
            <a>Reply</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </div>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>Dude, this is awesome. Thanks so much</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const avatarCode = `<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author>Elliot Fu</sui-comment-author>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const metadataCode = `<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/stevie.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Stevie Feliciano</sui-comment-author>
      <sui-comment-metadata>
        <div class="date">2 days ago</div>
        <div class="rating">
          <i class="star icon"></i>
          5 Faves
        </div>
      </sui-comment-metadata>
      <sui-comment-text>
        Hey guys, I hope this example comment is helping you read this documentation.
      </sui-comment-text>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const actionsCode = `<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Tom Lukic</sui-comment-author>
      <sui-comment-text>
        This will be great for business reports. I will definitely download this.
      </sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
        <a>Save</a>
        <a>Hide</a>
        <a>
          <i class="expand icon"></i>
          Full-screen
        </a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const replyFormCode = `<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/steve.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Steve Jobs</sui-comment-author>
      <sui-comment-metadata>2 days ago</sui-comment-metadata>
      <sui-comment-text>Revolutionary!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
      <sui-form reply>
        <sui-form-textarea />
        <sui-button color="primary" icon labelPosition="left">
          <sui-icon name="edit" />
          Add Reply
        </sui-button>
      </sui-form>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const collapsedCode = `<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/christian.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Christian Rocha</sui-comment-author>
      <sui-comment-metadata>2 days ago</sui-comment-metadata>
      <sui-comment-text>
        I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
      </sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group collapsed>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
        <sui-comment-content>
          <sui-comment-author>Elliot Fu</sui-comment-author>
          <sui-comment-metadata>1 days ago</sui-comment-metadata>
          <sui-comment-text>No, it wont</sui-comment-text>
          <sui-comment-actions>
            <a>Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
</sui-comment-group>`

    const threadedCode = `<sui-comment-group threaded>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const minimalCode = `<sui-comment-group minimal>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const sizeCode = `<sui-comment-group size="small">
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`

    const invertedCode = `<sui-segment inverted>
  <sui-comment-group inverted>
    <sui-header as="h3" inverted dividing>Comments</sui-header>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Matt</sui-comment-author>
        <sui-comment-metadata>
          <span>Today at 5:42PM</span>
        </sui-comment-metadata>
        <sui-comment-text>
          How artistic!
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Elliot Fu</sui-comment-author>
        <sui-comment-metadata>
          <span>Yesterday at 12:30AM</span>
        </sui-comment-metadata>
        <sui-comment-text>
          This has been very useful for my research. Thanks as well!
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
      <sui-comment-group>
        <sui-comment>
          <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
          <sui-comment-content>
            <sui-comment-author as="a">Jenny Hess</sui-comment-author>
            <sui-comment-metadata>
              <span>Just now</span>
            </sui-comment-metadata>
            <sui-comment-text>
              Elliot you are always so right :)
            </sui-comment-text>
            <sui-comment-actions>
              <a href="#">Replay</a>
            </sui-comment-actions>
          </sui-comment-content>
        </sui-comment>
      </sui-comment-group>
    </sui-comment>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Joe Henderson</sui-comment-author>
        <sui-comment-metadata>
          <span>5 days ago</span>
        </sui-comment-metadata>
        <sui-comment-text>
          Dude, this is awesome. Thanks so much
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>
  </sui-comment-group>
  </sui-segment>`

    return {
      commentsCode,
      avatarCode,
      metadataCode,
      actionsCode,
      replyFormCode,
      collapsedCode,
      threadedCode,
      minimalCode,
      sizeCode,
      invertedCode
    }
  }
})
</script>