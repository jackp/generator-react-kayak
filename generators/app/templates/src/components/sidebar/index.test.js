jest.dontMock("../sidebar");

describe("Sidebar", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;

  var Sidebar = require("../sidebar");

  it("is defined as a React component", function() {
    var component = <Sidebar />;

    expect(TestUtils.isElement(component)).toBeTruthy();
  });
});
