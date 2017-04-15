const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const expect = require('expect');
const Root = require('../root'); // my root-test lives in components/__tests__/, so this is how I require in my components.

describe('root', () => {
  it('renders without problems', () => {
    const root = TestUtils.renderIntoDocument(<Root />);
    expect(root).toExist();
  });
});
