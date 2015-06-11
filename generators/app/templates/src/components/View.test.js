jest.dontMock("./View");

describe("View", function() {
  var React = require("react/addons");
  var TestUtils = React.addons.TestUtils;

  var View = require("./View");

  it("is defined as a React component", function() {
    var component = <View name="test" title="Test" />;

    expect(TestUtils.isElement(component)).toBeTruthy();
  });
});
