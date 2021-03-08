<template>
  <div>
    <doc-page-header
     title="Table"
     sub="A table displays a collections of data grouped into rows"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Table"
        description="A standard table"
        :code="tableCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Age</sui-table-header-cell>
              <sui-table-header-cell>Job</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>James</sui-table-cell>
              <sui-table-cell>24</sui-table-cell>
              <sui-table-cell>Engineer</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>26</sui-table-cell>
              <sui-table-cell>Engineer</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Elyse</sui-table-cell>
              <sui-table-cell>24</sui-table-cell>
              <sui-table-cell>Designer</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Definition"
        description="A table may be formatted to emphasize a first column that defines a rows content"
        :code="definitionCode"
      >
        <sui-table definition>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell></sui-table-header-cell>
              <sui-table-header-cell>Arguments</sui-table-header-cell>
              <sui-table-header-cell>Description</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>reset rating</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
              <sui-table-cell>Resets rating to default value</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>set rating</sui-table-cell>
              <sui-table-cell>rating (integer)</sui-table-cell>
              <sui-table-cell>Sets the current star rating to specified value</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Structured"
        description="A table can be formatted to display complex structured data"
        :code="structuredCode"
      >
        <sui-table structured celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell rowspan="2">Name</sui-table-header-cell>
              <sui-table-header-cell rowspan="2">Type</sui-table-header-cell>
              <sui-table-header-cell rowspan="2">Files</sui-table-header-cell>
              <sui-table-header-cell colspan="3">Languages</sui-table-header-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-header-cell>Ruby</sui-table-header-cell>
              <sui-table-header-cell>Javascript</sui-table-header-cell>
              <sui-table-header-cell>Python</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>Alpha Team</sui-table-cell>
              <sui-table-cell>Project 1</sui-table-cell>
              <sui-table-cell textAlign="right">2</sui-table-cell>
              <sui-table-cell textAlign="center">
                <sui-icon name="checkmark" color="green" size="large" />
              </sui-table-cell>
              <sui-table-cell></sui-table-cell>
              <sui-table-cell></sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell rowspan="3">Beta Team</sui-table-cell>
              <sui-table-cell>Project 1</sui-table-cell>
              <sui-table-cell textAlign="right">52</sui-table-cell>
              <sui-table-cell textAlign="center">
                <sui-icon name="checkmark" color="green" size="large" />
              </sui-table-cell>
              <sui-table-cell></sui-table-cell>
              <sui-table-cell></sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Project 2</sui-table-cell>
              <sui-table-cell textAlign="right">12</sui-table-cell>
              <sui-table-cell></sui-table-cell>
              <sui-table-cell textAlign="center">
                <sui-icon name="checkmark" color="green" size="large" />
              </sui-table-cell>
              <sui-table-cell></sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Project 3</sui-table-cell>
              <sui-table-cell textAlign="right">21</sui-table-cell>
              <sui-table-cell textAlign="center">
                <sui-icon name="checkmark" color="green" size="large" />
              </sui-table-cell>
              <sui-table-cell></sui-table-cell>
              <sui-table-cell></sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Positive / Negative"
        description="A cell or row may let a user know whether a value is good or bad"
        :code="positiveNegativeCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>No Name Specified</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell negative>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row positive>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>
                <sui-icon name="checkmark" />
                Approved
              </sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell positive>
                <sui-icon name="close" />
                Requires call
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row negative>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Error"
        description="A cell or row may call attention to an error or a negative value"
        :code="errorCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>No Name Specified</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row error>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>Cannot pull data</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell error>
                <sui-icon name="attention" />
                Requires call
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Warning"
        description="A cell or row may warn a user"
        :code=" warningCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>No Name Specified</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row warning>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>
                <sui-icon name="attention" />
                Requires Action
              </sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell warning>
                <sui-icon name="attention" />
                Hostile
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Active"
        description="A cell or row can be active or selected by a user"
        :code="activeCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>No Name Specified</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row active>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>Selected</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>Requires call</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell active>Jill</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Disabled"
        description="A cell can be disabled"
        :code="disabledCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row disabled>
              <sui-table-cell>No Name Specified</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>Selected</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>Requires call</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell disabled>Jill</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Colored Cells"
        description="A cell can be styled by the central color palette colors"
        :code="coloredCellsCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell color="orange">No Name Specified</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row color="blue">
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>
                <sui-icon name="microphone" />
                Recording session
              </sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell color="pink">
                <sui-icon name="child" />
                Baby Party
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell color="green">Vacation</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Marked"
        description="A cell or row can be marked by a colored left or right border"
        :code="markedCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell marked="right" color="blue">No Name Specified</sui-table-cell>
              <sui-table-cell marked="left" color="red">Unknown</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell marked="left" color="green">Jimmy</sui-table-cell>
              <sui-table-cell>
                <sui-icon name="microphone" />
                Recording session
              </sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell marked="left" color="orange">
                <sui-icon name="child" />
                Baby Party
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Unknown</sui-table-cell>
              <sui-table-cell marked="right" color="purple">Vacation</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Single Line"
        description="A table can specify that its cell contents should remain on a single line, and not wrap"
        :code="singleLineCode"
      >
        <sui-table single-line>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Registration Date</sui-table-header-cell>
              <sui-table-header-cell>E-mail address</sui-table-header-cell>
              <sui-table-header-cell>Premium Plan</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John Lilki</sui-table-cell>
              <sui-table-cell>September 14, 2013</sui-table-cell>
              <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
              <sui-table-cell>No</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie Harington</sui-table-cell>
              <sui-table-cell>January 11, 2014</sui-table-cell>
              <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
              <sui-table-cell>Yes</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill Lewis</sui-table-cell>
              <sui-table-cell>May 11, 2014</sui-table-cell>
              <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
              <sui-table-cell>Yes</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Fixed"
        description="A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content"
        :code="fixedCode"
      >
        <sui-table fixed>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Description</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Denied</sui-table-cell>
              <sui-table-cell>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Stacking"
        descirption="A table can specify how it stacks table content responsively"
        :code="stackingCode"
      >
        <sui-table stackable>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Description</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell textAlign="right">None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell textAlign="right">Requires call</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Denied</sui-table-cell>
              <sui-table-cell textAlign="right">None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Selectable Row"
        description="A table can have its rows appear selectable"
        :code="selectableRowCode"
      >
        <sui-table selectable celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Description</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell positive>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row warning>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>Requires call</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell negative>Denied</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Selectable Cell"
        description="A table cell can be selectable"
        :code="selectableCellCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Description</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell positive>Approved</sui-table-cell>
              <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
            </sui-table-row>
            <sui-table-row warning>
              <sui-table-cell>Jimmy</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell negative>Denied</sui-table-cell>
              <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Verical Alignment"
        description="A table header, row, or cell can adjust its vertical alignment"
        :code="verticalAlignmentCode"
      >
        <sui-table striped>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row verticalAlign="top">
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell verticalAlign="top">
                Notes
                <br />
                1<br />
                2<br />
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell verticalAlign="bottom">Approved</sui-table-cell>
              <sui-table-cell>
                Notes
                <br />
                1<br />
                2<br />
              </sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Text Alignment"
        description="A table header, row, or cell can adjust its text alignment"
        :code="textAlignCode"
      >
        <sui-table striped>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell textAlign="right">Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row textAlign="center">
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell textAlign="right">None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>Requires call</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell textAlign="right">None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Striped"
        description="A table can stripe alternate rows of content with a darker color to increase contrast"
        :code="stripedCode"
      >
        <sui-table striped>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Date Joined</sui-table-header-cell>
              <sui-table-header-cell>E-mail</sui-table-header-cell>
              <sui-table-header-cell>Called</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John Lilki</sui-table-cell>
              <sui-table-cell>September 14, 2013</sui-table-cell>
              <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
              <sui-table-cell>No</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie Harington</sui-table-cell>
              <sui-table-cell>January 11, 2014</sui-table-cell>
              <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
              <sui-table-cell>Yes</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill Lewis</sui-table-cell>
              <sui-table-cell>May 11, 2014</sui-table-cell>
              <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
              <sui-table-cell>Yes</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Celled"
        description="A table may be divided each row into separate cells"
        :code="celledCode"
      >
        <sui-table celled>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>Requires call</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Denied</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
          <sui-table-footer>
            <sui-table-row>
              <sui-table-cell>3 People</sui-table-cell>
              <sui-table-cell>2 Approved</sui-table-cell>
              <sui-table-cell></sui-table-cell>
            </sui-table-row>
          </sui-table-footer>
        </sui-table>
      </doc-example>

      <doc-example
        title="Basic"
        description="A table can reduce its complexity to increase readability"
        :code="basicCode"
      >
        <div>
          <sui-table basic>
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Notes</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>John</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jamie</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>Requires call</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jill</sui-table-cell>
                <sui-table-cell>Denied</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
          <br />
          <sui-table basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Notes</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>John</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jamie</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>Requires call</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jill</sui-table-cell>
                <sui-table-cell>Denied</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
      </doc-example>

      <doc-example
        title="Collapsing"
        description="A table can be collapsing, taking up only as much space as its rows"
        :code="collapsingCode"
      >
        <sui-table collapsing>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Age</sui-table-header-cell>
              <sui-table-header-cell>Gender</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>

          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>27</sui-table-cell>
              <sui-table-cell>Male</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>32</sui-table-cell>
              <sui-table-cell>Other</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Denied</sui-table-cell>
              <sui-table-cell>22</sui-table-cell>
              <sui-table-cell>Other</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>

          <sui-table-footer>
            <sui-table-row>
              <sui-table-header-cell>3 People</sui-table-header-cell>
              <sui-table-header-cell>2 Approved</sui-table-header-cell>
              <sui-table-header-cell></sui-table-header-cell>
              <sui-table-header-cell></sui-table-header-cell>
              <sui-table-header-cell></sui-table-header-cell>
            </sui-table-row>
          </sui-table-footer>
        </sui-table>
      </doc-example>

      <doc-example
        title="Collapsing Cell"
        description="A cell can be collapsing so that it only uses as much space as required"
        :code="collapsingCellCode"
      >
        <sui-table>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell collapsing>
                <sui-icon name="folder" /> node_modules
              </sui-table-cell>
              <sui-table-cell>Initial commit</sui-table-cell>
              <sui-table-cell>10 hours ago</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell collapsing>
                <sui-icon name="folder" /> node_modules
              </sui-table-cell>
              <sui-table-cell>Initial commit</sui-table-cell>
              <sui-table-cell>10 hours ago</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell collapsing>
                <sui-icon name="folder" /> node_modules
              </sui-table-cell>
              <sui-table-cell>Initial commit</sui-table-cell>
              <sui-table-cell>10 hours ago</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Column Count"
        description="A table can specify its column count to divide its content evenly"
        :code="columnCountCode"
      >
        <sui-table :columns="5">
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Name</sui-table-header-cell>
              <sui-table-header-cell>Status</sui-table-header-cell>
              <sui-table-header-cell>Age</sui-table-header-cell>
              <sui-table-header-cell>Gender</sui-table-header-cell>
              <sui-table-header-cell>Notes</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>

          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>27</sui-table-cell>
              <sui-table-cell>Male</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
              <sui-table-cell>32</sui-table-cell>
              <sui-table-cell>Other</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jill</sui-table-cell>
              <sui-table-cell>Denied</sui-table-cell>
              <sui-table-cell>22</sui-table-cell>
              <sui-table-cell>Other</sui-table-cell>
              <sui-table-cell>None</sui-table-cell>
            </sui-table-row>
          </sui-table-body>

          <sui-table-footer>
            <sui-table-row>
              <sui-table-header-cell>3 People</sui-table-header-cell>
              <sui-table-header-cell>2 Approved</sui-table-header-cell>
              <sui-table-header-cell></sui-table-header-cell>
              <sui-table-header-cell></sui-table-header-cell>
              <sui-table-header-cell></sui-table-header-cell>
            </sui-table-row>
          </sui-table-footer>
        </sui-table>
      </doc-example>

      <doc-example
        title="Column Width"
        description="Column Width"
        :code="columnWidthCode"
      >
        <sui-table>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell :width="10">Name</sui-table-header-cell>
              <sui-table-header-cell :width="6">Status</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>John</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Jamie</sui-table-cell>
              <sui-table-cell>Approved</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Colored"
        description="A table can be given a color to distinguish it from other tables"
        :code="coloredCode"
      >
        <sui-table color="red">
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Food</sui-table-header-cell>
              <sui-table-header-cell>Calories</sui-table-header-cell>
              <sui-table-header-cell>Protein</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>Apples</sui-table-cell>
              <sui-table-cell>200</sui-table-cell>
              <sui-table-cell>0g</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Orange</sui-table-cell>
              <sui-table-cell>310</sui-table-cell>
              <sui-table-cell>0g</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Inverted"
        description="A table's colors can be inverted"
        :code="invertedCode"
      >
        <sui-table inverted>
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>Food</sui-table-header-cell>
              <sui-table-header-cell>Calories</sui-table-header-cell>
              <sui-table-header-cell>Protein</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>Apples</sui-table-cell>
              <sui-table-cell>200</sui-table-cell>
              <sui-table-cell>0g</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Orange</sui-table-cell>
              <sui-table-cell>310</sui-table-cell>
              <sui-table-cell>0g</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </doc-example>

      <doc-example
        title="Padded"
        description="A table may sometimes need to be more padded for legibility"
        :code="paddedCode"
      >
        <div>
          <sui-table padded>
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Notes</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>John</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jamie</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
          <sui-table padded="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Notes</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>John</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jamie</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
      </doc-example>

      <doc-example
        title="Compact"
        description="A table may sometimes need to be more compact to make more rows visible at a time"
        :code="compactCode"
      >
        <div>
          <sui-table compact>
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Notes</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>John</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jamie</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>Requires call</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
          <sui-table compact="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Notes</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>John</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jamie</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>Requires call</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
      </doc-example>

      <doc-example
        title="Size"
        description="A table can also be small or large"
        :code="sizeCode"
      >
        <sui-table size="small">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Notes</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>John</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jamie</sui-table-cell>
                <sui-table-cell>Approved</sui-table-cell>
                <sui-table-cell>Requires call</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Jill</sui-table-cell>
                <sui-table-cell>Denied</sui-table-cell>
                <sui-table-cell>None</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'TableDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const tableCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Job</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>James</sui-table-cell>
      <sui-table-cell>24</sui-table-cell>
      <sui-table-cell>Engineer</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>26</sui-table-cell>
      <sui-table-cell>Engineer</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Elyse</sui-table-cell>
      <sui-table-cell>24</sui-table-cell>
      <sui-table-cell>Designer</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const definitionCode = `<sui-table definition>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell>Arguments</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>reset rating</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
      <sui-table-cell>Resets rating to default value</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>set rating</sui-table-cell>
      <sui-table-cell>rating (integer)</sui-table-cell>
      <sui-table-cell>Sets the current star rating to specified value</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const structuredCode = `<sui-table structured celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell rowspan="2">Name</sui-table-header-cell>
      <sui-table-header-cell rowspan="2">Type</sui-table-header-cell>
      <sui-table-header-cell rowspan="2">Files</sui-table-header-cell>
      <sui-table-header-cell colspan="3">Languages</sui-table-header-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-header-cell>Ruby</sui-table-header-cell>
      <sui-table-header-cell>Javascript</sui-table-header-cell>
      <sui-table-header-cell>Python</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Alpha Team</sui-table-cell>
      <sui-table-cell>Project 1</sui-table-cell>
      <sui-table-cell textAlign="right">2</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell rowspan="3">Beta Team</sui-table-cell>
      <sui-table-cell>Project 1</sui-table-cell>
      <sui-table-cell textAlign="right">52</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Project 2</sui-table-cell>
      <sui-table-cell textAlign="right">12</sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Project 3</sui-table-cell>
      <sui-table-cell textAlign="right">21</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const positiveNegativeCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell negative>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row positive>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="checkmark" />
        Approved
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell positive>
        <sui-icon name="close" />
        Requires call
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row negative>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const errorCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row error>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Cannot pull data</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell error>
        <sui-icon name="attention" />
        Requires call
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const warningCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="attention" />
        Requires Action
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell warning>
        <sui-icon name="attention" />
        Hostile
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const activeCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row active>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Selected</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell active>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const disabledCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row disabled>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Selected</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell disabled>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const coloredCellsCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell color="orange">No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row color="blue">
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="microphone" />
        Recording session
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell color="pink">
        <sui-icon name="child" />
        Baby Party
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell color="green">Vacation</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const markedCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell marked="right" color="blue">No Name Specified</sui-table-cell>
      <sui-table-cell marked="left" color="red">Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell marked="left" color="green">Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="microphone" />
        Recording session
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell marked="left" color="orange">
        <sui-icon name="child" />
        Baby Party
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell marked="right" color="purple">Vacation</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const singleLineCode = `<sui-table single-line>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Registration Date</sui-table-header-cell>
      <sui-table-header-cell>E-mail address</sui-table-header-cell>
      <sui-table-header-cell>Premium Plan</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John Lilki</sui-table-cell>
      <sui-table-cell>September 14, 2013</sui-table-cell>
      <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
      <sui-table-cell>No</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie Harington</sui-table-cell>
      <sui-table-cell>January 11, 2014</sui-table-cell>
      <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill Lewis</sui-table-cell>
      <sui-table-cell>May 11, 2014</sui-table-cell>
      <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const fixedCode = `<sui-table fixed>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const stackingCode = `<sui-table stackable>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const selectableRowCode = `<sui-table selectable celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell positive>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell negative>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const selectableCellCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell positive>Approved</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell negative>Denied</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const verticalAlignmentCode = `<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row verticalAlign="top">
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell verticalAlign="top">
        Notes
        <br />
        1<br />
        2<br />
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell verticalAlign="bottom">Approved</sui-table-cell>
      <sui-table-cell>
        Notes
        <br />
        1<br />
        2<br />
      </sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const textAlignCode = `<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell textAlign="right">Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row textAlign="center">
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const stripedCode = `<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Date Joined</sui-table-header-cell>
      <sui-table-header-cell>E-mail</sui-table-header-cell>
      <sui-table-header-cell>Called</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John Lilki</sui-table-cell>
      <sui-table-cell>September 14, 2013</sui-table-cell>
      <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
      <sui-table-cell>No</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie Harington</sui-table-cell>
      <sui-table-cell>January 11, 2014</sui-table-cell>
      <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill Lewis</sui-table-cell>
      <sui-table-cell>May 11, 2014</sui-table-cell>
      <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const celledCode = `<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
  <sui-table-footer>
    <sui-table-row>
      <sui-table-cell>3 People</sui-table-cell>
      <sui-table-cell>2 Approved</sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`

    const basicCode = `<div>
  <sui-table basic>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <br />
  <sui-table basic="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`

    const collapsingCode = `<sui-table collapsing>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Gender</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>

  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>27</sui-table-cell>
      <sui-table-cell>Male</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>32</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>22</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>

  <sui-table-footer>
    <sui-table-row>
      <sui-table-header-cell>3 People</sui-table-header-cell>
      <sui-table-header-cell>2 Approved</sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`

    const collapsingCellCode = `<sui-table>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const columnCountCode = `<sui-table :columns="5">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Gender</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>

  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>27</sui-table-cell>
      <sui-table-cell>Male</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>32</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>22</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>

  <sui-table-footer>
    <sui-table-row>
      <sui-table-header-cell>3 People</sui-table-header-cell>
      <sui-table-header-cell>2 Approved</sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`

    const columnWidthCode = `<sui-table>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell :width="10">Name</sui-table-header-cell>
      <sui-table-header-cell :width="6">Status</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const coloredCode = `<sui-table color="red">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Food</sui-table-header-cell>
      <sui-table-header-cell>Calories</sui-table-header-cell>
      <sui-table-header-cell>Protein</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Apples</sui-table-cell>
      <sui-table-cell>200</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Orange</sui-table-cell>
      <sui-table-cell>310</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const invertedCode = `<sui-table inverted>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Food</sui-table-header-cell>
      <sui-table-header-cell>Calories</sui-table-header-cell>
      <sui-table-header-cell>Protein</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Apples</sui-table-cell>
      <sui-table-cell>200</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Orange</sui-table-cell>
      <sui-table-cell>310</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    const paddedCode = `<div>
  <sui-table padded>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <sui-table padded="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`

    const compactCode = `<div>
  <sui-table compact>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <sui-table compact="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`

    const sizeCode = `<sui-table size="small">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`

    return {
      tableCode,
      definitionCode,
      structuredCode,
      positiveNegativeCode,
      errorCode,
      warningCode,
      activeCode,
      disabledCode,
      coloredCellsCode,
      markedCode,
      singleLineCode,
      fixedCode,
      stackingCode,
      selectableRowCode,
      selectableCellCode,
      verticalAlignmentCode,
      textAlignCode,
      stripedCode,
      celledCode,
      basicCode,
      collapsingCode,
      collapsingCellCode,
      columnCountCode,
      columnWidthCode,
      coloredCode,
      invertedCode,
      paddedCode,
      compactCode,
      sizeCode
    }
  }
})
</script>